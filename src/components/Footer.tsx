import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-white text-center py-3">
      <p>&copy; {new Date().getFullYear()} Matthew Smith</p>
    </footer>
  );
};

export default Footer;
