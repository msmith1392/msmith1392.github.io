import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const Contact = () => {
  // useState to manage the form visibility state
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to toggle the form visibility
  const toggleForm = () => setIsFormOpen(!isFormOpen);
  
  return (
    <section className="container text-center">
      <FadeInSection>
        <h2>Contact Information</h2>
        <ul className="list-unstyled">
          <li>Email: <a href="mailto:msmith1392@gmail.com">msmith1392@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/msmith1392" target="_blank" rel="noopener noreferrer">View My GitHub Profile</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/matthew-smith-22310b111/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a></li>
          <li>Resume: <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a></li>
        </ul>

        {/* Button to toggle the form visibility */}
        <button 
          className="btn btn-primary mt-2 mb-4" 
          onClick={toggleForm} 
          aria-expanded={isFormOpen}
        >
          {isFormOpen ? 'Hide Contact Form' : 'Show Contact Form'}
        </button>

        {/* Collapsible form panel */}
        {isFormOpen && (
          <div className="mt-4 mb-5">
            <h4>Contact Me</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" required></textarea>
              </div>

              {/* Disabled Submit Button */}
              <button type="submit" className="btn btn-success" disabled>
                Submit (Not Functional Yet)
              </button>
            </form>

            {/* Informational message */}
            <div className="mt-3 alert alert-info">
              <strong>Note:</strong> The contact form is currently not functional. Please check back later.
            </div>
          </div>
        )}
      </FadeInSection>
    </section>
  );
};

export default Contact;
