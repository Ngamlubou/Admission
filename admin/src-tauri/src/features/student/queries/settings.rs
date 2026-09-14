use rusqlite::Connection;
use std::collections::HashMap;

pub fn get_all(connection: &Connection) -> rusqlite::Result<HashMap<String, String>> {
    let mut statement = connection.prepare(
        "SELECT key, value FROM settings"
    )?;

    let rows = statement.query_map([], |row| {
        Ok((
            row.get::<_, String>(0)?,
            row.get::<_, String>(1)?,
        ))
    })?;

    let mut settings = HashMap::new();

    for row in rows {
        let (key, value) = row?;
        settings.insert(key, value);
    }

    Ok(settings)
}
