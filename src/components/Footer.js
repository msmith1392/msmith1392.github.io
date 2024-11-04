import React from 'react';
import NavBar from './NavBar';

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-3">
      <NavBar />
      <p>&copy; {new Date().getFullYear()} Matthew Smith</p>
    </footer>
  );
};

export default Footer;
