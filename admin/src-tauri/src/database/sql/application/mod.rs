use rusqlite::Connection;

pub mod schema_migrations;
pub mod settings;
pub mod sync_mutations;
pub mod sync_record_versions;

pub fn create_tables(
    connection: &Connection,
) -> rusqlite::Result<()> {
    connection.execute_batch(schema_migrations::CREATE_TABLE)?;
    connection.execute_batch(settings::CREATE_TABLE)?;
    connection.execute_batch(sync_mutations::CREATE_TABLE)?;
    connection.execute_batch(sync_record_versions::CREATE_TABLE)?;

    Ok(())
}
