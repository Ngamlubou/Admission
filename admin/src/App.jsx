import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdmissionForm from "./pages/AdmissionForm";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
  <Route path="/" element={<Dashboard />} />
  <Route path="/admission" element={<AdmissionForm />} />
</Route>

    </Routes>
  );
}
