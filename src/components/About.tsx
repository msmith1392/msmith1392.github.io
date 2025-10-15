import React from 'react';
import Card from './Card';
import FadeInSection from './FadeInSection';
import AccordionSection from './AccordionSection';
import useYearsOfExperience from '../hooks/useYearsOfExperience';

type AboutSection = {
  header: string;
  body: React.ReactNode;
  id: string;
};

const About: React.FC = () => {
  const yearsOfExperienceTotal: number = useYearsOfExperience('2015-03-01');
  const yearsOfExperienceAtPresentCompany: number = useYearsOfExperience('2019-03-11');

  const aboutSections: AboutSection[] = [
    {
      header: "Professional Overview",
      body: (
        <>
          Full-Stack Software Engineer with {yearsOfExperienceTotal}+ years experience modernizing and delivering enterprise systems in federal and private sectors.
          Expert in <strong>Java</strong> (<strong>Spring Boot, Quarkus, Liferay, GWT</strong>) and <strong>JavaScript/TypeScript</strong> (<strong>React, Svelte, Angular</strong>), with a proven record on mission-critical FEMA systems, including the <strong>Preparedness Toolkit (PrepToolkit)</strong> and <strong>Unified Reporting Tool (URT)</strong>.
        </>
      ),
      id: "ProfessionalOverview",
    },
    {
      header: "Core Competencies",
      body: (
        <>
          Skilled in designing scalable <strong>RESTful APIs</strong>, modernizing legacy applications, implementing containerized microservices with <strong>Docker/Podman</strong>, and managing relational databases (<strong>MySQL, PostgreSQL, SQL Server</strong>) with <strong>Flyway migrations</strong>.
          Experienced mentoring teams and driving maintainability, performance, and technical excellence in fully remote, agile environments.
        </>
      ),
      id: "CoreCompetencies",
    },
    {
      header: "FEMA Experience",
      body: (
        <>
          At <strong>4 Arrows Consulting, Inc.</strong>, I have spent {yearsOfExperienceAtPresentCompany}+ years as a developer and remote contributor for FEMA's <strong>PrepToolkit</strong> platform.
          I deliver features across multiple modules, lead annual updates to URT assessment systems, modernize legacy apps, and collaborate on architectural decisions and code reviews across both legacy GWT modules and modern Svelte-based services.
          I also help support containerized Java microservices and mentor junior developers.
        </>
      ),
      id: "FEMAExperience",
    },
    {
      header: "Previous Roles",
      body: (
        <>
          My background includes enterprise logistics systems at <strong>UPS</strong>, where I maintained and enhanced large-scale logistics platforms, developed UI and backend features, and optimized performance for real-time tracking systems.
          At <strong>Apax Software</strong>, I delivered Python/Django and AngularJS web applications, developed CMS tools, and managed multiple client projects.
        </>
      ),
      id: "PreviousRoles",
    },
    {
      header: "Technical Highlights",
      body: (
        <>
          <strong>Java (Spring Boot, Quarkus)</strong>, <strong>MySQL, PostgreSQL, SQL Server</strong>, <strong>Flyway</strong>, JavaScript/TypeScript (Svelte, React, Angular), GWT, Bootstrap, Tailwind, Gradle, Maven, Git, <strong>Docker, Podman</strong>, AWS, Liferay 7, Node.js, npm
        </>
      ),
      id: "TechnicalHighlights",
    },
    {
      header: "Personal Statement",
      body: (
        <>
          I thrive in remote, cross-functional teams, enjoy mentoring developers, and consistently deliver high-impact, maintainable solutions leveraging my expertise in full-stack development, microservices, and modern enterprise systems.
        </>
      ),
      id: "PersonalStatement",
    },
  ];

  return (
    <section className="container text-center">
      <FadeInSection>
        <h2>About Me</h2>
        <Card>
          <div className="accordion mx-auto" id="aboutAccordion">
            {aboutSections.map(section => (
              <AccordionSection
                key={section.id}
                header={section.header}
                body={section.body}
                id={section.id}
                parentId="aboutAccordion"
              />
            ))}
          </div>
        </Card>
      </FadeInSection>
    </section>
  );
};

export default About;
