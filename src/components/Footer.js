import React from 'react';
import { Link } from 'react-router-dom';


const scrollToTop = () => {
  window.scrollTo(0, 0);
};  

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to="/" onClick={scrollToTop}>About</Link>
          </li>
          <li>
            <Link to="/work-experience" onClick={scrollToTop}>Work Experience</Link>
          </li>
          <li>
            <Link to="/contact" onClick={scrollToTop}>Contact</Link>
          </li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} Matthew Smith</p>
    </footer>
  );
};

export default Footer;
