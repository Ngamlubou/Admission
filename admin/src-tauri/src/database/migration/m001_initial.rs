use rusqlite::Connection;

use crate::database::migration::Migration;
use crate::database::sql::{application, domain};

fn up(connection: &Connection) -> rusqlite::Result<()> {

    Ok(())
}

pub fn m001_initial() -> Migration {
    Migration {
        version: 1,
        name: "initial",
        up,
    }
}
