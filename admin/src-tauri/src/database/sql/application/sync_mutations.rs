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

pub const INSERT: &str = "
    INSERT INTO sync_mutations (
        mutation_id,
        operation,
        entity,
        device_id,
        uid,
        base_version,
        data,
        created_at
    )
    VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8);
";
