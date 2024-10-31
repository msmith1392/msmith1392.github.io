import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Matthew Smith</h1>
    <p>Software Developer</p>
    <nav>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/work-experience">Work Experience</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
