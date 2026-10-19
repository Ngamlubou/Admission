pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS fee_schedules (
        uid TEXT PRIMARY KEY,

        class_fee_uid TEXT NOT NULL
            REFERENCES class_fees(uid)
            DEFERRABLE INITIALLY DEFERRED,

        session_uid TEXT NOT NULL
            REFERENCES sessions(uid)
            DEFERRABLE INITIALLY DEFERRED,

        frequency_id INTEGER NOT NULL
            REFERENCES frequencies(id),

        allow_partial_payment INTEGER NOT NULL DEFAULT 1
            CHECK (allow_partial_payment IN (0, 1)),

        amount_minor INTEGER
            CHECK (amount_minor IS NULL OR amount_minor >= 0),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_fee_schedules_identity
        ON fee_schedules (class_fee_uid, session_uid)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO fee_schedules (
        uid,
        class_fee_uid,
        session_uid,
        frequency_id,
        allow_partial_payment,
        amount_minor,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11);
";
