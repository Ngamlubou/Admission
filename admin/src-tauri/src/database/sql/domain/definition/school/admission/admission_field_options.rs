pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS admission_field_options (
        uid TEXT PRIMARY KEY,

        admission_field_uid TEXT NOT NULL
            REFERENCES admission_field(uid)
            DEFERRABLE INITIALLY DEFERRED,

        name TEXT NOT NULL,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_admission_field_options_identity
        ON admission_field_options (
            admission_field_uid,
            name
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO admission_field_options (
        uid,
        admission_field_uid,
        name,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8);
";
