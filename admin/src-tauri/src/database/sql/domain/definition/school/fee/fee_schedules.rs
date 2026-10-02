pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS fee_schedules (
        uid TEXT PRIMARY KEY,

        fee_uid TEXT NOT NULL
            REFERENCES fees(uid)
            DEFERRABLE INITIALLY DEFERRED,

        session_uid TEXT NOT NULL
            REFERENCES sessions(uid)
            DEFERRABLE INITIALLY DEFERRED,

        frequency_id INTEGER NOT NULL
            REFERENCES frequencies(id),

        start_date TEXT NOT NULL,
        end_date TEXT,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT,

        CHECK (end_date IS NULL OR end_date >= start_date)
    ) STRICT;
";

pub const INSERT: &str = "
    INSERT INTO fee_schedules (
        uid,
        fee_uid,
        session_uid,
        frequency_id,
        start_date,
        end_date,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (
        ?1, ?2, ?3, ?4, ?5, ?6,
        ?7, ?8, ?9, ?10, ?11
    );
";
