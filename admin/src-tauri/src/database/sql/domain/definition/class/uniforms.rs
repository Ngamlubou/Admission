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

pub const INSERT: &str = "
    INSERT INTO uniforms (
        uid,
        class_uid,
        gender,
        name,
        file,
        file2
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6);
";
