import React, { useState } from 'react';
import FadeInSection from './FadeInSection';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START, FEDERAL_START, COMPANY_COUNT } from '../constants';

type AboutSection = {
  id: string;
  header: string;
  body: React.ReactNode;
};

const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const About: React.FC = () => {
  const totalYears: number = useYearsOfExperience(CAREER_START);
  const federalYears: number = useYearsOfExperience(FEDERAL_START);
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle: (id: string) => void = (id: string): void => {
    setOpenId((prev: string | null): string | null => (prev === id ? null : id));
  };

  const aboutSections: AboutSection[] = [
    {
      id: 'overview',
      header: 'Professional overview',
      body: (
        <>
          Senior Software Engineer with {totalYears}+ years specializing in building, modernizing,
          and delivering secure, scalable enterprise systems across federal and private sectors.
          Expert in <strong>Java (Spring Boot)</strong>, <strong>C# (.NET)</strong>, and{' '}
          <strong>Python (Django)</strong> with a proven record designing RESTful APIs, leading
          legacy modernization, and delivering containerized microservices.
        </>
      ),
    },
    {
      id: 'fema',
      header: 'FEMA & federal work',
      body: (
        <>
          {federalYears}+ years supporting FEMA preparedness platforms at{' '}
          <strong>4 Arrows Consulting, Inc.</strong>, delivering features across{' '}
          <strong>PrepToolkit</strong> and <strong>URT</strong>, delivering the Svelte frontend for
          a serverless AWS access portal covering <strong>PrepToolkit</strong>,{' '}
          <strong>RTLT</strong>, <strong>RIS</strong>, and <strong>OneResponder</strong>, designing
          distributed session logic for concurrent federal users, and translating compliance
          requirements (<strong>THIRA/SPR, CPG, NIMS, UAWG</strong>) into scalable technical
          solutions.
        </>
      ),
    },
    {
      id: 'career',
      header: 'Earlier career',
      body: (
        <>
          Prior to federal work, built a broad foundation across enterprise logistics, consulting,
          and data engineering. At <strong>UPS</strong>, maintained real-time transportation
          visibility systems in a 24/7 high-throughput environment. At{' '}
          <strong>Apax Software</strong>, delivered full-stack applications across multiple
          industries. At <strong>Knowledge Facilitations Group</strong>, engineered Python-based EDI
          transformation pipelines and real-time monitoring dashboards.
        </>
      ),
    },
    {
      id: 'track-record',
      header: 'Proven track record',
      body: (
        <>
          Designed RESTful APIs, led legacy modernization initiatives, delivered containerized
          services in production, and mentored engineering teams. Automated enterprise reporting
          workflows reducing processing time from hours to minutes. Strong focus on maintainability,
          performance, and clean architecture across every engagement.
        </>
      ),
    },
  ];

  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeInSection>
          {/* Section label */}
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
            About
          </p>

          {/* Prose intro */}
          <h2 className="text-3xl font-bold text-navy mb-4">{totalYears}+ years, 2 sectors</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            I've spent {totalYears}+ years writing backend services, modernizing legacy platforms,
            and shipping features in environments where correctness and reliability aren't optional:
            federal emergency management systems, enterprise logistics, and everything in between.
          </p>

          {/* Stat grid */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-navy">{totalYears}+</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                Years experience
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-navy">{COMPANY_COUNT}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">Companies</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-navy">{federalYears}+</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                Years federal work
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
            {aboutSections.map((section: AboutSection) => {
              const isOpen: boolean = openId === section.id;
              return (
                <div key={section.id}>
                  <button
                    onClick={(): void => toggle(section.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold text-navy hover:bg-gray-50 transition-colors"
                  >
                    {section.header}
                    <ChevronIcon open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">
                      {section.body}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;
