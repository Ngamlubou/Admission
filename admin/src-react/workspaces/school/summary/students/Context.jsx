import { createContext, useContext, useState } from "react";

const StudentSummaryContext = createContext(null);

export function StudentSummaryProvider({ children }) {
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
    <StudentSummaryContext.Provider
      value={{
        sessions,
        currentSession,
        setCurrentSession,
      }}
    >
      {children}
    </StudentSummaryContext.Provider>
  );
}

export function useStudentSummary() {
  const context = useContext(StudentSummaryContext);

  if (!context) {
    throw new Error(
      "useStudentSummary must be used inside StudentSummaryProvider."
    );
  }

  return context;
}
