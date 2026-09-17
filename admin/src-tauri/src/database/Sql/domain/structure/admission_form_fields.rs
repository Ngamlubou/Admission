pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS admission_form_fields (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL UNIQUE
    );
";
