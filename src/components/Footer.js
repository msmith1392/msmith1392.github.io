import React from 'react';
import NavBar from './NavBar';

const scrollToTop = () => {
  window.scrollTo(0, 0);
};  

const Footer = () => {
  return (
    <footer>
      <NavBar />
      <p>&copy; {new Date().getFullYear()} Matthew Smith</p>
    </footer>
  );
};

export default Footer;
