import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile/Profile.jsx";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="container-header">
        <Link to="/" className="logo-link"></Link>

        <div className="header-actions">
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
