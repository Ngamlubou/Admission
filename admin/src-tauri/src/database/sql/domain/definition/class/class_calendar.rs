pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS class_calendar (
        uid TEXT PRIMARY KEY,

        calendar_uid TEXT NOT NULL,
        class_uid TEXT NOT NULL,

        FOREIGN KEY (uid, calendar_uid)
            REFERENCES calendar(uid),

        FOREIGN KEY (class_uid)
            REFERENCES classes(uid)
    );
";

pub const INSERT: &str = "
    INSERT INTO class_calendar (
        uid,
        calendar_uid,
        class_uid
    )
    VALUES (?1, ?2, ?3);
";
