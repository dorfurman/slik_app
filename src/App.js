import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Styling imports
import "./styles/index.css";

// Components
import Nav from "./components/Main-Dashboard/Nav";

// Import Components
import Dashboard from "./components/Main-Dashboard/Dashboard";
import Social from "./components/Main-Dashboard/Social";
import Settings from "./components/Main-Dashboard/Settings";

const App = () => {
  const isLogged = useSelector((state) => state.status);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch({
      type: "LOG_IN",
    });
    if (isLogged) console.log("User has logged in");
  };

  if (!isLogged) {
    // Remove the '!'
    return (
      <div id="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/social" element={<Social />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return <div>Hello Guest</div>;
  }
};

export default App;
