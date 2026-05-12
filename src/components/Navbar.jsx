import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { isAuthetictaed, user, logout } = useContext(AuthContext);
  //const navigate = useNavigate();
  function handleAuth() {
    if (isAuthetictaed) {
      logout();
    } else {
      navigate("/login");
    }
  }
  return (
    <div>
      <div>
        <h2>Welcome to Auth Project</h2>
      </div>
      <div>
        <span>{user?.name}</span>
        <button onClick={handleAuth}>
          {isAuthetictaed ? "logout" : "login"}
        </button>
      </div>
    </div>
  );
}
