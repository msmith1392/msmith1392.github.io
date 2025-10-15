import React from 'react';
import Card from './Card';
import FadeInSection from './FadeInSection';
import useYearsOfExperience from '../hooks/useYearsOfExperience';

const About: React.FC = () => {
  const yearsOfExperienceTotal: number = useYearsOfExperience('2015-03-01');
  const yearsOfExperienceAtPresentCompany: number = useYearsOfExperience('2019-03-11');

  return (
    <section className="container text-center">
      <FadeInSection>
        <h2>About Me</h2>
        <Card>
          <h5>Professional Overview</h5>
          <p>
            Full-Stack Software Engineer with {yearsOfExperienceTotal}+ years experience modernizing and delivering enterprise systems in federal and private sectors. 
            Expert in <strong>Java</strong> (<strong>Spring Boot, Quarkus, Liferay, GWT</strong>) and <strong>JavaScript/TypeScript</strong> (<strong>React, Svelte, Angular</strong>), with a proven record on mission-critical FEMA systems, including the <strong>Preparedness Toolkit (PrepToolkit)</strong> and <strong>Unified Reporting Tool (URT)</strong>.
          </p>

          <h5>Core Competencies</h5>
          <p>
            Skilled in designing scalable <strong>RESTful APIs</strong>, modernizing legacy applications, implementing containerized microservices with <strong>Docker/Podman</strong>, and managing relational databases (<strong>MySQL, PostgreSQL, SQL Server</strong>) with <strong>Flyway migrations</strong>. 
            Experienced mentoring teams and driving maintainability, performance, and technical excellence in fully remote, agile environments.
          </p>

          <h5>FEMA Experience</h5>
          <p>
            At <strong>4 Arrows Consulting, Inc.</strong>, I have spent {yearsOfExperienceAtPresentCompany}+ years as a developer and remote contributor for FEMA's <strong>PrepToolkit</strong> platform. 
            I deliver features across multiple modules, lead annual updates to URT assessment systems, modernize legacy apps, and collaborate on architectural decisions and code reviews across both legacy GWT modules and modern Svelte-based services. 
            I also help support containerized Java microservices and mentor junior developers.
          </p>

          <h5>Previous Roles</h5>
          <p>
            My background includes enterprise logistics systems at <strong>UPS</strong>, where I maintained and enhanced large-scale logistics platforms, developed UI and backend features, and optimized performance for real-time tracking systems. 
            At <strong>Apax Software</strong>, I delivered Python/Django and AngularJS web applications, developed CMS tools, and managed multiple client projects.
          </p>

          <h5>Technical Highlights</h5>
          <p>
            Java (Spring Boot, Quarkus), MySQL, PostgreSQL, SQL Server, Flyway, JavaScript/TypeScript (Svelte, React, Angular), GWT, Bootstrap, Tailwind, Gradle, Maven, Git, Docker, Podman, AWS, Liferay 7, Node.js, npm
          </p>

          <p>
            I thrive in remote and cross-functional teams, enjoy mentoring developers, and am committed to delivering high-impact, maintainable solutions that drive organizational success.
          </p>
        </Card>
      </FadeInSection>
    </section>
  );
};

export default About;
