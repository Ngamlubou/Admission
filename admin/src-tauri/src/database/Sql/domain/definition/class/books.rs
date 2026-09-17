pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS books (
        uid TEXT PRIMARY KEY,

        class_uid TEXT NOT NULL,

        subject TEXT NOT NULL,
        book_type TEXT NOT NULL,
        file TEXT,
        file2 TEXT,
        price REAL,

        UNIQUE (class_uid, subject, book_type),

        FOREIGN KEY (class_uid)
            REFERENCES classes(uid)
    );
";
