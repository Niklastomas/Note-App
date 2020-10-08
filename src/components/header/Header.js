import React from "react";
import "./Header.css";
import EventNoteIcon from "@material-ui/icons/EventNote";
// import PersonIcon from "@material-ui/icons/Person";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <EventNoteIcon fontSize="large" />
        <h1>Note-App</h1>
      </div>
      <div className="header__right">
        {/* <PersonIcon fontSize="large" /> */}
        {/* <div className="header__textContainer">
          <span>Hello Guest</span>
          <h3>Sign In</h3>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
