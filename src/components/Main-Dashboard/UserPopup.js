import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const UserPopup = () => {
  return (
    <div id="userPopup">
      <FontAwesomeIcon icon={faUserCircle} id="profileIcon" />
      <a>Dor Furman</a>
      <FontAwesomeIcon icon={faAngleDown} id="expandIcon" />
    </div>
  );
};

export default UserPopup;
