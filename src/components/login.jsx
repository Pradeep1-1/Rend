
import React from "react";

function Login({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-icon">👋</div>

        <h1>Welcome Back!</h1>
        <p>Please login to access your dashboard.</p>

        <button className="login-btn" onClick={onLogin}>
          Login
        </button>

        <p className="login-footer">
          User Management System
        </p>
      </div>
    </div>
  );
}

export default Login;
