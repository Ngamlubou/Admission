pub const CREATE_TABLE: &str = "
   CREATE TABLE IF NOT EXISTS sessions (
    uid TEXT PRIMARY KEY,

    education_category_uid TEXT NOT NULL,
    name TEXT NOT NULL,
    start_date TEXT NOT NULL,
    end_date TEXT NOT NULL,

    UNIQUE (education_category_uid, name),

    FOREIGN KEY (education_category_uid)
        REFERENCES education_categories(uid)
);
";
