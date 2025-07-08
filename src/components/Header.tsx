import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => (
  <header className="sticky-header">
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} end>
        About
      </NavLink>
      <NavLink to="/work-experience" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
        Experience
      </NavLink>
      <NavLink to="/skills" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
        Skills
      </NavLink>
      <NavLink to="/education" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
        Education
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}>
        Contact
      </NavLink>
      <a
        href="/resume.pdf"
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
    </nav>
  </header>
);

export default Header;
