import React from "react";
import Card from "./Card";
import FadeInSection from "./FadeInSection";
import AccordionSection from "./AccordionSection";

type SkillSection = {
  header: string;
  body: string;
  id: string;
};

const skillSections: SkillSection[] = [
  {
    header: "Languages",
    body: "Java, Python, JavaScript/TypeScript, C#, SQL, PHP, HTML, CSS",
    id: "Languages",
  },
  {
    header: "Frameworks & Libraries",
    body: "Spring Boot, Django, .NET, GWT, React, Svelte, Angular, Bootstrap, Tailwind",
    id: "Frameworks",
  },
  {
    header: "Platforms & Cloud",
    body: "Liferay 7, Drupal, AWS (Lambda, S3), Apache HTTP Server, Apache Tomcat",
    id: "PlatformsCloud",
  },
  {
    header: "Databases",
    body: "MySQL, PostgreSQL, SQL Server, Flyway",
    id: "Databases",
  },
  {
    header: "DevOps & Tools",
    body: "Git, Maven, Gradle, npm, Node.js, Docker, Podman, Docmosis, OpenCSV, Apache POI",
    id: "DevTools",
  },
  {
    header: "Engineering Practices",
    body: "Microservices, API-Driven Design, Event-Driven Patterns, Distributed Session Management, Legacy System Modernization, Mentoring & Code Reviews, Performance Tuning, REST API Design, Agile/Scrum, LLM Integration, Retrieval-Augmented Generation (RAG)",
    id: "Other",
  },
];

const Skills: React.FC = () => (
  <section className="container text-center">
    <FadeInSection>
      <h2 className="mb-4">Technical Skills</h2>
      <Card>
        <div className="accordion mx-auto skills-accordion-max-width" id="skillsAccordion">
          {skillSections.map((section: SkillSection) => (
            <AccordionSection
              key={section.id}
              header={section.header}
              body={section.body}
              id={section.id}
              parentId="skillsAccordion"
            />
          ))}
        </div>
      </Card>
    </FadeInSection>
  </section>
);

export default Skills;
