pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS student_fees (
        uid TEXT PRIMARY KEY,

        student_uid TEXT NOT NULL
            REFERENCES students(uid)
            DEFERRABLE INITIALLY DEFERRED,

        fee_schedule_uid TEXT NOT NULL
            REFERENCES fee_schedules(uid)
            DEFERRABLE INITIALLY DEFERRED,

        -- NULL means: use the class_fees amount
        amount_minor INTEGER
            CHECK (amount_minor IS NULL OR amount_minor >= 0),

        start_date TEXT NOT NULL,
        end_date TEXT,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT,

        CHECK (end_date IS NULL OR end_date >= start_date)
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_student_fees_identity
        ON student_fees (student_uid, fee_schedule_uid)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO student_fees (
        uid,
        student_uid,
        fee_schedule_uid,
        amount_minor,
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
