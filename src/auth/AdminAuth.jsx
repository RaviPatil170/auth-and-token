import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export default function AdminAuth() {
  const { isAuthetictaed } = useContext(AuthContext);
  return <div></div>;
}
