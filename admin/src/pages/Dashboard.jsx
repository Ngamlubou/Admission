import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="container">
      <h1>SmartPea Admin</h1>

      <button onClick={() => navigate("/admission")}>
        New Admission
      </button>
    </main>
  );
}
