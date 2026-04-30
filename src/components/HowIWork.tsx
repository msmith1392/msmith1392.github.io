import React from 'react';
import FadeInSection from './FadeInSection';

type Principle = {
  number: string;
  title: string;
  body: string;
};

const principles: Principle[] = [
  {
    number: '01',
    title: 'Maintainability over cleverness',
    body: 'The best code is the code the next engineer can read, understand, and change without fear. I default to clear naming, consistent patterns, and boring solutions. Complexity only earns its place when the problem actually demands it.',
  },
  {
    number: '02',
    title: "Modernize, don't rewrite",
    body: 'Legacy systems carry years of encoded business logic that a greenfield rewrite will quietly lose. I look for the seam: the piece that can be extracted, replaced, and tested in isolation. Then work outward from there.',
  },
  {
    number: '03',
    title: 'API design is product design',
    body: 'A well-designed API is a contract. I treat the surface area of every service I build as something a teammate or consumer will depend on. Naming, error shapes, and versioning decisions made up front save painful migrations later.',
  },
  {
    number: '04',
    title: 'Reliability is a feature',
    body: "Uptime, data integrity, and predictable behavior under load aren't afterthoughts. They're requirements. Time spent on robust error handling, migration safety, and observability pays back faster than almost any other investment.",
  },
];

const HowIWork: React.FC = () => (
  <section id="how-i-work" className="bg-gray-50 py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <FadeInSection>
        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
          How I work
        </p>

        <h2 className="text-3xl font-bold text-navy mb-4">Engineering principles</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          A few things I've found to be true across every team and codebase I've worked in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {principles.map((p: Principle) => (
            <div key={p.number} className="bg-white rounded-xl border border-gray-200 p-6">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                {p.number}
              </span>
              <h3 className="text-base font-semibold text-navy mt-2 mb-3">{p.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default HowIWork;
