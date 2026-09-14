pub struct AdmissionFormField {
    pub field: String,
    pub label: String,
    pub required: bool,
}

pub struct AdmissionFormConfig {
    pub fields: Vec<AdmissionFormField>,
}
