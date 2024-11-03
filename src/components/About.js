import React from 'react';
import FadeInSection from './FadeInSection';
import YearsOfExperience from './YearsOfExperience';

const About = ({ yearsOfExperience }) => {
  return (
    <section>
      <FadeInSection>
        <h2>About Me</h2>
      <p>
        I am a software developer with over <YearsOfExperience startDate="2015-03-01" /> years of experience in developing software applications, primarily focusing on Java. Since joining 4 Arrows Consulting in 2019, I have contributed significantly to various projects, including the PrepToolkit Unified Reporting Tool (URT).
      </p>
      <p>
        My key contributions include:
      </p>
      <ul>
        <li>Assisting with the migration of THIRA/SPR, CPG, NIMS, and UAWG components from max.gov.</li>
        <li>Supporting the ongoing development of PrepToolkit REP and HSEEP exercises.</li>
        <li>Implementing updates and changes to PrepToolkit URT assessments for each new assessment year.</li>
      </ul>
      <p>
        My responsibilities at 4 Arrows Consulting involve conducting requirements analysis, defect tracking, and enhancement proposals. I also provide level of effort estimates for implementation and participate in code design, review, and architecture efforts.
      </p>
      <p>
        Additionally, I utilize code repositories and configuration management controls, ensuring high-quality engineering processes. I perform unit-level testing and system analysis as needed.
      </p>
      <p>
        Before joining 4 Arrows Consulting, I worked as an Applications Developer at United Parcel Service (UPS), a Web Developer at Apax Software, and a Programming Analyst at Knowledge Facilitations Group (KFG). I graduated from Eastern Kentucky University in 2015 with a bachelor's degree in Computer Science.
      </p>
      <p>
        I am passionate about leveraging technology to solve complex problems and continuously improving my skills in the field.
      </p>
      </FadeInSection>
    </section>
  );
};

export default About;
