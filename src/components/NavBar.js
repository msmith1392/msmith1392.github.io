import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand" style={{ backgroundColor: '#343a40' }}>
    <div className="container-fluid">
      <div className="collapse navbar-collapse justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white" onClick={() => window.scrollTo(0, 0)}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/work-experience" className="nav-link text-white" onClick={() => window.scrollTo(0, 0)}>Work Experience</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-white" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
