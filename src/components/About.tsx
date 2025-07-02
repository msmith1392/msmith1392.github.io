import React from 'react';
import FadeInSection from './FadeInSection';
import useYearsOfExperience from '../hooks/useYearsOfExperience';

const About: React.FC = () => {
  const yearsOfExperience = useYearsOfExperience('2015-03-01');

  return (
    <section className="container text-center">
      <FadeInSection>
        <h2>About Me</h2>
        <p>
          I'm a Software Developer with {yearsOfExperience}+ years building secure, scalable, and maintainable
          applications across federal and private sectors. My expertise centers on Java ecosystems-
          <strong>Spring Boot</strong>, <strong>GWT</strong>, and <strong>Quarkus</strong>-complemented by{' '}
          <strong>Python/Django</strong> and modern frontend frameworks like{' '}
          <strong>Svelte</strong>, <strong>React</strong>, and <strong>Angular</strong>.
        </p>
        <p>
          For over 5 years, I've worked 100% remotely supporting FEMA's <strong>PrepToolkit</strong> at <strong>4 Arrows Consulting, Inc.</strong>.
          I contribute to key apps like the Unified Reporting Tool (URT), REP Exercises, and HSEEP, working across both legacy
          and modern systems. This includes migrating legacy platforms from max.gov and building cloud-native backend services
          using <strong>AWS Lambda</strong>, <strong>API Gateway</strong>, and containerized microservices with <strong>Podman</strong>.
        </p>
        <p>
          Earlier, I worked on enterprise logistics systems at <strong>UPS</strong> and full-stack web apps for nonprofit and
          public health clients with <strong>Apax Software</strong>. I'm experienced with CMS platforms like <strong>Liferay</strong>{' '}
          and <strong>Drupal</strong>, performance testing, and agile CI/CD pipelines.
        </p>
        <p>
          I'm open to new opportunities where I can help modernize platforms, build mission-driven software, or contribute to
          cloud-native architecture.
        </p>
      </FadeInSection>
    </section>
  );
};

export default About;
