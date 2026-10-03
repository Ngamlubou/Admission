pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS student_discounts (
        uid TEXT PRIMARY KEY,

        student_uid TEXT NOT NULL
            REFERENCES students(uid)
            DEFERRABLE INITIALLY DEFERRED,

        discount_uid TEXT NOT NULL
            REFERENCES discounts(uid)
            DEFERRABLE INITIALLY DEFERRED,

        session_uid TEXT NOT NULL
            REFERENCES sessions(uid)
            DEFERRABLE INITIALLY DEFERRED,

        reason TEXT,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_student_discounts_identity
        ON student_discounts (
            student_uid,
            discount_uid,
            session_uid
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO student_discounts (
        uid,
        student_uid,
        discount_uid,
        session_uid,
        reason,
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
