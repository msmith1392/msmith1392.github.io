import React from 'react';
import FadeInSection from './FadeInSection';

type SkillSection = {
  id: string;
  header: string;
  tags: string[];
};

const skillSections: SkillSection[] = [
  {
    id: 'languages',
    header: 'Languages',
    tags: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'PHP', 'HTML', 'CSS'],
  },
  {
    id: 'frameworks',
    header: 'Frameworks & libraries',
    tags: [
      'Spring Boot',
      'Django',
      '.NET',
      'GWT',
      'React',
      'Svelte',
      'Angular',
      'Bootstrap',
      'Tailwind',
    ],
  },
  {
    id: 'platforms',
    header: 'Platforms & cloud',
    tags: [
      'Liferay 7',
      'Drupal',
      'AWS Lambda',
      'AWS S3',
      'Apache HTTP Server',
      'Apache Tomcat',
      'Node.js',
      'Cloudflare Workers & Pages',
    ],
  },
  {
    id: 'databases',
    header: 'Databases',
    tags: ['MySQL', 'PostgreSQL', 'SQL Server', 'Flyway'],
  },
  {
    id: 'devops',
    header: 'DevOps & tools',
    tags: [
      'Git',
      'Maven',
      'Gradle',
      'npm',
      'Docker',
      'Podman',
      'Docmosis',
      'OpenCSV',
      'Apache POI',
    ],
  },
  {
    id: 'practices',
    header: 'Engineering practices',
    tags: [
      'Microservices',
      'API-Driven Design',
      'Event-Driven Patterns',
      'Distributed Session Management',
      'Legacy System Modernization',
      'Mentoring & Code Reviews',
      'Performance Tuning',
      'REST API Design',
      'Agile / Scrum',
      'LLM Integration',
      'Retrieval-Augmented Generation (RAG)',
    ],
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="bg-white py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <FadeInSection>
        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">Skills</p>

        <h2 className="text-3xl font-bold text-navy mb-12">Technical skills</h2>

        <div className="divide-y divide-gray-100 border border-gray-200 rounded-xl overflow-hidden">
          {skillSections.map((section: SkillSection) => (
            <div key={section.id} className="px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                {section.header}
              </p>
              <div className="flex flex-wrap gap-2">
                {section.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-sm text-navy bg-white border border-gray-200 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default Skills;
