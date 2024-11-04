import React from 'react';
import FadeInSection from './FadeInSection';

const Contact = () => {
  return (
    <section className="container text-center">
      <FadeInSection>
        <h2>Contact Information</h2>
        <ul className="list-unstyled">
          <li>Email: <a href="mailto:baseball.bats129@silomails.com">baseball.bats129@silomails.com</a></li>
          <li>GitHub: <a href="https://github.com/msmith1392" target="_blank" rel="noopener noreferrer">View My GitHub Profile</a></li>
          <li>Resume: <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a></li>
        </ul>
      </FadeInSection>
    </section>
  );
};

export default Contact;
