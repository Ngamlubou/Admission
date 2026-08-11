const school = {
    basePath: "/school",

    sidebar: [
         {
            label: "Profile",
            path: "/school",
             end: true,
        },
        {
            label: "Student Summary",
            path: "/school/student-summary",
        },
        {
            label: "Fee Summary",
            path: "/school/fee-summary",
        },
        {
            label: "Academic Setup",
            path: "/school/academic-setup",
        },
         {
            label: "Form Setup",
            path: "/school/form-setup",
        },
    ],

    topbar: {
        search: "SchoolSearch",
        title: "Student Operations",
    },
};

export default school;
