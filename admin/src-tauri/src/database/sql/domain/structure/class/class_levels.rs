pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS class_levels (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL UNIQUE
    );
";

pub const INSERT: &str = "
    INSERT INTO class_levels (
        id,
        name
    )
    VALUES (?1, ?2);
";
