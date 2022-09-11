#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
// use std::fs::OpenOptions;
// use std::io::Write;
// use std::fs::File;
// use std::path::Path;
use rusqlite::{Connection, Result};
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};


fn make_db() -> Result<()> {
  let conn = Connection::open("db/test.db")?;

    conn.execute(
        "create table if not exists cat_colors (
             id integer primary key,
             name text not null unique
         )",
        [],
    )?;
    conn.execute(
        "create table if not exists cats (
             id integer primary key,
             name text not null,
             color_id integer not null references cat_colors(id)
         )",
        [],
    )?;

    Ok(())

}

#[tauri::command]
fn make_books() {
  make_db();
}



fn menu_items() -> tauri::Menu {
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let close = CustomMenuItem::new("close".to_string(), "Close");
  let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
  let menu = Menu::new()
    .add_native_item(MenuItem::Copy)
    .add_submenu(submenu);

  return menu;
}


fn main() {
  tauri::Builder::default()
    .menu(menu_items())
    .on_menu_event(|event| {
      match event.menu_item_id() {
        "quit" => {
          std::process::exit(0);
        }
        "close" => {
          event.window().close().unwrap();
        }
        _ => {}
      }
    })
    .invoke_handler(tauri::generate_handler![make_books])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
