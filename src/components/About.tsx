import React from 'react';
import FadeInSection from './FadeInSection';
import useYearsOfExperience from '../hooks/useYearsOfExperience';

const About: React.FC = () => {
  const yearsOfExperienceTotal = useYearsOfExperience('2015-03-01');
  const yearsOfExperienceAtPresentCompany = useYearsOfExperience('2019-03-11');

  return (
    <section className="container text-center">
      <FadeInSection>
        <h2>About Me</h2>
        <p>
          I'm a Software Developer with {yearsOfExperienceTotal}+ years building secure, scalable, and maintainable
          applications across federal and private sectors. My expertise centers on Java ecosystems-
          <strong>Spring Boot</strong>, <strong>GWT</strong>, and <strong>Quarkus</strong>-complemented by{' '}
          <strong>Python/Django</strong> and modern frontend frameworks like{' '}
          <strong>Svelte</strong>, <strong>React</strong>, and <strong>Angular</strong>.
        </p>
        <p>
          For over {yearsOfExperienceAtPresentCompany} years, I've worked remotely supporting FEMA's <strong>PrepToolkit</strong> at <strong>4 Arrows Consulting, Inc.</strong>.
          I contribute to key apps like the Unified Reporting Tool (URT), Radiological Emergency Preparedness Program (REPP) Exercises, and Homeland Security Exercise and Evaluation Program (HSEEP) modules—critical tools for planning, conducting, and evaluating emergency exercises at the local, state, and national level, as well as in the private sector.
          My work helps ensure jurisdictions meet FEMA requirements and remain eligible for federal disaster relief funding.
          I've contributed to modernizing legacy systems and developing scalable, cloud-native backends.
        </p>
        <p>
          Prior to joining 4 Arrows, I worked on enterprise logistics systems at <strong>UPS</strong> and full-stack web apps for nonprofit and
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
