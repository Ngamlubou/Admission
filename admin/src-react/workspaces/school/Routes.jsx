import Profile from "./profile/pages/Profile";

import SearchResults from "./search/pages/Results";

import AcademicSetupLayout from "./setup/academic/components/Layout";
import FormSetupLayout from "./setup/form/components/Layout";
import StudentSummaryLayout from "./summary/students/shared/components/Layout";
import FeesSummaryLayout from "./summary/fees/shared/components/Layout";

import StudentsOverall from "./summary/students/overall/pages/Overall";
import StudentsClasses from "./summary/students/classes/pages/Classes";
import StudentsClassDetails from "./summary/students/classes/pages/ClassDetails";

import FeesOverall from "./summary/fees/overall/pages/Overall";
import FeesClasses from "./summary/fees/classes/pages/Classes";
import FeesClassDetails from "./summary/fees/classes/pages/ClassDetails";

import AcademicCategory from "./setup/academic/pages/CategoryView";
import FormCategory from "./setup/form/pages/CategoryView";

import { Navigate } from "react-router-dom";

const schoolRoutes = [
  {
    path: "/school",
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "search",
        element: <SearchResults />,
      },

      {
        path: "student-summary",
        element: <StudentSummaryLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="classes" replace />,
          },
          {
            path: "overall",
            element: <StudentsOverall />,
          },
          {
            path: "classes",
            element: <StudentsClasses />,
          },
          {
            path: "classes/:classId",
            element: <StudentsClassDetails />,
          },
        ],
      },

      {
        path: "fee-summary",
        element: <FeesSummaryLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="classes" replace />,
          },
          {
            path: "overall",
            element: <FeesOverall />,
          },
          {
            path: "classes",
            element: <FeesClasses />,
          },
          {
            path: "classes/:classId",
            element: <FeesClassDetails />,
          },
        ],
      },

      {
        path: "academic-setup",
        element: <AcademicSetupLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="fees" replace />,
          },
          {
            path: ":category",
            element: <AcademicCategory />,
          },
        ],
      },

      {
        path: "form-setup",
        element: <FormSetupLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="personal-details" replace />,
          },
          {
            path: ":category",
            element: <FormCategory />,
          },
        ],
      },
    ],
  },
];

export default schoolRoutes;
