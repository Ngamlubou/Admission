import { createContext, useContext, useState } from "react";

const FormSetupContext = createContext(null);

export function FormSetupProvider({ children }) {
  function getAcademicSessions() {
    const year = new Date().getFullYear();

    return [
      `${year}-${year + 1}`,
      `${year + 1}-${year + 2}`,
      `${year + 2}-${year + 3}`,
    ];
  }

  const sessions = getAcademicSessions();

  const [currentSession, setCurrentSession] = useState(sessions[0]);

  return (
    <FormSetupContext.Provider
      value={{
        sessions,
        currentSession,
        setCurrentSession,
      }}
    >
      {children}
    </FormSetupContext.Provider>
  );
}

export function useFormSetup() {
  const context = useContext(FormSetupContext);

  if (!context) {
    throw new Error(
      "useFormSetup must be used inside FormSetupProvider."
    );
  }

  return context;
}
