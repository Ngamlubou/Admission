pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS calendar (
        uid TEXT PRIMARY KEY,

        schools_identity_uid TEXT NOT NULL
            REFERENCES schools_identity(uid)
            DEFERRABLE INITIALLY DEFERRED,

        session_uid TEXT NOT NULL
            REFERENCES sessions(uid)
            DEFERRABLE INITIALLY DEFERRED,

        start_date TEXT,
        end_date TEXT,

        name TEXT NOT NULL,

        event_type_id INTEGER NOT NULL
            REFERENCES calendar_event_types(id),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT,

        CHECK (
    start_date IS NULL
    OR end_date IS NULL
    OR end_date >= start_date
)
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_calendar_identity
        ON calendar (schools_identity_uid, name)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO calendar (
        uid,
        schools_identity_uid,
        session_uid,
        start_date,
        end_date,
        name,
        event_type_id,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, ?12);
";
