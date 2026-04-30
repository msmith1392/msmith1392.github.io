import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

type Experience = {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: string;
};

const experiences: Experience[] = [
  {
    jobTitle: 'Senior Software Engineer',
    company: '4 Arrows Consulting, Inc.',
    location: 'Remote / Somerset, KY',
    startDate: 'March 2019',
    endDate: 'Present',
    description: [
      'Serverless Platform Architecture: Designed and delivered the Svelte frontend for a TypeScript monorepo of AWS serverless applications (Lambda, API Gateway, CloudFront, ElastiCache, RDS) serving as a unified access portal for FEMA platforms including PrepToolkit, RTLT, RIS, and OneResponder.',
      'System Architecture & Presence: Spearheaded the implementation of a real-time presence tracking system for the Unified Reporting Tool (URT). Independently designed and optimized distributed session logic (polling/timeouts) to ensure data integrity for concurrent federal users.',
      'Cross-Stack Feature Ownership: Delivered complex features across backend (Spring Boot/.NET), database, and frontend layers within FEMA preparedness platforms (PrepToolkit, URT), ensuring cohesive integration between APIs, data models, and user interfaces.',
      'Operational Excellence: Automated enterprise reporting workflows (Docmosis/Apache POI), reducing processing time from hours to minutes and directly improving operational efficiency for national exercise programs.',
      'Stakeholder Alignment: Translates complex FEMA business requirements (THIRA/SPR, CPG, NIMS, UAWG) into scalable technical solutions, coordinating closely with project leads to ensure all deliverables meet federal compliance and security standards.',
      'Development Workflow: Consistently utilizes containerized environments (Docker/Podman) and Flyway-based database migrations across projects, including scripted Podman-based Liferay container management to streamline local development and module redeployment. Conducts peer code reviews to reinforce clean architecture and maintainable code practices.',
      'Developer Experience: Standardized editor configurations across VS Code, IntelliJ, and Visual Studio to enforce consistent code formatting team-wide, eliminating noise commits caused by style-only changes.',
    ],
    techStack:
      'Java, Spring Boot, Gradle, GWT, MySQL, Liferay 7, Apache HTTP Server, JavaScript/TypeScript, Svelte, React, Node.js, npm, AWS Lambda, Git, Podman, Docmosis, OpenCSV, Apache POI',
  },
  {
    jobTitle: 'Applications Developer',
    company: 'United Parcel Service (UPS)',
    location: 'Louisville, KY',
    startDate: 'March 2017',
    endDate: 'March 2019',
    description: [
      'Mission-Critical Reliability: Engineered backend logic and UI features for real-time transportation visibility systems, ensuring operational uptime in a 24/7 high-throughput production environment.',
      'Business Logic Abstraction: Architected complex decision-making flows by translating high-level business requirements into discrete rules for the Drools inference engine (BRMS), reducing manual intervention and decoupling policy from code.',
      'Performance Engineering: Conducted deep-dive bottleneck analysis and performance tuning (JMeter), identifying and resolving critical latency issues under peak traffic conditions.',
    ],
    techStack:
      'Java, Spring Framework, Maven/Gradle, Drools (BRMS), JMeter, Roadrunner, WebLogic, ActiveMQ, SQL Server, TFVC',
  },
  {
    jobTitle: 'Software Developer',
    company: 'Apax Software',
    location: 'Lexington, KY',
    startDate: 'March 2016',
    endDate: 'March 2017',
    description: [
      'Modular Architecture: Designed reusable backend components and modular UI features, significantly accelerating release cycles and ensuring scalable feature expansion across multiple client projects.',
      'Technical Consultation: Partnered directly with stakeholders (Presbyterian Church (USA), University of Kentucky) to translate vague business needs into production-ready technical specifications and RESTful architectures.',
      'Security & Governance: Implemented robust server-side validation, authentication, and role-based access control (RBAC) for sensitive event registration and CMS workflows.',
    ],
    techStack:
      'Python, Django, JavaScript (AngularJS, jQuery), PostgreSQL, Bootstrap, AWS, Git, PHP, Drupal',
  },
  {
    jobTitle: 'Programming Analyst',
    company: 'Knowledge Facilitations Group (KFG)',
    location: 'Richmond, KY',
    startDate: 'March 2015',
    endDate: 'March 2016',
    description: [
      'Data Pipeline Engineering: Developed Python-based transformation engines to validate and map disparate industry standards (X12, EDIFACT, XML, JSON), ensuring seamless data exchange across the EDITRACE platform.',
      'Operational Observability: Built real-time monitoring dashboards that provided immediate insight into automated data pipelines, reducing troubleshooting time for critical EDI processes.',
    ],
    techStack: 'Python, EDI (X12, XML, EDIFACT, Tradacoms, JSON, IDoc), Bootstrap, Git',
  },
];

const calculateDuration: (start: string, end: string) => string = (
  start: string,
  end: string
): string => {
  const [startMonthStr, startYearStr]: [string, string] = start.split(' ') as [string, string];
  const [endMonthStr, endYearStr]: [string, string] =
    end === 'Present'
      ? [
          new Date().toLocaleString('default', { month: 'long' }),
          new Date().getFullYear().toString(),
        ]
      : (end.split(' ') as [string, string]);

  const startMonth: number = months.indexOf(startMonthStr);
  const endMonth: number = months.indexOf(endMonthStr);
  const startYear: number = parseInt(startYearStr, 10);
  const endYear: number = parseInt(endYearStr, 10);

  let totalMonths: number = (endYear - startYear) * 12 + (endMonth - startMonth);

  if (end === 'Present') {
    totalMonths += 1;
  }

  if (totalMonths < 12) {
    return totalMonths === 1 ? '1 month' : `${totalMonths} months`;
  }

  const years: number = Math.floor(totalMonths / 12);
  const monthsRemainder: number = totalMonths % 12;

  if (monthsRemainder === 0) {
    return years === 1 ? '1 year' : `${years} years`;
  }

  return `${years} year${years > 1 ? 's' : ''} ${monthsRemainder} month${monthsRemainder > 1 ? 's' : ''}`;
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
    className={`transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const WorkExperience: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle: (index: number) => void = (index: number): void => {
    setExpanded((prev: number | null): number | null => (prev === index ? null : index));
  };

  return (
    <section id="experience" className="bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeInSection>
          {/* Section label */}
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
            Experience
          </p>

          <h2 className="text-3xl font-bold text-navy mb-12">Work experience</h2>

          <div className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
            {experiences.map((exp: Experience, index: number) => {
              const isOpen: boolean = expanded === index;
              return (
                <div key={index}>
                  <button
                    onClick={(): void => handleToggle(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <div className="text-base font-semibold text-navy">{exp.jobTitle}</div>
                      <div className="text-sm text-gray-700 mt-0.5">{exp.company}</div>
                      <div className="text-sm text-gray-400 mt-0.5">{exp.location}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {exp.startDate} - {exp.endDate} &nbsp;·&nbsp;{' '}
                        {calculateDuration(exp.startDate, exp.endDate)}
                      </div>
                    </div>
                    <ChevronIcon open={isOpen} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-gray-100">
                      <ul className="mt-4 space-y-2">
                        {exp.description.map((point: string, i: number) => (
                          <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 text-xs text-gray-400 leading-relaxed">
                        <span className="font-semibold text-gray-500">Tech stack: </span>
                        {exp.techStack}
                      </p>
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

export default WorkExperience;
