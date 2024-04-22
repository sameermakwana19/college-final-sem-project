import React from "react";
// import "./logo.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="navbar-logo">
        <img src={logo} className="logo-img" />
        <p className="logo-text">ZURU</p>
      </div>
    </Link>
  );
};

export default Logo;
