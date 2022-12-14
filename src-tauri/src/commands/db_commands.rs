use rusqlite::Connection;
// use chrono::{Datelike, Timelike, Utc};
use std::collections::HashMap;
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

#[derive(Debug)]
struct BooksPayload {
  book_title: String,
}

#[derive(Debug)]
struct PagesPayload {
  page_title: String,
  created_on: String,
  content: String,
}


// makes the books table
#[tauri::command]
pub fn database_setup() -> CommandResult<()>{
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
        page_title	TEXT,
        created_on	TEXT,
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
pub fn insert_into_db(book_name: String, page_name: String, page_content: String) -> CommandResult<()>{
  let conn = Connection::open("/home/tyguy/Desktop/ty-book/text.db")?;
  let book_payload = BooksPayload {book_title: book_name};
  let page_payload = PagesPayload {
    page_title: page_name, 
    created_on: "1-1-1".to_string(), 
    content: page_content
  };

  let book_title = book_payload.book_title;
  println!("inerting into db: {}", book_title);
  println!("inerting into db: {}, {}, {}", page_payload.page_title, page_payload.created_on, page_payload.content);
  
  conn.execute(
    "INSERT INTO books (book_title) VALUES (?1)",
    &[&book_title]
  )?;

  conn.execute(
      "INSERT INTO pages (page_title, created_on, content) VALUES (?1, ?2, ?3)",
      &[
        &page_payload.page_title, 
        &page_payload.created_on, 
        &page_payload.content
      ]
    )?;

  Ok(())
}

#[tauri::command]
pub fn return_data() -> CommandResult<Vec<HashMap<String, String>>> {
  let conn = Connection::open("/home/tyguy/Desktop/ty-book/text.db")?;

  let mut data = conn.prepare("
      SELECT
        book_id
        page_id,
        book_title,
        page_title,
        created_on,
        content
      FROM
        pages
      INNER JOIN books ON pages.page_id = books.book_id"
  )?;



  let return_data = data.query_map([], |row| {
    // Ok(SelectedData{
    //   // id: row.get(0)?,
    //   book_title: row.get(1)?,
    //   page_title: row.get(2)?,
    // })
    let mut book_data =  HashMap::new();

    let book_title = row.get(1)?;
    let page_title = row.get(2)?;
    let created_on = row.get(3)?;
    let content = row.get(4)?;

    book_data.insert(String::from("book_title"), book_title);
    book_data.insert(String::from("page_title"), page_title);
    book_data.insert(String::from("created_on"), created_on);
    book_data.insert(String::from("content"), content);
    
    Ok(book_data)
  })?;


    let mut data_to_send = Vec::new();
    for results in return_data {
        data_to_send.push(results?);
    }

  Ok(data_to_send)
}