use tauri::AppHandle;
use rusqlite::Connection;
use std::sync::Mutex;
use crate::storage::initialize_storage;
use crate::database::{open_database, run_migrations, };

pub struct Database { connection: Mutex<Connection>, }

impl Database {
     pub fn initialize(app: &AppHandle,)
        -> Result<Self, Box<dyn std::error::Error>> {

            let paths = initialize_storage(app)?;
    let connection = open_database(&paths)?;
    run_migrations(&connection)?;

            Ok(Self {  connection: Mutex::new(connection), }) }

    pub fn connection(&self,)
    -> std::sync::MutexGuard<'_, Connection> {
   self.connection.lock().unwrap()
} }
