pub const CREATE_TABLE: &str = "
    CREATE TABLE IF NOT EXISTS sync_mutations (
    mutation_id INTEGER PRIMARY KEY,
    operation TEXT NOT NULL,
    entity TEXT NOT NULL,
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,
    base_version INTEGER NOT NULL,
    data TEXT,
    created_at TEXT NOT NULL
);
";