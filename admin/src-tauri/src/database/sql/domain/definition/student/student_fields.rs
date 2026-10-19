pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS student_fields (
        uid TEXT PRIMARY KEY,

        student_uid TEXT NOT NULL
            REFERENCES students(uid)
            DEFERRABLE INITIALLY DEFERRED,

        admission_field_uid TEXT NOT NULL
            REFERENCES admission_field(uid)
            DEFERRABLE INITIALLY DEFERRED,

        value TEXT NOT NULL,
        value2 TEXT,

        version INTEGER NOT NULL DEFAULT 1,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL,
        deleted_at TEXT,
        updated_by_device_uid TEXT
    ) STRICT;

    CREATE UNIQUE INDEX IF NOT EXISTS ux_student_fields_identity
        ON student_fields (
            student_uid,
            admission_field_uid
        )
        WHERE deleted_at IS NULL;
";

pub const INSERT: &str = "
    INSERT INTO student_fields (
        uid,
        student_uid,
        admission_field_uid,
        value,
        value2,
        version,
        created_at,
        updated_at,
        deleted_at,
        updated_by_device_uid
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10);
";
