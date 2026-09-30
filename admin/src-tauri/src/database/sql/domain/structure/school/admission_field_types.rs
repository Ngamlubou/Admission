pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS admission_field_types (
        id INTEGER PRIMARY KEY,

        section TEXT NOT NULL,
        entity TEXT NOT NULL,
        name TEXT NOT NULL,

        UNIQUE (section, entity, name)
    );
";

pub const INSERT: &str = "
    INSERT INTO admission_field_types (
        id,
        section,
        entity,
        name
    )
    VALUES (?1, ?2, ?3, ?4);
";
