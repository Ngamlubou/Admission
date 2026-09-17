use rusqlite::Connection;

use crate::database::migration::Migration;
fn up(connection: &Connection)
-> rusqlite::Result<()> {

connection.execute_batch(
        r#"
PRAGMA foreign_keys = ON;

-- ============================================================
-- STUDENT FEE ADJUSTMENTS
-- ============================================================

CREATE TABLE IF NOT EXISTS adjustments (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    assignment_uid TEXT NOT NULL,
    adjustment_type_uid TEXT NOT NULL,

    amount REAL NOT NULL,
    months TEXT,
    reason TEXT,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid),

    FOREIGN KEY (assignment_uid)
        REFERENCES assignments(uid),

    FOREIGN KEY (adjustment_type_uid)
        REFERENCES adjustment_types(uid)
);


-- ============================================================
-- STUDENT FEE STATUS
-- ============================================================

CREATE TABLE IF NOT EXISTS student_fee_status (
    device_id TEXT NOT NULL,
    uid TEXT NOT NULL,

    student_device_id TEXT NOT NULL,
    student_uid TEXT NOT NULL,

    assignment_uid TEXT NOT NULL,

    months TEXT,

    PRIMARY KEY (device_id, uid),

    FOREIGN KEY (student_device_id, student_uid)
        REFERENCES students(device_id, uid),

    FOREIGN KEY (assignment_uid)
        REFERENCES assignments(uid)
);

     "#,
    )?;

    Ok(())
}


pub fn m001_initial() -> Migration {
    Migration {
        version: 1,
        name: "initial",
        up,
    }
}
