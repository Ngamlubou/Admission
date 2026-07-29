use tauri::{AppHandle, Manager};
use std::fs;
use std::path::PathBuf;

pub struct StoragePaths {
    pub root: PathBuf,
    pub database: PathBuf,
    pub backup: PathBuf,
    pub logs: PathBuf,
    pub exports: PathBuf,
    pub temp: PathBuf,
}

pub fn initialize_storage(app: &AppHandle,) -> Result<StoragePaths, Box<dyn std::error::Error>> {
    let app_data = app.path().app_data_dir()?;

    let root = app_data.join("SmartPea");

    fs::create_dir_all(&root)?;
    fs::create_dir_all(root.join("backup"))?;
    fs::create_dir_all(root.join("logs"))?;
    fs::create_dir_all(root.join("exports"))?;
    fs::create_dir_all(root.join("temp"))?;

    Ok(StoragePaths {
        database: root.join("smartpea.db"),
        backup: root.join("backup"),
        logs: root.join("logs"),
        exports: root.join("exports"),
        temp: root.join("temp"),
        root,
    })
}
