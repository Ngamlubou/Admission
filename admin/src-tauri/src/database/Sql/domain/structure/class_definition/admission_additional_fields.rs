pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS admission_additional_fields (
        uid TEXT PRIMARY KEY,

        class_uid TEXT NOT NULL,

        name TEXT NOT NULL,
        required INTEGER NOT NULL,

        FOREIGN KEY (class_uid)
            REFERENCES classes(uid)
    );
";
