import { createContext, useContext, useState } from "react";

const AcademicSetupContext = createContext(null);

export function AcademicSetupProvider({ children }) {
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
    <AcademicSetupContext.Provider
      value={{
        sessions,
        currentSession,
        setCurrentSession,
      }}
    >
      {children}
    </AcademicSetupContext.Provider>
  );
}

export function useAcademicSetup() {
  const context = useContext(AcademicSetupContext);

  if (!context) {
    throw new Error(
      "useAcademicSetup must be used inside AcademicSetupProvider."
    );
  }

  return context;
}
