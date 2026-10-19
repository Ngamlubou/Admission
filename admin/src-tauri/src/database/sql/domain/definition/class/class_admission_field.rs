pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS class_admission_field (
        uid TEXT PRIMARY KEY,

        class_uid TEXT NOT NULL
            REFERENCES classes(uid)
            DEFERRABLE INITIALLY DEFERRED,

        admission_field_uid TEXT NOT NULL
            REFERENCES admission_field(uid)
            DEFERRABLE INITIALLY DEFERRED,

        required INTEGER NOT NULL
            CHECK (required IN (0, 1)),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_class_admission_field_identity
        ON class_admission_field (class_uid, admission_field_uid)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO class_admission_field (
        uid,
        class_uid,
        admission_field_uid,
        required,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9);
";
