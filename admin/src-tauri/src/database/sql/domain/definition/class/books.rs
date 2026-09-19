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

pub const INSERT: &str = "
    INSERT INTO books (
        uid,
        class_uid,
        subject,
        book_type,
        file,
        file2,
        price
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7);
";
