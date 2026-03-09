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
          Senior Software Engineer with {yearsOfExperienceTotal}+ years of experience specializing in building, modernizing, and delivering secure, scalable enterprise systems across federal and private sectors.
          Expert in <strong>Java (Spring Boot)</strong>, <strong>C# (.NET)</strong>, and <strong>Python (Django)</strong> and modern <strong>TypeScript</strong> frameworks, with a proven record designing RESTful APIs, leading legacy modernization initiatives, and delivering containerized microservices built around API-driven, event-driven, and layered system design patterns.
          Deep involvement in mission-critical FEMA platforms including <strong>PrepToolkit</strong> and <strong>URT</strong>, with {yearsOfExperienceAtPresentCompany}+ years translating complex federal compliance requirements into distributed, maintainable architectures.
          Actively exploring <strong>LLM integration</strong> and <strong>Retrieval-Augmented Generation (RAG)</strong> architectures.
        </>
      ),
      id: "ProfessionalOverview",
    },
    {
      header: "FEMA & Federal Work",
      body: (
        <>
          Over {yearsOfExperienceAtPresentCompany}+ years supporting FEMA preparedness platforms at <strong>4 Arrows Consulting, Inc.</strong>, delivering features across <strong>PrepToolkit</strong> and <strong>URT</strong>, driving legacy modernization from <strong>Liferay/GWT</strong> to <strong>Svelte</strong> micro-frontends, designing distributed session logic for concurrent federal users, and translating complex compliance requirements (<strong>THIRA/SPR, CPG, NIMS, UAWG</strong>) into scalable technical solutions.
        </>
      ),
      id: "FEMAWork",
    },
    {
      header: "Earlier Career",
      body: (
        <>
          Prior to federal work, built a broad foundation across enterprise logistics, client-facing consulting, and data engineering.
          At <strong>UPS</strong>, maintained and enhanced large-scale real-time transportation visibility systems in a 24/7 high-throughput environment, applying performance tuning and business rules engine expertise at enterprise scale.
          At <strong>Apax Software</strong>, delivered full-stack web applications across multiple industries, developing the client communication and modular architecture skills that carry through to today.
          At <strong>Knowledge Facilitations Group</strong>, engineered Python-based data transformation pipelines and real-time monitoring dashboards for EDI systems: an early foundation in backend data engineering and operational observability.
        </>
      ),
      id: "EarlierCareer",
    },
    {
      header: "Proven Track Record",
      body: (
        <>
          Designed RESTful APIs, led legacy modernization initiatives, delivered containerized services in production, and mentored engineering teams.
          Automated enterprise reporting workflows reducing processing time from hours to minutes.
          Strong focus on maintainability, performance, and clean architecture across every engagement.
        </>
      ),
      id: "ProvenTrackRecord",
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
