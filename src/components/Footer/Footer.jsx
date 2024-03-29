import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <ul className="footer-nav-links">
        <li className="footer-nav-link">
          <Link>Company</Link>
        </li>
        <li className="footer-nav-link">
          <Link>Products</Link>
        </li>
        <li className="footer-nav-link">
          <Link>Offices</Link>
        </li>
        <li className="footer-nav-link">
          <Link>About</Link>
        </li>
        <li className="footer-nav-link">
          <Link>Contact</Link>
        </li>
      </ul>
      <ul className="social-icons">
        <li className="social-icon">
          <Link>
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </li>
        <li className="social-icon">
          <Link>
            <i className="fa-brands fa-pinterest"></i>
          </Link>
        </li>
        <li className="social-icon">
          <Link>
            <i className="fa-brands fa-twitter"></i>
          </Link>
        </li>
      </ul>
      <hr />
      <p className="copyright-text">Copy &copy; 2024 - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
