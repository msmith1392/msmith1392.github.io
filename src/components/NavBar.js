import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">About</Link></li>
      <li><Link to="/work-experience">Work Experience</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><a href="/resume.pdf" download>Download Resume</a></li>
    </ul>
  </nav>
);

export default NavBar;
