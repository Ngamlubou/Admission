pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS fees (
        uid TEXT PRIMARY KEY,

        class_uid TEXT NOT NULL,

        name TEXT NOT NULL,
        amount REAL NOT NULL,
        frequency TEXT NOT NULL,

        UNIQUE (class_uid, name),

        FOREIGN KEY (class_uid)
            REFERENCES classes(uid)
    );
";

pub const INSERT: &str = "
    INSERT INTO fees (
        uid,
        class_uid,
        name,
        amount,
        frequency
    )
    VALUES (?1, ?2, ?3, ?4, ?5);
";
