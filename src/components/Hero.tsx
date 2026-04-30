import React from 'react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START, COMPANY_COUNT } from '../constants';

const Hero: React.FC = () => {
  const totalYears: number = useYearsOfExperience(CAREER_START);

  return (
    <section id="hero" className="bg-navy text-white py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="flex flex-col items-center md:items-start order-2 md:order-1 text-center md:text-left">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Senior Software Engineer
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
            {totalYears}+ years shipping to production
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-3">
            Enterprise platforms for FEMA, UPS, and clients across the private sector. Experienced
            in Java, TypeScript, Python, and .NET, with a habit of picking up new tech stacks
            quickly.
          </p>

          <p className="text-white/50 text-sm mb-10">Somerset, KY · Remote or hybrid</p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="#experience"
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded font-semibold transition-colors text-center"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded font-semibold transition-colors text-center"
            >
              Get in touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded font-semibold transition-colors text-center"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right: photo */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <img
            src="/photo1.jpg"
            alt="Matthew Smith"
            className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover object-top"
          />
        </div>
      </div>

      {/* Stat strip */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-3 gap-8 sm:gap-16 border-t border-white/10 pt-10 text-center md:text-left">
        <div>
          <div className="text-3xl font-bold text-white">{totalYears}+</div>
          <div className="text-white/50 text-xs mt-1 uppercase tracking-wide">Years experience</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white">{COMPANY_COUNT}</div>
          <div className="text-white/50 text-xs mt-1 uppercase tracking-wide">Companies</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-white">2</div>
          <div className="text-white/50 text-xs mt-1 uppercase tracking-wide">Sectors</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
