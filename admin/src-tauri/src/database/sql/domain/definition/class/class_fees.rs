pub const CREATE_TABLE: &str = "
   CREATE TABLE IF NOT EXISTS class_fees (
    uid TEXT PRIMARY KEY,
    fee_schedule_uid TEXT NOT NULL
        REFERENCES fee_schedules(uid) DEFERRABLE INITIALLY DEFERRED,
    class_uid TEXT NOT NULL
        REFERENCES classes(uid) DEFERRABLE INITIALLY DEFERRED,

    amount_minor INTEGER NOT NULL CHECK (amount_minor >= 0),

    version INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL,
    deleted_at TEXT,
    updated_by_device_uid TEXT
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS ux_class_fees_identity
    ON class_fees (fee_schedule_uid, class_uid)
    WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO class_fees (
        uid,
        fee_schedule_uid,
        class_uid,
        amount_minor,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9);
";
