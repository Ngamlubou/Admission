pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS school_memberships (
        uid TEXT PRIMARY KEY,

        user_uid TEXT NOT NULL
            REFERENCES users(uid)
            DEFERRABLE INITIALLY DEFERRED,

        schools_identity_uid TEXT NOT NULL
            REFERENCES schools_identity(uid)
            DEFERRABLE INITIALLY DEFERRED,

        status TEXT NOT NULL DEFAULT 'active'
            CHECK (
                status IN (
                    'active',
                    'suspended',
                    'ended'
                )
            ),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_school_memberships_identity
        ON school_memberships (
            user_uid,
            schools_identity_uid
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO school_memberships (
        uid,
        user_uid,
        schools_identity_uid,
        status,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9);
";
