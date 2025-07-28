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
          <p>
            Senior Full-Stack Developer with {yearsOfExperienceTotal}+ years of experience building and modernizing complex systems in both federal and private sectors. I actively contribute to architectural discussions, collaborate on design decisions, and have a proven record leading efforts on large-scale applications, mentoring teams, and driving improvements in developer experience, performance, and maintainability.
          </p>
          <p>
            At <strong>4 Arrows Consulting, Inc.</strong>, I have spent {yearsOfExperienceAtPresentCompany}+ years as a developer and remote contributor for FEMA's <strong>PrepToolkit</strong> platform. I deliver features across multiple modules, lead annual updates to URT assessment systems, modernize legacy apps, and collaborate on architectural decisions and code reviews across both legacy GWT modules and modern Svelte-based services. I also help support containerized Java microservices and mentor junior developers.
          </p>
          <p>
            My background includes enterprise logistics systems at <strong>UPS</strong>, where I maintained and enhanced large-scale logistics platforms, developed UI and backend features, and optimized performance for real-time tracking systems. At <strong>Apax Software</strong>, I delivered Python/Django and AngularJS web applications, developed CMS tools, and managed multiple client projects.
          </p>
          <p>
            My technical strengths span <strong>Java</strong> (Spring Boot, Quarkus, GWT), <strong>Python/Django</strong>, <strong>Go</strong> (Gin, gRPC, net/http), and modern front-end frameworks (<strong>React</strong>, <strong>Svelte</strong>, <strong>Angular</strong>, <strong>Vue</strong>). I am passionate about cloud architecture, DevOps, legacy modernization, and mobile app development (iOS/Swift, Android/Kotlin, React Native).
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
