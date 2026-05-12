import React, { useContext, useEffect } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/users").then((res) => {
      console.log(res.data);
    });

    // api.get("/invalid-url").catch((err) => {
    //   console.log(err);
    // });

    // localStorage.clear();
    // window.location.href = "/login";
  }, []);

  return (
    <div>
      <Navbar />
      <div>Dashboard</div>
    </div>
  );
}
