import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "../../../../shared/components/Header";
import {
  StudentSummaryProvider,
  useStudentSummary,
} from "../../Context";
import "./Layout.css";

function StudentSummaryContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const parts = location.pathname.split("/");

const currentCategory = parts[3];
const currentPage = parts[4] || currentCategory;
const pageTitle =
  currentPage.replaceAll("-", " ");

const title =
  pageTitle[0].toUpperCase() + pageTitle.slice(1);

  const {
    sessions,
    currentSession,
    setCurrentSession,
  } = useStudentSummary();

  const studentCategories = [
    { value: "all-students", label: "All Students" },
    { value: "classes", label: "Classes" },
  ];

  return (
    <>
      <Header
        currentCategory={currentCategory}
        categories={studentCategories}
        currentSession={currentSession}
        sessions={sessions}
        onSessionChange={setCurrentSession}
        onCategoryChange={(category) =>
          navigate(`/school/student-summary/${category}`)
        }
      />
      <div className="page-title">
    <span>{title}</span>
  </div>

      <Outlet />
    </>
  );
}

export default function StudentSummaryLayout() {
  return (
    <StudentSummaryProvider>
      <StudentSummaryContent />
    </StudentSummaryProvider>
  );
}
