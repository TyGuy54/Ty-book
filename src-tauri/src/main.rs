#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
mod error_handling;
mod commands;
mod menu;

use crate::menu::menu_items::{menu_items};
use crate::commands::db_commands::{database_setup, insert_into_db, return_data};


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
