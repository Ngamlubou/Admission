use rusqlite::Connection;

pub mod class;
pub mod school;
pub mod student;

pub fn create_tables(
    connection: &Connection,
) -> rusqlite::Result<()> {
    connection.execute_batch(
        &[
            // School definitions
            school::SCHOOLS_IDENTITY,
            school::UNIFORMS,
            school::UNIFORM_SIZES,
            school::TIMINGS,
            school::FEES,
            school::DISCOUNTS,
            school::CALENDAR,
            school::BOOK_TYPES,
            school::BOOK_SUBJECTS,
            school::ADMISSION_FIELD,
            school::ADMISSION_FIELD_OPTIONS,
            school::SESSIONS,

            // Class definitions
            class::CLASSES,
            class::CLASS_UNIFORMS,
            class::CLASS_TIMINGS,
            class::CLASS_DISCOUNTS,
            class::CLASS_FEES,
            class::DISCOUNT_RULES,
            class::DISCOUNT_TARGETS,
            class::FEE_INSTALLMENTS,
            class::FEE_PRICING,
            class::FEE_PRICING_AMOUNTS,
            class::FEE_SCHEDULES,
            class::CLASS_CALENDAR,
            class::CLASS_ADMISSION_FIELD,
            class::BOOKS,

            // Student definitions
            student::STUDENTS,
            student::ENROLLMENTS,
            student::STUDENT_DISABILITIES,
            student::STUDENT_FIELDS,
            student::STUDENT_DISCOUNTS,
            student::STUDENT_FEES,
            student::FEE_CHARGES,
            student::FEE_CHARGE_DISCOUNTS,
            student::PAYMENTS,
            student::PAYMENT_ALLOCATIONS,
            student::PAYMENT_REFUNDS,
        ]
        .join("\n"),
    )?;

    Ok(())
}
