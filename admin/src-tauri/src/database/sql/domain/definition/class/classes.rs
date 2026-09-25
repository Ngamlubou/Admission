pub const CREATE_TABLE: &str = "
   CREATE TABLE IF NOT EXISTS classes (
    uid TEXT PRIMARY KEY,

    education_category_uid TEXT NOT NULL,
    class_level_id INTEGER NOT NULL,
    name TEXT NOT NULL,

    UNIQUE (education_category_uid, class_level_id),

    FOREIGN KEY (education_category_uid)
        REFERENCES education_categories(uid),

    FOREIGN KEY (class_level_id)
        REFERENCES class_levels(id)
);
";

pub const INSERT: &str = "
    INSERT INTO classes (
        uid,
        education_category_uid,
        class_level_id,
        name
    )
    VALUES (?1, ?2, ?3, ?4);
";
