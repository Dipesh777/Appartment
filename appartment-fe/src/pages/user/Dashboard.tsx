import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const nevigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('auth');
    nevigate('/')

  }
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
};

export default Dashboard;
