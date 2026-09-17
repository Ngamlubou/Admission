pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS disability_types (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL UNIQUE
    );
";
