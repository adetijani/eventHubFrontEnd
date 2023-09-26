import React, { useState } from "react";
import Button from "../Button/Button";
import "./navbar.css";
// import UserImg from "../assets/images/user-img.png";
// import AngleIcon from "../assets/images/angle-bracket-down.png";

function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="logo">Event</div>
      <div className="nav-menu">
        <div className="auth">
          <div className="login-link">
            <a href="#">Login</a>
          </div>
          <Button />
        </div>
        <div className="profile">
          <img src="" alt="User Image" className="proflie-img" />
          <p className="profile-text">
            David
            <span>
              <img src="" alt="Angle Bracket" />
            </span>
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
