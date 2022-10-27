import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li className="navbar-links-item">
          <Link className="navbar-item" to="/">
            Home
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-item" to="/add-session">
            +
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="navbar-item" to="/history">
            History
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
