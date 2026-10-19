pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS class_calendar (
        uid TEXT PRIMARY KEY,

        calendar_uid TEXT NOT NULL
            REFERENCES calendar(uid)
            DEFERRABLE INITIALLY DEFERRED,

        class_uid TEXT NOT NULL
            REFERENCES classes(uid)
            DEFERRABLE INITIALLY DEFERRED,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_class_calendar_identity
        ON class_calendar (calendar_uid, class_uid)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO class_calendar (
        uid,
        calendar_uid,
        class_uid,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8);
";
