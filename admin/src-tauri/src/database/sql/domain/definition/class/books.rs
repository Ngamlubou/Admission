pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS books (
        uid TEXT PRIMARY KEY,

        class_uid TEXT NOT NULL
            REFERENCES classes(uid)
            DEFERRABLE INITIALLY DEFERRED,

        subject_uid TEXT NOT NULL
            REFERENCES book_subjects(uid)
            DEFERRABLE INITIALLY DEFERRED,

        book_type_uid TEXT NOT NULL
            REFERENCES book_types(uid)
            DEFERRABLE INITIALLY DEFERRED,

        file TEXT,
        file2 TEXT,

        price_minor INTEGER
            CHECK (price_minor IS NULL OR price_minor >= 0),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_books_identity
        ON books (class_uid, subject_uid, book_type_uid)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO books (
        uid,
        class_uid,
        subject_uid,
        book_type_uid,
        file,
        file2,
        price_minor,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12);
";
