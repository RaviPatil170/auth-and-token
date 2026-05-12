import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthetictaed, loading } = useContext(AuthContext);
  if (loading) return <p>loading...</p>;
  if (!isAuthetictaed) return <Navigate to="/login"></Navigate>;
  return children;
}
