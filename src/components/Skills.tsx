import React, { useState } from "react";
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
    header: "Frameworks",
    body: "Spring Boot, Quarkus, Django, GWT, Gin, React, Svelte, Angular, .NET, Material UI, Tailwind",
    id: "Frameworks",
  },
  {
    header: "CMS & Platforms",
    body: "Liferay, Drupal, AWS (Lambda, S3), Apache HTTP Server, MySQL, Postgres, SQL Server",
    id: "CMSPlatforms",
  },
  {
    header: "DevOps & Tools",
    body: "Git, GitHub Flow, Maven, Gradle, npm, Node.js, go modules, JMeter, ActiveMQ, WebLogic, Docker, Podman, Kubernetes",
    id: "DevTools",
  },
  {
    header: "Other",
    body: "Remote Collaboration, Agile/Scrum, CI/CD Pipelines, gRPC, net/http, Legacy System Modernization",
    id: "Other",
  },
];

const Skills: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <section>
      <FadeInSection>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Technical Skills</h2>
        <Card>
          {skillSections.map((section: SkillSection) => (
            <AccordionSection
              key={section.id}
              header={section.header}
              body={<span>{section.body}</span>}
              id={section.id}
              expanded={expanded === section.id}
              onChange={handleChange}
            />
          ))}
        </Card>
      </FadeInSection>
    </section>
  );
};

export default Skills;