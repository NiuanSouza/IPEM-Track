import React from "react";
import { Link } from "react-router-dom";
import logoIpem from "../../assets/logo-ipem-invert.png";
import Profile from "./Profile/Profile.jsx";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="container-header">
        <Link to="/" className="logo-link">
          <img src={logoIpem} className="logo-brand" alt="IPEM-SP" />
        </Link>

        <div className="header-actions">
          <Profile />
        </div>
      </div>
    </header>
  );
}

export default Header;
