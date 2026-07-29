use crate::models::Student;
use rusqlite::{Connection, params, OptionalExtension};

pub fn get_by_code( connection: &Connection, code: &str,)
 -> rusqlite::Result<Option<Student>> {

let mut statement = connection.prepare(
  "SELECT * FROM students WHERE code = ?;" )?;
statement
                .query_row([code], student_from_row)
                .optional()
}

  pub fn get_all( connection: &Connection, )
  -> rusqlite::Result<Vec<Student>> {

    let mut statement = connection.prepare(
  "SELECT * FROM students;" )?;
let rows = statement.query_map([], student_from_row)?;
    rows.collect()
  }

   pub fn create(  connection: &Connection, student: &Student,)
   -> rusqlite::Result<()> {

    connection.execute(
        "   INSERT INTO students (
            code,
            registration_no,
            student_name,
            standard,
            father_name,
            mother_name,
            whatsapp_no,
            alternate_no,
            gender,
            dob  )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);  ",
        params![
            &student.code,
            &student.registration_no,
            &student.student_name,
            &student.standard,
            &student.father_name,
            &student.mother_name,
            &student.whatsapp_no,
            &student.alternate_no,
            &student.gender,
            &student.dob,   ],   )?;

    Ok(())
}

pub fn update( connection: &Connection, student: &Student, )
-> rusqlite::Result<()>{

    connection.execute(
      "UPDATE students
SET   registration_no = ?,
    student_name = ?,
    standard = ?,
    father_name = ?,
    mother_name = ?,
    whatsapp_no = ?,
    alternate_no = ?,
    gender = ?,
    dob = ?
WHERE code = ?;",
params![
    &student.registration_no,
    &student.student_name,
    &student.standard,
    &student.father_name,
    &student.mother_name,
    &student.whatsapp_no,
    &student.alternate_no,
    &student.gender,
    &student.dob,
    &student.code,
] )?;
  Ok(())
}

pub fn delete(  connection: &Connection, code: &str,)
   -> rusqlite::Result<()>{

    connection.execute(
        "  DELETE FROM students   WHERE code = ?;   ",
        params![code],  )?;
Ok(())
}

  fn student_from_row(
    row: &rusqlite::Row,
) -> rusqlite::Result<Student> {
    Ok(Student {
        code: row.get("code")?,
        registration_no: row.get("registration_no")?,
        student_name: row.get("student_name")?,
        standard: row.get("standard")?,
        father_name: row.get("father_name")?,
        mother_name: row.get("mother_name")?,
        whatsapp_no: row.get("whatsapp_no")?,
       alternate_no: row.get("alternate_no")?,
        gender: row.get("gender")?,
        dob: row.get("dob")?,
        sync_status: row.get("sync_status")?,
        created_at: row.get("created_at")?,
        updated_at: row.get("updated_at")?,
    })
}
