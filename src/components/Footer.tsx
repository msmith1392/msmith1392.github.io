import React from 'react';

const Footer: React.FC = () => (
  <footer className="text-white text-center py-3">
    <p>&copy; {new Date().getFullYear()} Matthew Smith</p>
    <div className="footer-icons mt-2">
      <a href="mailto:msmith1392@gmail.com" className="mx-2" aria-label="Email">
        <i className="bi bi-envelope" style={{ fontSize: '1.2rem', color: 'white' }}></i>
      </a>
      <a href="https://github.com/msmith1392" target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="GitHub">
        <i className="bi bi-github" style={{ fontSize: '1.2rem', color: 'white' }}></i>
      </a>
      <a href="https://www.linkedin.com/in/matthew-smith-22310b111/" target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="LinkedIn">
        <i className="bi bi-linkedin" style={{ fontSize: '1.2rem', color: 'white' }}></i>
      </a>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="Resume">
        <i className="bi bi-file-earmark-person" style={{ fontSize: '1.2rem', color: 'white' }}></i>
      </a>
    </div>
  </footer>
);

export default Footer;
