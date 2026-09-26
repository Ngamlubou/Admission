pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS document_types (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL UNIQUE
    );
";

pub const INSERT: &str = "
    INSERT INTO document_types (
        id,
        name
    )
    VALUES (?1, ?2);
";
