import React, { useEffect, useRef } from 'react';

const FadeInSection = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.disconnect(); // Stop observing after the element is visible
      }
    });

    const currentRef = ref.current; // Store ref.current in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the stored variable here
      }
    };
  }, []);

  return (
    <div ref={ref} className="fade-in">
      {children}
    </div>
  );
};

export default FadeInSection;
