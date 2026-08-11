pub mod database;
pub mod commands;
pub mod state;
pub mod models;


use crate::database::Database;
use crate::state::AppState;
use crate::commands::student;
use tauri::Manager;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            let database = Database::initialize(app.handle())?;
            let state = AppState { database, };
            app.manage(state);

            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(), )?; }

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
    student::get_by_code,
    student::get_all,
    student::create,
    student::update,
    student::delete,])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
