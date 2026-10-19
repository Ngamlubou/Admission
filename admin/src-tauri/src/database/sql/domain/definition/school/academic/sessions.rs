pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS sessions (
        uid TEXT PRIMARY KEY,

        schools_identity_uid TEXT NOT NULL
            REFERENCES schools_identity(uid)
            DEFERRABLE INITIALLY DEFERRED,

        name TEXT NOT NULL,
        start_date TEXT NOT NULL,
        end_date TEXT NOT NULL,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT,

        CHECK (end_date >= start_date)
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_sessions_identity
        ON sessions (schools_identity_uid, name)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO sessions (
        uid,
        schools_identity_uid,
        name,
        start_date,
        end_date,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10);
";
