import Dashboard from "./dashboard/pages/Dashboard";

import AcademicSetupLayout from "./setup/academic/components/Layout";
import FormSetupLayout from "./setup/form/components/Layout";
import StudentSummaryLayout from "./summary/students/shared/components/Layout";

import AllStudents from "./summary/students/all_students/pages/AllStudents";
import Classes from "./summary/students/classes/pages/Classes";

import PlayGroup from "./summary/students/classes/pages/PlayGroup";
import Nursery from "./summary/students/classes/pages/Nursery";
import LKG from "./summary/students/classes/pages/KG1";
import UKG from "./summary/students/classes/pages/KG2";

import Class1 from "./summary/students/classes/pages/Class1";
import Class2 from "./summary/students/classes/pages/Class2";
import Class3 from "./summary/students/classes/pages/Class3";
import Class4 from "./summary/students/classes/pages/Class4";
import Class5 from "./summary/students/classes/pages/Class5";
import Class6 from "./summary/students/classes/pages/Class6";
import Class7 from "./summary/students/classes/pages/Class7";
import Class8 from "./summary/students/classes/pages/Class8";
import Class9 from "./summary/students/classes/pages/Class9";
import Class10 from "./summary/students/classes/pages/Class10";

import Class11Arts from "./summary/students/classes/pages/Class11Arts";
import Class11Science from "./summary/students/classes/pages/Class11Science";

import Class12Arts from "./summary/students/classes/pages/Class12Arts";
import Class12Science from "./summary/students/classes/pages/Class12Science";

import Fees from "./setup/academic/pages/Fees";
import Uniform from "./setup/academic/pages/Uniform";
import Books from "./setup/academic/pages/Books";
import SchoolTiming from "./setup/academic/pages/SchoolTiming";
import SessionStart from "./setup/academic/pages/SessionStart";

import PersonalDetails from "./setup/form/pages/PersonalDetails";
import FamilyContact from "./setup/form/pages/FamilyContact";
import AddressAcademic from "./setup/form/pages/AddressAcademic";
import Documents from "./setup/form/pages/Documents";

const schoolRoutes = [
   {
    path: "/school",
    element: <Dashboard />,
    },
 {
  path: "/school/student-summary",
  element: <StudentSummaryLayout />,
  children: [
    {
      path: "all-students",
      element: <AllStudents />,
    },
    {
      path: "classes",
      element: <Classes />,
    },
    {
      path: "classes/play-group",
      element: <PlayGroup />,
    },
    {
      path: "classes/nursery",
      element: <Nursery />,
    },
    {
      path: "classes/lkg",
      element: <LKG />,
    },
    {
      path: "classes/ukg",
      element: <UKG />,
    },

    {
      path: "classes/class-1",
      element: <Class1 />,
    },
    {
      path: "classes/class-2",
      element: <Class2 />,
    },
    {
      path: "classes/class-3",
      element: <Class3 />,
    },
    {
      path: "classes/class-4",
      element: <Class4 />,
    },
    {
      path: "classes/class-5",
      element: <Class5 />,
    },
    {
      path: "classes/class-6",
      element: <Class6 />,
    },
    {
      path: "classes/class-7",
      element: <Class7 />,
    },
    {
      path: "classes/class-8",
      element: <Class8 />,
    },
    {
      path: "classes/class-9",
      element: <Class9 />,
    },
    {
      path: "classes/class-10",
      element: <Class10 />,
    },

    {
      path: "classes/class-11-arts",
      element: <Class11Arts />,
    },
    {
      path: "classes/class-11-science",
      element: <Class11Science />,
    },

    {
      path: "classes/class-12-arts",
      element: <Class12Arts />,
    },
    {
      path: "classes/class-12-science",
      element: <Class12Science />,
    },
  ],
},

  {
    path: "/school/academic-setup",
    element: <AcademicSetupLayout />,
    children: [
      {
        path: "fees",
        element: <Fees />,
      },
      {
        path: "uniform",
        element: <Uniform />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "school-timing",
        element: <SchoolTiming />,
      },
      {
        path: "session-start",
        element: <SessionStart />,
      },
    ],
  },

  {
    path: "/school/form-setup",
    element: <FormSetupLayout />,
    children: [
      {
        path: "personal-details",
        element: <PersonalDetails />,
      },
      {
        path: "family-contact",
        element: <FamilyContact />,
      },
      {
        path: "address-academic",
        element: <AddressAcademic />,
      },
      {
        path: "documents",
        element: <Documents />,
      },
    ],
  },
];

export default schoolRoutes;
