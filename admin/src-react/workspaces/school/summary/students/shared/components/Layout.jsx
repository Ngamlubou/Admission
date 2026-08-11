import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "../../../../shared/components/Header";
import {
  StudentSummaryProvider,
  useStudentSummary,
} from "../../Context";

function StudentSummaryContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const parts = location.pathname.split("/");

const currentCategory = parts[3] || "classes";
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
    { value: "overall", label: "Overall" },
    { value: "classes", label: "Classes" },
  ];

  return (
    <>
      <Header
        pageTitle={title}
        currentCategory={currentCategory}
        categories={studentCategories}
        currentSession={currentSession}
        sessions={sessions}
        onSessionChange={setCurrentSession}
        onCategoryChange={(category) =>
          navigate(`/school/student-summary/${category}`)
        }
      />

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
