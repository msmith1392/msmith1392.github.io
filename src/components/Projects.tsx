import React, { useState } from 'react';
import Card from './Card';
import FadeInSection from './FadeInSection';

type Project = {
  title: string;
  description: string[];
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "RAG Document Q&A Demo",
    description: [
      "A locally-running Retrieval-Augmented Generation (RAG) system for document question answering, built as a hands-on exploration of core RAG concepts.",
      "Supports uploading PDF documents, chunking and embedding them into a local vector store, and querying them with a constrained LLM prompt to keep answers grounded strictly in the uploaded content.",
      "Runs fully offline with no API keys and no external services. No data leaves your machine.",
    ],
    githubUrl: "https://github.com/msmith1392/rag-demo",
  },
  {
    title: "Personal Portfolio Site",
    description: [
      "A production-deployed React and TypeScript single-page application built with Vite, React Router, Framer Motion, and Bootstrap, hosted via GitHub Pages.",
      "Structured with reusable components, custom hooks, and a consistent design system, reflecting the same architectural discipline applied in professional work.",
      "Maintained with versioned releases, ESLint and Prettier enforced code quality, and a committed VS Code configuration to ensure a consistent development environment.",
    ],
    githubUrl: "https://github.com/msmith1392/msmith1392.github.io",
  },
];

const Projects: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle: (index: number) => void = (index: number): void => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="container text-center">
      <FadeInSection>
        <h2 className="mb-4">Projects</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {projects.map((project: Project, index: number) => (
              <Card
                key={index}
                expandable
                expanded={expanded === index}
                onToggle={() => handleToggle(index)}
                className="mb-3"
                showBottomToggle
                title={
                  <div>
                    <div className="card-entry-title">{project.title}</div>
                    <div className="card-entry-organization">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View on GitHub
                      </a>
                    </div>
                  </div>
                }
              >
                {expanded === index && (
                  <ul className="work-experience-list">
                    {project.description.map((point: string, i: number) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;
