import "./Header.css";

export default function Header({
   pageTitle,
  currentCategory,
  categories,
  currentSession,
  sessions,
  onSessionChange,
  onCategoryChange,
}) {
  return (
     <>
    <header className="academic-header">
      <div className="header-group">
        <label htmlFor="academic-session">Academic Session</label>

        <select
          id="academic-session"
          value={currentSession}
          onChange={(e) => onSessionChange(e.target.value)}
        >
          {sessions.map((session) => (
            <option key={session} value={session}>
              {session}
            </option>
          ))}
        </select>
      </div>

      <div className="header-group">
        <label htmlFor="category">Category</label>

        <select
          id="category"
          value={currentCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
    </header>

    {pageTitle && (
  <div className="page-title">
    <span>{pageTitle}</span>
  </div>
)}
     </>
  );
}
