
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
            path: "/students/admission",
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
         search: "StudentSearch",
        title: "Student Operations",
    },
};

export default students;
