use rusqlite::Connection;
use std::sync::{Mutex, MutexGuard};
use tauri::{AppHandle, Manager};

use super::run_migrations;

pub struct Database {
    connection: Mutex<Connection>,
    root: PathBuf,
}

impl Database {
    pub fn initialize(
        app: &AppHandle,
    ) -> Result<Self, Box<dyn std::error::Error>> {

        let app_data = app.path().app_data_dir()?;

let root = app_data.join("SmartPea");
let students = root.join("files").join("students");

std::fs::create_dir_all(&students)?;

let database_path = root.join("smartpea.db");

        let connection = Connection::open(database_path)?;

        run_migrations(&connection)?;

        Ok(Self {
            connection: Mutex::new(connection),
            root,
        })
    }

    pub fn connection(&self) -> MutexGuard<'_, Connection> {
        self.connection.lock().unwrap()
    }
}
