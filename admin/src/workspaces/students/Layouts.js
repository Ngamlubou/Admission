import StudentSearch from "./search/SearchInput";

const students = {
    basePath: "/students",

    sidebar: [
        {
            label: "Dashboard",
            path: "/students",
             end: true,
        },
        {
            label: "Admissions",
            path: "/students/admission/setup",
        },
        {
            label: "Applications",
            path: "/students/applications",
        },
        {
            label: "Billing",
            path: "/students/billing",
        },
    ],

    topbar: {
         search: StudentSearch,
        title: "Student Operations",
    },
};

export default students;
