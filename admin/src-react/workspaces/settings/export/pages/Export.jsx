import "../components/Export.css";

export default function Export() {
  return (
    <div className="export">
      <section className="export-section">
        <h2>Export Students</h2>

        <div className="export-field">
          <label>Academic Session</label>

          <select defaultValue="all">
            <option value="all">
              All Sessions
            </option>

            <option value="2026-2027">
              2026–2027
            </option>

            <option value="2025-2026">
              2025–2026
            </option>

            <option value="2024-2025">
              2024–2025
            </option>
          </select>
        </div>

        <label className="export-checkbox">
          <input type="checkbox" />

          <span>
            Include Fee Information
          </span>
        </label>

        <div className="export-actions">
          <button type="button">
            Export Excel
          </button>
        </div>
      </section>
    </div>
  );
}
