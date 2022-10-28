use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

pub fn menu_items() -> tauri::Menu {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let close = CustomMenuItem::new("close".to_string(), "Close");
    let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
    let menu = Menu::new()
      .add_native_item(MenuItem::Copy)
      .add_submenu(submenu);
  
    return menu;
  }