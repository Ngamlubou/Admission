import { Outlet, useNavigate, useLocation } from "react-router-dom";

import Header from "../../../shared/components/Header";
import {
  FormSetupProvider,
  useFormSetup,
} from "../Context";

function FormSetupContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentCategory = location.pathname.split("/")[3];

  const {
    sessions,
    currentSession,
    setCurrentSession,
  } = useFormSetup();

  const formCategories = [
    { value: "personal-details", label: "Personal Details" },
    { value: "family-contact", label: "Family & Contact" },
    { value: "address-academic", label: "Address & Academic" },
    { value: "documents", label: "Documents" },
  ];

  return (
    <>
      <Header
        currentCategory={currentCategory}
        categories={formCategories}
        currentSession={currentSession}
        sessions={sessions}
        onSessionChange={setCurrentSession}
        onCategoryChange={(category) =>
          navigate(`/school/form-setup/${category}`)
        }
      />

      <Outlet />
    </>
  );
}

export default function FormSetupLayout() {
  return (
    <FormSetupProvider>
      <FormSetupContent />
    </FormSetupProvider>
  );
}
