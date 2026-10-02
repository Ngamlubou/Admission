pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS discount_types (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL UNIQUE
    );
";

pub const INSERT: &str = "
    INSERT INTO discount_types (
        id,
        name
    )
    VALUES (?1, ?2);
";
