pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS book_types (
        uid TEXT PRIMARY KEY,

        schools_identity_uid TEXT NOT NULL
            REFERENCES schools_identity(uid)
            DEFERRABLE INITIALLY DEFERRED,

        name TEXT NOT NULL,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_book_types_identity
        ON book_types (schools_identity_uid, name)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO book_types (
        uid,
        schools_identity_uid,
        name,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8);
";
