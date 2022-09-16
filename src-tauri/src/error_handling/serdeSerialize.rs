use rusqlite::Error;      
use anyhow::Result;
use serde::{ser::Serializer, Serialize};

// honestly just grabbed this code from Stack Overflow
// will need later revisions and studying 

// create the error type that represents all errors possible in our program
#[derive(Debug, thiserror::Error)]
pub enum CommandError {
  #[error(transparent)]
  RusqliteError(#[from] Error),
}

// we must manually implement serde::Serialize sice tauri dosent do it for us
impl Serialize for CommandError {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
      S: Serializer,
    {
      serializer.serialize_str(self.to_string().as_ref())
    }
  }
   
  pub type CommandResult<T, E = CommandError> = Result<T, E>;