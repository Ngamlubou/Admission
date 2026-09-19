pub const CREATE_TABLE: &str = "
   CREATE TABLE IF NOT EXISTS education_categories (
    uid TEXT PRIMARY KEY,

    schools_identity_uid TEXT NOT NULL,
    name TEXT NOT NULL,

    UNIQUE (schools_identity_uid, name),

    FOREIGN KEY (schools_identity_uid)
        REFERENCES schools_identity(uid)
);
";

pub const INSERT: &str = "
    INSERT INTO education_categories (
        uid,
        schools_identity_uid,
        name
    )
    VALUES (?1, ?2, ?3);
";
