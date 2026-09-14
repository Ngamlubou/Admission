pub enum MutationOperation {
    Create,
    Update,
    Delete,
}

pub enum MutationEntity {
    Student,
    StudentFamily,
    StudentAddress,
    StudentAcademicDetails,
    StudentDocument,
    StudentEnrollment,
    StudentFeeAdjustment,
    StudentFeeStatus,
}

pub struct RecordId {
    pub device_id: String,
    pub uid: String,
}

pub struct Mutation {
    pub mutation_id: u64,
    pub operation: MutationOperation,
    pub entity: MutationEntity,
    pub record_id: RecordId,
    pub base_version: u64,
    pub data: serde_json::Value,
}
