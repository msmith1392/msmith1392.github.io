import React from 'react';
import FadeInSection from './FadeInSection';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeInSection>
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
            Contact
          </p>
          <h2 className="text-3xl font-bold text-navy mb-4">Get in touch</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Open to new opportunities and interesting problems. Send me an email and I will get back
            to you.
          </p>
          <a
            href="mailto:msmith1392@gmail.com"
            className="inline-block bg-navy hover:bg-navy-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            msmith1392@gmail.com
          </a>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Contact;
