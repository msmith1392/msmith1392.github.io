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
    body: "Java, Python, JavaScript/TypeScript, SQL, Go, Swift, Kotlin, PHP, C#, HTML, CSS",
    id: "Languages",
  },
  {
    header: "Frameworks & Libraries",
    body: "Spring Boot, Quarkus, Django, GWT, Gin, React, Svelte, Angular, .NET, Bootstrap, Tailwind",
    id: "Frameworks",
  },
  {
    header: "CMS, Platforms & Databases",
    body: "Liferay, Drupal, AWS (Lambda, S3), Apache HTTP Server, MySQL, PostgreSQL, SQL Server, Flyway migrations",
    id: "CMSPlatforms",
  },
  {
    header: "DevOps, Tools & Microservices",
    body: "Git, GitHub Flow, Maven, Gradle, npm, Node.js, go modules, JMeter, ActiveMQ, WebLogic, Docker, Podman, Kubernetes, containerized microservices",
    id: "DevTools",
  },
  {
    header: "Other Skills",
    body: "Remote Collaboration, Agile/Scrum, CI/CD Pipelines, gRPC, net/http, Legacy System Modernization, Mentoring & Code Reviews, Performance Tuning, REST API Design",
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
