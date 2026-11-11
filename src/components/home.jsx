
import React from "react";
import UserList from "./userlist";

function Home({ users, onLogout }) {
  return (
    <div className="home-container">
      <nav className="navbar">
        <h2>👥 User Management</h2>

        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </nav>

      <div className="welcome-section">
        <h1>Welcome to Your Dashboard!</h1>
        <p>
          Manage your team members and view their information
          in one place.
        </p>
      </div>

      <UserList users={users} />

      <footer className="footer">
        © 2026 User Management System. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
