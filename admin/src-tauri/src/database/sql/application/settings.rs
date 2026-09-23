pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
    );
";

pub const INSERT: &str = "
    INSERT INTO settings (
        key,
        value
    )
    VALUES (?1, ?2);
";

pub const UPDATE: &str = "
    UPDATE settings
    SET
        value = ?1
    WHERE key = ?2;
";

pub const DELETE: &str = "
    DELETE FROM settings
    WHERE key = ?1;
";
