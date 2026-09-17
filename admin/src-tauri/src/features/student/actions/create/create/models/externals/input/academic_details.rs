pub struct AcademicDetails {
    pub result_type: ResultType,
    pub result_value: String,
    pub achievements: Vec<Achievement>,
}

pub struct Achievement {
    pub title: String,
    pub description: Option<String>,
}

pub enum ResultType {
    Percentage,
    Grade,
    CGPA,
}
