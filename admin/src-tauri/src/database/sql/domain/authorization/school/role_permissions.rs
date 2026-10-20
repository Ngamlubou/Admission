pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS role_permissions (
        uid TEXT PRIMARY KEY,

        role_uid TEXT NOT NULL
            REFERENCES roles(uid)
            DEFERRABLE INITIALLY DEFERRED,

        permission_uid TEXT NOT NULL
            REFERENCES permissions(uid)
            DEFERRABLE INITIALLY DEFERRED,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_role_permissions_identity
        ON role_permissions (
            role_uid,
            permission_uid
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO role_permissions (
        uid,
        role_uid,
        permission_uid,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8);
";
