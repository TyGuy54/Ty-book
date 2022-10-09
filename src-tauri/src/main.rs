#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
mod error_handling;
mod commands;

use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};
use crate::commands::db_commands::{database_setup, insert_into_db, return_data};

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
    .invoke_handler(tauri::generate_handler![database_setup, insert_into_db, return_data])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
