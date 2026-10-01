pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS frequencies (
        id INTEGER PRIMARY KEY,

        name TEXT NOT NULL UNIQUE
    );
";

pub const INSERT: &str = "
    INSERT INTO frequencies (
        id,
        name
    )
    VALUES (?1, ?2);
";
