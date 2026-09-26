pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS uniform_item_types (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL UNIQUE
    );
";

pub const INSERT: &str = "
    INSERT INTO uniform_item_types (
        id,
        name
    )
    VALUES (?1, ?2);
";
