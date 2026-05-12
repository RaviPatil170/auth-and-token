import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

export default function AdminAuth({ children }) {
  const { isAuthetictaed, user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) return <p>loading...</p>;
  if (!isAuthetictaed) {
    return <Navigate to="/login"></Navigate>;
  }
  if (user?.role !== "admin") {
    return <Navigate to="/dashboard" />;
  }
  return children;
}
