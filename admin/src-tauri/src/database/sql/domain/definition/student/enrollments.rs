pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS enrollments (
        uid TEXT PRIMARY KEY,

        student_uid TEXT NOT NULL
            REFERENCES students(uid)
            DEFERRABLE INITIALLY DEFERRED,

        session_uid TEXT NOT NULL
            REFERENCES sessions(uid)
            DEFERRABLE INITIALLY DEFERRED,

        class_uid TEXT NOT NULL
            REFERENCES classes(uid)
            DEFERRABLE INITIALLY DEFERRED,

        start_date TEXT NOT NULL,
        end_date TEXT,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT,

        CHECK (end_date IS NULL OR end_date >= start_date)
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_enrollments_identity
        ON enrollments (student_uid, session_uid)
        WHERE deleted_at IS NULL;

    CREATE INDEX IF NOT EXISTS ix_enrollments_class_session
        ON enrollments (class_uid, session_uid)
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO enrollments (
        uid,
        student_uid,
        session_uid,
        class_uid,
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
