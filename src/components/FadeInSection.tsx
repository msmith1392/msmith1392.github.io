import React, { ReactNode, useEffect, useRef, useState } from 'react';

type FadeInSectionProps = {
  children: ReactNode;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
  const ref: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const observer: IntersectionObserver = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]): void => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      }
    );

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
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
