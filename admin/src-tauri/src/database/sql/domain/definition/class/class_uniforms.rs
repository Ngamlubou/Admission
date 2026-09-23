pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS class_uniforms (
        uid TEXT PRIMARY KEY,

        class_uid TEXT NOT NULL,
        uniform_uid TEXT NOT NULL,

        UNIQUE (class_uid, uniform_uid),

        FOREIGN KEY (class_uid)
            REFERENCES classes(uid),

        FOREIGN KEY (uniform_uid)
            REFERENCES uniforms(uid)
    );
";

pub const INSERT: &str = "
    INSERT INTO class_uniforms (
        uid,
        class_uid,
        uniform_uid
    )
    VALUES (?1, ?2, ?3);
";
