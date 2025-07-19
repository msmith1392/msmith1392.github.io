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
            I'm a Senior Software Developer with {yearsOfExperienceTotal}+ years of hands-on experience designing, building, and delivering secure, scalable solutions for federal, enterprise, and nonprofit clients.
          </p>
          <p>
            At <strong>4 Arrows Consulting, Inc.</strong>, I have spent {yearsOfExperienceAtPresentCompany}+ years as a developer and remote contributor for FEMA's <strong>PrepToolkit</strong> platform. I play a key role in architecture and modernization efforts for mission-critical applications, including the Unified Reporting Tool (URT) and Radiological Emergency Preparedness Program (REPP) modules, helping jurisdictions nationwide meet compliance and disaster relief requirements.
          </p>
          <p>
            My background includes enterprise logistics systems at <strong>UPS</strong>, full-stack web and cloud-native development for public health and nonprofit clients at <strong>Apax Software</strong>, and deep experience with CMS platforms like <strong>Liferay</strong> and <strong>Drupal</strong>. I am skilled in performance testing, CI/CD automation, and mentoring teams in agile environments.
          </p>
          <p>
            My technical strengths span <strong>Java</strong> (Spring Boot, Quarkus, GWT), <strong>Python/Django</strong>, and modern front-end frameworks (<strong>React</strong>, <strong>Svelte</strong>, <strong>Angular</strong>). I am passionate about cloud architecture, legacy modernization, and mobile app development (iOS/Swift, Android/Kotlin, React Native).
          </p>
          <p>
            I thrive in leadership roles, enjoy mentoring developers, and am committed to delivering high-impact, maintainable solutions that drive organizational success.
          </p>
        </Card>
      </FadeInSection>
    </section>
  );
};

export default About;
