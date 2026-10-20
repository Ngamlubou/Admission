use rusqlite::Connection;

use crate::database::migration::Migration;
use crate::database::sql::{application, domain};

fn up(connection: &Connection) -> rusqlite::Result<()> {
    connection.execute_batch("PRAGMA foreign_keys = ON;")?;

    application::create_tables(connection)?;
    domain::create_tables(connection)?;

    Ok(())
}

pub fn m001_initial() -> Migration {
    Migration {
        version: 1,
        name: "initial",
        up,
    }
}
