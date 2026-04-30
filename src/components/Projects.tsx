import React from 'react';
import FadeInSection from './FadeInSection';

type Project = {
  title: string;
  description: string[];
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: 'RAG Document Q&A Demo',
    description: [
      'A locally-running RAG system built with Python, LangChain, FAISS, and Mistral 7B via llama-cpp-python. Accepts PDF uploads, chunks and embeds them using sentence-transformers (all-MiniLM-L6-v2), and retrieves the top-k most relevant chunks via FAISS similarity search.',
      'Uses a constrained prompt to keep answers strictly grounded in uploaded content. Source citations are returned alongside every answer.',
      'Runs entirely offline on CPU with no API keys, no external services, and no data leaving the machine.',
    ],
    githubUrl: 'https://github.com/msmith1392/rag-demo',
  },

  {
    title: 'Personal Portfolio Site',
    description: [
      'A production-deployed React and TypeScript single-page application built with Vite and Tailwind, hosted via GitHub Pages.',
      'Structured with reusable components, custom hooks, and a consistent design system, reflecting the same architectural discipline applied in professional work.',
      'Maintained with versioned releases, ESLint and Prettier enforced code quality, and a committed VS Code configuration to ensure a consistent development environment.',
    ],
    githubUrl: 'https://github.com/msmith1392/msmith1392.github.io',
  },
];

const GitHubIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Projects: React.FC = () => (
  <section id="projects" className="bg-gray-50 py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <FadeInSection>
        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
          Projects
        </p>

        <h2 className="text-3xl font-bold text-navy mb-12">Personal projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col"
            >
              <h3 className="text-base font-semibold text-navy mb-3">{project.title}</h3>

              <ul className="space-y-2 flex-1">
                {project.description.map((point: string, i: number) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center gap-2 text-sm font-medium text-navy hover:text-blue-500 transition-colors"
              >
                <GitHubIcon />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default Projects;
