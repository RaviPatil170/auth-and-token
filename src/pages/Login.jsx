import React, { useContext, useState } from "react";
import { AuthContext, AuthProvider } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    // fake API response
    const fakeUser = {
      id: 1,
      name: "Rahul",
      email,
      role: "admin",
    };

    const fakeAccessToken = "access-token-123";
    const fakeRefreshToken = "refresh-token-456";
    login(fakeUser, fakeAccessToken, fakeRefreshToken);
    navigate("/dashboard");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={email}
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
