mod additional;
mod family;
mod address;
mod academic_details;
mod document;
mod enrollment;

use additional::Additional;
use family::Family;
use address::Address;
use academic_details::AcademicDetails;
use document::Document;
use enrollment::Enrollment;

pub struct Input {
    pub first_name: String,
    pub middle_name: Option<String>,
    pub last_name: Option<String>,
    pub date_of_birth: NaiveDate,
    pub gender: Gender,
    pub blood_group: BloodGroup,
    pub social_category: SocialCategory,
    pub minority_status: MinorityStatus,
    pub disabilities: Vec<Disability>,
    pub aadhaar_number: Option<String>,
    pub pen: Option<String>,

    pub additionals: Vec<Additional>,
    pub family: Family,
    pub address: Address,
    pub academic_details: AcademicDetails,
    pub documents: Vec<Document>,
    pub enrollment: Enrollment,
}

pub enum Disability {
    Blindness,
    LowVision,
    LeprosyCuredPerson,
    HearingImpairment,
    LocomotorDisability,
    Dwarfism,
    IntellectualDisability,
    MentalIllness,
    AutismSpectrumDisorder,
    CerebralPalsy,
    MuscularDystrophy,
    ChronicNeurologicalConditions,
    SpecificLearningDisabilities,
    MultipleSclerosis,
    SpeechAndLanguageDisability,
    Thalassemia,
    Hemophilia,
    SickleCellDisease,
    MultipleDisabilities,
    AcidAttackVictim,
    ParkinsonsDisease,
}

pub enum BloodGroup {
    Unknown,
    APositive,
    ANegative,
    BPositive,
    BNegative,
    OPositive,
    ONegative,
    ABPositive,
    ABNegative,
}

pub enum MinorityStatus {
    Muslim,
    Christian,
    Sikh,
    Buddhist,
    Parsi,
    Jain,
    NotApplicable,
}

pub enum SocialCategory {
    General,
    Sc,
    St,
    Obc,
}

pub enum Gender {
    Male,
    Female,
    Other,
}
