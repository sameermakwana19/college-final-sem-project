import React from "react";
// import "./navbar.scss";
import { NavLink } from "react-router-dom";
import AuthButton from "../AuthButton";
import Logo from "../Logo/Logo";
import CartButton from "../CartButton/CartButton";

const Navbar = () => {
  const user = true;
  return (
    <div className="navbar">
      <Logo />

      <ul className="nav-links">
        <NavLink to="/" className="nav-link">
          Shop
        </NavLink>
        <NavLink to="men" className="nav-link">
          Men
        </NavLink>
        <NavLink to="women" className="nav-link">
          Women
        </NavLink>
        <NavLink to="kids" className="nav-link">
          Kids
        </NavLink>
      </ul>
      <div className="cart-logoutbtn-container">
        <AuthButton />
        <CartButton />
      </div>
    </div>
  );
};

export default Navbar;
