pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS classes (
        uid TEXT PRIMARY KEY,

        class_level_id INTEGER NOT NULL
            REFERENCES class_levels(id),

        name TEXT NOT NULL,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_classes_identity
        ON classes (class_level_id, name)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO classes (
        uid,
        class_level_id,
        name,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8);
";
