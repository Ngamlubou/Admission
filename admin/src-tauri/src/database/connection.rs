use rusqlite::Connection;

use crate::storage::StoragePaths;

pub fn open_database( paths: &StoragePaths,)
-> Result<Connection, rusqlite::Error> {
let connection =  Connection::open(&paths.database)?;
Ok(connection)
}
