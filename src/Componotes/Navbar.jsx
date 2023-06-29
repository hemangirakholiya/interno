import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-containerr">
          <NavLink to="/interno" className="navbar-logo">
            <img src="./images/logo.svg" alt="logo" />
          </NavLink>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/interno" className="nav-links" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pages"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/project"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Project
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item-user">
              <NavLink
                to="/search"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div className="users">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </NavLink>
            </li>
            <li className="nav-item-user">
              <NavLink
                to="/login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <div className="users">
                  <i className="fa-solid fa-right-to-bracket"></i>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
