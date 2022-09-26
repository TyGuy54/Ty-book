#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
mod error_handling;

use rusqlite::Connection;
// use chrono::{Datelike, Timelike, Utc};
// use std::collections::HashMap;
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};
use crate::error_handling::serdeSerialize::CommandResult;

// I want to do soemthing like this for databse connections that
// but for now it seems unessecary
// struct DBConnection {}
// impl DBConnection {
//   pub fn new(db: &str) -> Connection {
//       Connection::open(db)
//         .expect("could not connect to data base")
//   }
// }


struct BooksPayload {
  book_title: String,
}

struct PagesPayload {
  paget_title: String,
  creadted_on: String,
  content: String,
}

// makes the books table
#[tauri::command]
fn database_setup() -> CommandResult<()>{
  let conn = Connection::open("/home/tyguy/Desktop/ty-book/text.db")?;

    conn.execute(
        "CREATE TABLE if not exists books (
          book_id	INTEGER,
          book_title	TEXT,
          PRIMARY KEY(book_id)
        )",
        [],
    )?;

    conn.execute(
      "CREATE TABLE if not exists pages (
        page_id	INTEGER,
        title	TEXT,
        creadted_on	TEXT,
        content	TEXT,
        PRIMARY KEY(page_id),
        FOREIGN KEY(page_id) REFERENCES books(book_id)
      )",
      [],
    )?;

    print!("Made Db and Tables: \n");

    Ok(())
}

#[tauri::command]
fn insert_into_book(data: String) -> CommandResult<()>{
  let conn = Connection::open("/home/tyguy/Desktop/ty-book/text.db")?;

  let book_title = data;
  println!("inerting into db: {}", book_title);
  conn.execute(
    "INSERT INTO books (book_title) VALUES (?1)",
    &[&book_title]
  )?;

  Ok(())
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
    .invoke_handler(tauri::generate_handler![database_setup, insert_into_book])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
