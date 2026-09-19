pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS timings (
    uid TEXT PRIMARY KEY,

    class_uid TEXT NOT NULL,
    name TEXT NOT NULL,
    start_time TEXT NOT NULL,
    end_time TEXT NOT NULL,

    UNIQUE (class_uid, name),

    FOREIGN KEY (class_uid)
        REFERENCES classes(uid)
);
";

pub const INSERT: &str = "
    INSERT INTO timings (
        uid,
        class_uid,
        name,
        start_time,
        end_time
    )
    VALUES (?1, ?2, ?3, ?4, ?5);
";
