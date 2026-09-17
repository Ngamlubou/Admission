pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS uniforms (
        uid TEXT PRIMARY KEY,

        class_uid TEXT NOT NULL,

        gender TEXT NOT NULL,
        name TEXT NOT NULL,
        file TEXT,
        file2 TEXT,

        UNIQUE (class_uid, gender, name),

        FOREIGN KEY (class_uid)
            REFERENCES classes(uid)
    );
";
