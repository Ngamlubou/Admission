pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS admission_forms (
        uid TEXT PRIMARY KEY,

        class_uid TEXT NOT NULL,

        field_id INTEGER NOT NULL,
        required INTEGER NOT NULL,

        UNIQUE (class_uid, field_id),

        FOREIGN KEY (class_uid)
            REFERENCES classes(uid),

        FOREIGN KEY (field_id)
            REFERENCES admission_form_fields(id)
    );
";

pub const INSERT: &str = "
    INSERT INTO admission_forms (
        uid,
        class_uid,
        field_id,
        required
    )
    VALUES (?1, ?2, ?3, ?4);
";
