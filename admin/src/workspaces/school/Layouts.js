const school = {
    basePath: "/school",

    sidebar: [
         {
            label: "Dashboard",
            path: "/school",
             end: true,
        },
        {
            label: "Student Summary",
            path: "/school/student-summary/all-students",
        },
        {
            label: "Academic Setup",
            path: "/school/academic-setup/fees",
        },
         {
            label: "Form Setup",
            path: "/school/form-setup/personal-details",
        },
    ],

    topbar: {
        search: "SchoolSearch",
        title: "Student Operations",
    },
};

export default school;
