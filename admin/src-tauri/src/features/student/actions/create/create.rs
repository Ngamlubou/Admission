use serde_json::Value;

mod models;
mod utilities;

use utilities::{uid, timestamp, admission_number};
use models::externals::Input;
use models::persistences::{
    Student,
    Family,
    Address,
    AcademicDetails,
    Document,
    Enrollment,
};

pub fn create(data: Value) -> Result<Student, String> {

    let data: Input = serde_json::from_value(data)
        .map_err(|e| e.to_string())?;

    let repository = StudentTable::new();

    let settings = settings::get_all(&connection)?;

    let device_id = settings
        .get("device_id")
        .ok_or("device_id not found")?
        .clone();

    let school_id = settings
        .get("school_id")
        .ok_or("school_id not found")?
        .parse::<i64>()
        .map_err(|e| e.to_string())?;

   let uid = uid();
   let created_at = timestamp();
   let admission_number = admission_number(
    school_id,
    data.enrollment.academic_session_class_id,
);

    let student = Student {
        device_id,
        uid,
        school_id,
        admission_number,
        first_name: data.first_name,
        middle_name: data.middle_name,
        last_name: data.last_name,
        date_of_birth: data.date_of_birth,
        gender: data.gender,
        blood_group: data.blood_group,
        social_category: data.social_category,
        minority_status: data.minority_status,
        disabilities: data.disabilities,
        aadhaar_number: data.aadhaar_number,
        pen: data.pen,
        created_at,
    };

    // prepare Family
    // prepare Address
    // prepare AcademicDetails
    // prepare Documents

    repository.create(
        &student,
        &family,
        &address,
        &academic_details,
        &documents,
        &enrollment,
    )
}
