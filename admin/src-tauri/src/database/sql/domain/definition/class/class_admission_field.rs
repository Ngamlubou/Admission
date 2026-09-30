pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS class_admission_field (
        uid TEXT PRIMARY KEY,

        class_uid TEXT NOT NULL,

        admission_field_uid INTEGER NOT NULL,
        required INTEGER NOT NULL,

        UNIQUE (class_uid, admission_field_uid),

        FOREIGN KEY (class_uid)
            REFERENCES classes(uid),

        FOREIGN KEY (admission_field_uid)
            REFERENCES admission_field(id)
    );
";

pub const INSERT: &str = "
    INSERT INTO class_admission_field (
        uid,
        class_uid,
        admission_field_uid,
        required
    )
    VALUES (?1, ?2, ?3, ?4);
";
