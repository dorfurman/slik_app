import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <nav>
      <div id="navLogo">
        <a>Slik Logo</a>
      </div>
      <ul>
        <li>
          <Link to="/Dashboard">
            <FontAwesomeIcon icon={faBookmark} className="navIcons" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/Social">
            <FontAwesomeIcon icon={faShareAlt} className="navIcons" />
            Social
          </Link>
        </li>
        <li>
          <Link to="/Settings">
            <FontAwesomeIcon icon={faCog} className="navIcons" />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
