
import React, { useState } from "react";
import Login from "./components/login";
import Home from "./components/home";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // User details
  const users = [
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      age: 24,
      city: "Chennai",
      role: "Frontend Developer",
      department: "Development"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      age: 23,
      city: "Bangalore",
      role: "Backend Developer",
      department: "Development"
    },
    {
      id: 3,
      name: "Rahul Raj",
      email: "rahul@gmail.com",
      age: 25,
      city: "Coimbatore",
      role: "UI/UX Designer",
      department: "Design"
    },
    {
      id: 4,
      name: "Sneha Devi",
      email: "sneha@gmail.com",
      age: 22,
      city: "Madurai",
      role: "Data Analyst",
      department: "Analytics"
    },
    {
      id: 5,
      name: "Vijay Anand",
      email: "vijay@gmail.com",
      age: 26,
      city: "Hyderabad",
      role: "Java Developer",
      department: "Development"
    }
  ];

  // Login and Logout functions
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Conditional Rendering
  return (
    <div>
      {isLoggedIn ? (
        <Home users={users} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
