pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS permissions (
        uid TEXT PRIMARY KEY,

        code TEXT NOT NULL UNIQUE,

        name TEXT NOT NULL,

        description TEXT,

        module TEXT NOT NULL,

        is_system INTEGER NOT NULL DEFAULT 1
            CHECK (is_system IN (0, 1)),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;
";

pub const INSERT: &str = "
    INSERT INTO permissions (
        uid,
        code,
        name,
        description,
        module,
        is_system,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11);
";
