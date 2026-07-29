import { Outlet, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../shared/components/Header";
import {
  AcademicSetupProvider,
  useAcademicSetup,
} from "../Context";

function AcademicSetupContent() {
  const navigate = useNavigate();
const location = useLocation();

const currentCategory = location.pathname.split("/")[3];
  const {
    sessions,
    currentSession,
    setCurrentSession,
  } = useAcademicSetup();

  const academicCategories = [
  { value: "fees", label: "Fees" },
  { value: "uniform", label: "Uniform" },
  { value: "books", label: "Books" },
  { value: "school-timing", label: "School Timing" },
  { value: "session-start", label: "Session Start" },
];

  return (
    <>
      <Header
  currentCategory={currentCategory}
 categories={academicCategories}
  currentSession={currentSession}
  sessions={sessions}
  onSessionChange={setCurrentSession}
  onCategoryChange={(category) =>
    navigate(`/school/academic-setup/${category}`)
  }
/>

      <Outlet />
    </>
  );
}

export default function AcademicSetupLayout() {
  return (
    <AcademicSetupProvider>
      <AcademicSetupContent />
    </AcademicSetupProvider>
  );
}
