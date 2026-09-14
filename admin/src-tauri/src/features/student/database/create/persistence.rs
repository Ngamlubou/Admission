use crate::domain::write::{
    Student,
    StudentFamily,
    StudentAddress,
    StudentAcademicDetails,
    StudentDocument,
    StudentEnrollment,
};

use super::sql::student;
use super::sql::family;
use super::sql::address;
use super::sql::documents;
use super::sql::academic_details;

pub struct SqliteStudentRepository {
    connection: Connection,
}

impl StudentRepository for SqliteStudentRepository {
    fn create(
        &self,
        student: &Student,
        family: &StudentFamily,
        address: &StudentAddress,
        academic_details: &StudentAcademicDetails,
        documents: &[StudentDocument],
        enrollment: &StudentEnrollment,
    ) -> Result<Student, String> {

        let transaction = self.connection.transaction()
            .map_err(|e| e.to_string())?;

        transaction.execute(
            student::INSERT,
            rusqlite::params![
                student.id,
                student.school_id,
                student.admission_number,
                student.first_name,
                student.middle_name,
                student.last_name,
                student.date_of_birth,
                student.gender,
                student.blood_group,
                student.social_category,
                student.minority_status,
                student.aadhaar_number,
                student.pen,
                student.created_at,
            ],
        )
        .map_err(|e| e.to_string())?;

        transaction.commit()
            .map_err(|e| e.to_string())?;

        Ok(student.clone())
    }
}
