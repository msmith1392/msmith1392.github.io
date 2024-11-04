import React from 'react';
import NavBar from './NavBar';

const Header = () => (
  <header className="bg-primary text-white text-center py-4">
    <h1 className="display-4">Matthew Smith</h1>
    <p className="lead">Software Developer</p>
    <NavBar />
  </header>
);

export default Header;
