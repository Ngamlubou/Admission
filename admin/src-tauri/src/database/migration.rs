use std::collections::HashSet;
use rusqlite::{params, Connection};
use crate::database::migrations::m001_initial;

pub struct Migration {
    pub version: i32,
    pub name: &'static str,
    pub up: fn(&Connection) -> rusqlite::Result<()>,
}
pub fn run_migrations( connection: &Connection,)
-> rusqlite::Result<()> {
    connection.execute(
    "CREATE TABLE IF NOT EXISTS schema_migrations (
        version INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        applied_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP   );",
    [], )?;

    let migrations =  vec![  m001_initial::m001_initial(), ];

    let mut statement = connection.prepare(
    "SELECT version FROM schema_migrations;", )?;

let applied_versions = statement.query_map([], |row| {
    row.get::<_, i32>(0) })?;

    let mut applied = HashSet::new();

for version in applied_versions {
         applied.insert(version?);}

for migration in migrations {
if applied.contains(&migration.version) { continue; }

(migration.up)(connection)?;

connection.execute(
    "INSERT INTO schema_migrations (version, name)
     VALUES (?, ?);",
    params![migration.version, migration.name], )?;
}
     Ok(())
}

