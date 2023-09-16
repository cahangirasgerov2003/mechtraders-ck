import { NavLink } from "react-router-dom";
import "./login.css";
import React from "react";

const Login = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div>
        <button type="button" className="btn btn-outline-primary me-4">
          <NavLink to="user">Login as user</NavLink>
        </button>
        <button type="button" className="btn btn-outline-success ms-4">
          <NavLink to="admin">Login as admin</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Login;
