import "./Overview.css";
import data from "./Data";

export default function Overview() {
  return (
    <div className="overview">
      <table className="overview-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Fee Receivable</th>
            <th>Collected</th>
            <th>Pending</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.month}>
              <td>{row.month}</td>
              <td>{row.feeReceivable}</td>
              <td>{row.collected}</td>
              <td>{row.pending}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
