import React from "react";
import UserPopup from "./UserPopup";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dashboard = () => {
  return (
    <div className="Main-Right">
      <Calendar
        onChange={(e) => console.log(new Date(e))}
        calendarType="Hebrew"
      />
      <h1>Dashboard</h1>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
