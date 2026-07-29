export function getAcademicSessions() {
  const year = new Date().getFullYear();

  return [
    `${year}-${year + 1}`,
    `${year + 1}-${year + 2}`,
    `${year + 2}-${year + 3}`,
  ];
}
