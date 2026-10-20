use rusqlite::Connection;

pub mod application;
pub mod authorization;
pub mod definition;
pub mod structure;

pub fn create_tables(
    connection: &Connection,
) -> rusqlite::Result<()> {
    application::create_tables(connection)?;
    definition::create_tables(connection)?;
    structure::create_tables(connection)?;
    authorization::create_tables(connection)?;

    Ok(())
}
