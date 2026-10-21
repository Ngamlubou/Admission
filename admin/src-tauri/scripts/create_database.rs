
use rusqlite::Connection;
use std::fs;
use std::path::PathBuf;

#[path = "src/database/sql/mod.rs"]
mod sql;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let resources =
        PathBuf::from(env!("CARGO_MANIFEST_DIR"))
            .join("resources");

    fs::create_dir_all(&resources)?;

    let database_path = resources.join("smart_pea.db");

    if database_path.exists() {
        fs::remove_file(&database_path)?;
    }

    let connection = Connection::open(&database_path)?;

    connection.execute_batch("PRAGMA foreign_keys = ON;")?;

    sql::application::create_tables(&connection)?;
    sql::domain::create_tables(&connection)?;

    println!(
        "Created database template: {}",
        database_path.display()
    );

    Ok(())
}
