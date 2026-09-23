pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS class_timings (
        uid TEXT PRIMARY KEY,

        class_uid TEXT NOT NULL,
        timing_uid TEXT NOT NULL,

        name TEXT NOT NULL,

        UNIQUE (class_uid, timing_uid),

        FOREIGN KEY (class_uid)
            REFERENCES classes(uid),

        FOREIGN KEY (timing_uid)
            REFERENCES timings(uid)
    );
";

pub const INSERT: &str = "
    INSERT INTO class_timings (
        uid,
        class_uid,
        timing_uid,
        name
    )
    VALUES (?1, ?2, ?3, ?4);
";
