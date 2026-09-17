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
