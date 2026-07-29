import "./ClassNavigation.css";

export default function ClassNavigation({
  classes,
  summaryLabel,
  summaryKey,
  onClassClick,
}) {
  return (
    <div className="class-navigation">
      <table className="class-navigation-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>{summaryLabel}</th>
          </tr>
        </thead>

        <tbody>
          {classes.map((item) => (
            <tr
              key={item.route}
              onClick={() => onClassClick(item)}
            >
              <td>{item.name}</td>
              <td>{item[summaryKey]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
