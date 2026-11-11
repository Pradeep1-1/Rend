
import React from "react";

function UserList({ users }) {
  return (
    <div className="user-section">
      <div className="section-heading">
        <h2>Our Team Members</h2>
        <p>Manage and view all registered users.</p>
      </div>

      <div className="user-grid">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-avatar">
              {user.name.charAt(0)}
            </div>

            <h3>{user.name}</h3>

            <div className="user-details">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Age:</strong> {user.age}</p>
              <p><strong>City:</strong> {user.city}</p>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Department:</strong> {user.department}</p>
            </div>

            <span className="user-status">Active</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
