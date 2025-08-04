// File: /src/routes/index.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "@/components/Landing";
import TaskForm from "@/components/TaskForm";
import UploadBuktiBayar from "@/components/UploadBuktiBayar";
import AdminLogin from "@/components/AdminLogin";
import AdminDashboard from "@/components/AdminDashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";

export default function AppRoutes() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="text-white p-8">Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/form" element={<TaskForm />} />
      <Route path="/upload" element={<UploadBuktiBayar />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={user ? <AdminDashboard /> : <Navigate to="/admin-login" />}
      />
      <Route path="*" element={<div className="text-white p-8">404 Not Found</div>} />
    </Routes>
  );
}
