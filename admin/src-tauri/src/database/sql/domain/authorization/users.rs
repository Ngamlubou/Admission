pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS users (
        uid TEXT PRIMARY KEY,

        email TEXT,
        phone TEXT,

        display_name TEXT NOT NULL,

        status TEXT NOT NULL DEFAULT 'active'
            CHECK (
                status IN (
                    'active',
                    'suspended',
                    'disabled'
                )
            ),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_users_email
        ON users (email COLLATE NOCASE)
        WHERE email IS NOT NULL
          AND deleted_at IS NULL;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_users_phone
        ON users (phone)
        WHERE phone IS NOT NULL
          AND deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO users (
        uid,
        email,
        phone,
        display_name,
        status,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10);
";
