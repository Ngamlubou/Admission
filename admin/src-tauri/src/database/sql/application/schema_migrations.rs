pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS schema_migrations (
    version INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    applied_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
";

pub const INSERT: &str = "
    INSERT INTO sync_mutations (
        version,
        name,
        applied_at
    )
    VALUES (?1, ?2, ?3);
";
