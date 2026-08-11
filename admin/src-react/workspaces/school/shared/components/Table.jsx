import "./Table.css";

export default function Table({ columns }) {
 const CLASSES = [
  "Play Group",
  "Nursery",
  "LKG",
  "UKG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11 Arts",
  "Class 11 Science",
  "Class 12 Arts",
  "Class 12 Science",
];

  return (
    <div className="table-container">
      <table className="academic-table">
        <thead>
          <tr>
            <th>Class</th>

            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {CLASSES.map((className) => (
            <tr key={className}>
              <td>{className}</td>

              {columns.map((column) => (
                <td key={`${className}-${column}`}>
                  {/* Placeholder */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
