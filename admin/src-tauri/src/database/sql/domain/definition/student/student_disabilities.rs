pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS student_disabilities (
        uid TEXT PRIMARY KEY,

        student_uid TEXT NOT NULL
            REFERENCES students(uid)
            DEFERRABLE INITIALLY DEFERRED,

        disability_type_id INTEGER NOT NULL
            REFERENCES disability_types(id),

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_student_disabilities_identity
        ON student_disabilities (
            student_uid,
            disability_type_id
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO student_disabilities (
        uid,
        student_uid,
        disability_type_id,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8);
";
