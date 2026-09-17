pub const CREATE_TABLE: &str = "
   CREATE TABLE IF NOT EXISTS schools_identity (
    uid TEXT PRIMARY KEY,

    name TEXT NOT NULL,
    code TEXT NOT NULL UNIQUE,
    created_at TEXT NOT NULL
);
";
