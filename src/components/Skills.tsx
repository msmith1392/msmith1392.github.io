import React from "react";
import Card from "./Card";
import FadeInSection from "./FadeInSection";

const Skills: React.FC = () => (
  <section className="container text-center">
    <FadeInSection>
      <h2 className="mb-4">Technical Skills</h2>
      <Card>
        <ul className="list-unstyled text-left mx-auto" style={{ maxWidth: 600 }}>
          <li>
            <strong>Languages:</strong> Java, Python, JavaScript/TypeScript, SQL, Swift, Kotlin, PHP, C#, HTML, CSS
          </li>
          <li>
            <strong>Frameworks:</strong> Spring Boot, Quarkus, Django, GWT, React, Svelte, Angular, .NET, Bootstrap, Tailwind
          </li>
          <li>
            <strong>CMS &amp; Platforms:</strong> Liferay, Drupal, AWS (Lambda, S3), Apache HTTP Server, MySQL, Postgres, SQL Server
          </li>
          <li>
            <strong>Dev Tools:</strong> Git, GitHub Flow, Maven, JMeter, ActiveMQ, WebLogic, Docker, Podman, Kubernetes
          </li>
          <li>
            <strong>Other:</strong> Remote Collaboration, Agile/Scrum, CI/CD Pipelines, Legacy System Modernization
          </li>
        </ul>
      </Card>
    </FadeInSection>
  </section>
);

export default Skills;
