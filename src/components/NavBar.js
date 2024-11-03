import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>About</Link></li>
      <li><Link to="/work-experience" onClick={() => window.scrollTo(0, 0)}>Work Experience</Link></li>
      <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link></li>
    </ul>
  </nav>
);

export default NavBar;
