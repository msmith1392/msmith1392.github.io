import React, { ReactNode, useEffect, useRef } from 'react';

type FadeInSectionProps = {
  children: ReactNode;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/typedef
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.disconnect();
      }
    });

    const currentRef: HTMLDivElement | null = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return (): void => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
