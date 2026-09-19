pub const CREATE_TABLE: &str = "
   CREATE TABLE IF NOT EXISTS classes (
    uid TEXT PRIMARY KEY,

    education_category_uid TEXT NOT NULL,
    name TEXT NOT NULL,

    UNIQUE (education_category_uid, name),

    FOREIGN KEY (education_category_uid)
        REFERENCES education_categories(uid)
);
";

pub const INSERT: &str = "
    INSERT INTO classes (
        uid,
        education_category_uid,
        name
    )
    VALUES (?1, ?2, ?3);
";
