import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn !== "true") {  return <Navigate to="/login" replace />; }

  return <Outlet />;
}
