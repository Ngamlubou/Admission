import classes from "../../../shared/data/Classes";

export default [
    {
        category: "Academic Setup",
        path: "/school/academic-setup",

        pages: [
            {
                label: "Fees",
                path: "fees",
                keywords: [
                    "Admission",
                    "Tuition",
                    "Hostel Admission",
                    "Hostel Monthly",
                ],
            },
            {
                label: "Uniform",
                path: "uniform",
                keywords: [
                    "Boys",
                    "Girls",
                ],
            },
            {
                label: "Books",
                path: "books",
                keywords: [
                    "Notebooks",
                    "Textbooks",
                ],
            },
            {
                label: "School Timing",
                path: "school-timing",
                keywords: [
                    "Start",
                    "End",
                ],
            },
            {
                label: "Session Start",
                path: "session-start",
                keywords: [
                    "Admission Open",
                    "Session Start",
                    "Session End",
                ],
            },

            ...classes.map((item) => ({
                label: item.label,
                path: `classes/${item.value}`,
            })),
        ],
    },

    {
        category: "Form Setup",
        path: "/school/form-setup",

        pages: [
            {
                label: "Personal Details",
                path: "personal-details",
                keywords: [
                    "Name",
                    "Gender",
                    "Date of Birth",
                    "Social Category",
                    "Minority",
                    "CWSN",
                    "Blood Group",
                    "Aadhaar",
                    "PEN",
                ],
            },
            {
                label: "Family & Contact",
                path: "family-contact",
                keywords: [
                    "Father Full Name",
                    "Mother Full Name",
                    "Guardian",
                    "WhatsApp Number",
                    "Alternative Number",
                ],
            },
            {
                label: "Address & Academic",
                path: "address-academic",
                keywords: [
                    "Permanent Address",
                    "Pincode",
                    "Current Address",
                    "Percentage",
                    "CGPA",
                    "Grade",
                ],
            },
            {
                label: "Documents",
                path: "documents",
                keywords: [
                    "Birth Certificate",
                    "Passport Photo",
                    "Aadhaar Front",
                    "Aadhaar Back",
                    "Transfer Certificate",
                    "Marksheet",
                ],
            },

            ...classes.map((item) => ({
                label: item.label,
                path: `classes/${item.value}`,
            })),
        ],
    },

    {
        category: "Students Summary",
        path: "/school/students-summary",

        pages: [
            {
                label: "Overall",
                path: "",
            },
            {
                label: "Classes",
                path: "classes",
            },

            ...classes.map((item) => ({
                label: item.label,
                path: `classes/${item.value}`,
            })),
        ],
    },

    {
        category: "Fees Summary",
        path: "/school/fee-summary",

        pages: [
            {
                label: "Overall",
                path: "",
            },
            {
                label: "Classes",
                path: "classes",
            },

            ...classes.map((item) => ({
                label: item.label,
                path: `classes/${item.value}`,
            })),
        ],
    },
];
