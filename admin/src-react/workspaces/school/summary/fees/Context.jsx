import { createContext, useContext, useState } from "react";

const FeeSummaryContext = createContext(null);

export function FeeSummaryProvider({ children }) {
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
    <FeeSummaryContext.Provider
      value={{
        sessions,
        currentSession,
        setCurrentSession,
      }}
    >
      {children}
    </FeeSummaryContext.Provider>
  );
}

export function useFeeSummary() {
  const context = useContext(FeeSummaryContext);

  if (!context) {
    throw new Error(
      "useFeeSummary must be used inside FeeSummaryProvider."
    );
  }

  return context;
}
