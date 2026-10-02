pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS fee_installments (
        uid TEXT PRIMARY KEY,

        fee_schedule_uid TEXT NOT NULL
            REFERENCES fee_schedules(uid)
            DEFERRABLE INITIALLY DEFERRED,

        seq INTEGER NOT NULL
            CHECK (seq >= 1),

        label TEXT NOT NULL,

        due_date TEXT NOT NULL,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_fee_installments_identity
        ON fee_installments (
            fee_schedule_uid,
            seq
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO fee_installments (
        uid,
        fee_schedule_uid,
        seq,
        label,
        due_date,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (
        ?1, ?2, ?3, ?4, ?5,
        ?6, ?7, ?8, ?9, ?10
    );
";
