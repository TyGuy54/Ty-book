#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
use std::fs::OpenOptions;
use std::io::Write;
use std::fs::File;
use std::path::Path;
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};
// use std::io::Error;


#[tauri::command]
fn make_books(content: String) {
  let new_page = "page.txt";

  if Path::new(new_page).exists() {
      let mut file = OpenOptions::new()
          .append(true)
          .open(new_page)
          .expect("cannot open file");

      file.write_all(content.as_bytes()).expect("failed to open file");
    
  } else {
      let mut file = File::create(new_page).expect("failed to create file");
      file.write_all(content.as_bytes()).expect("failed to write to file");
  }

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
