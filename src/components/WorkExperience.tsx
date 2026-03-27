import React, { useState } from 'react';
import Card from './Card';
import FadeInSection from './FadeInSection';

const months: string[] = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

type Experience = {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: string;
};

const experiences: Experience[] = [
  {
    jobTitle: "Senior Software Engineer",
    company: "4 Arrows Consulting, Inc.",
    location: "Remote / Somerset, KY",
    startDate: "March 2019",
    endDate: "Present",
    description: [
      "Cross-Stack Feature Ownership: Delivered complex features across backend (Spring Boot/.NET), database, and frontend layers within FEMA preparedness platforms (PrepToolkit, OneResponder, RTLT, IRIS), ensuring cohesive integration between APIs, data models, and user interfaces.",
      "System Architecture & Presence: Spearheaded the implementation of a real-time presence tracking system for the Unified Reporting Tool (URT); independently designed and optimized distributed session logic (polling/timeouts) to ensure data integrity for concurrent federal users.",
      "Serverless Portal Ownership: Replaced legacy GWT portlets with a standalone serverless AWS application (S3/CloudFront hosted Svelte frontend) serving as a unified access portal for FEMA preparedness platforms (PrepToolkit, OneResponder, RTLT, IRIS), organizing the component hierarchy (containers, forms, cards) and structuring the provider layer per application to keep each platform's data context cleanly separated.",
      "Development Workflow Improvements: Leveraged containerized development environments (Docker/Podman) and Flyway-based database migrations to improve consistency across environments and reduce configuration drift. Regularly conduct peer code reviews to reinforce clean architecture and maintainable code practices.",
      "Stakeholder Alignment: Translate complex FEMA business requirements (THIRA/SPR, CPG, NIMS, UAWG) into scalable technical solutions, coordinating closely with project leads to ensure all features align with federal compliance and security standards.",
      "Operational Excellence: Automated enterprise reporting workflows (Docmosis/Apache POI), reducing processing time from hours to minutes and directly improving operational efficiency for national exercise programs."
    ],
    techStack: "Java, Spring Boot, Gradle, GWT, MySQL, Liferay 7, Apache HTTP Server, JavaScript/TypeScript, Svelte, React, Node.js, npm, AWS Lambda, Git, Podman, Docmosis, OpenCSV, Apache POI"
  },
  {
    jobTitle: "Applications Developer",
    company: "United Parcel Service (UPS)",
    location: "Louisville, KY",
    startDate: "March 2017",
    endDate: "March 2019",
    description: [
      "Mission-Critical Reliability: Engineered backend logic and UI features for real-time transportation visibility systems, ensuring operational uptime in a 24/7 high-throughput production environment.",
      "Business Logic Abstraction: Architected complex decision-making flows by translating high-level business requirements into discrete rules for the Drools inference engine (BRMS), reducing manual intervention and decoupling policy from code.",
      "Performance Engineering: Conducted deep-dive bottleneck analysis and performance tuning (JMeter), identifying and resolving critical latency issues under peak traffic conditions."
    ],
    techStack: "Java, Spring Framework, Maven/Gradle, Drools (BRMS), JMeter, Roadrunner, WebLogic, ActiveMQ, SQL Server, TFVC"
  },
  {
    jobTitle: "Software Developer",
    company: "Apax Software",
    location: "Lexington, KY",
    startDate: "March 2016",
    endDate: "March 2017",
    description: [
      "Technical Consultation: Partnered directly with stakeholders (Presbyterian Church (USA), University of Kentucky) to translate vague business needs into production-ready technical specifications and RESTful architectures.",
      "Modular Architecture: Designed reusable backend components and modular UI features, significantly accelerating release cycles and ensuring scalable feature expansion across multiple client projects.",
      "Security & Governance: Implemented robust server-side validation, authentication, and role-based access control (RBAC) for sensitive event registration and CMS workflows."
    ],
    techStack: "Python, Django, JavaScript (AngularJS, jQuery), PostgreSQL, Bootstrap, AWS, Git, PHP, Drupal"
  },
  {
    jobTitle: "Programming Analyst",
    company: "Knowledge Facilitations Group (KFG)",
    location: "Richmond, KY",
    startDate: "March 2015",
    endDate: "March 2016",
    description: [
      "Data Pipeline Engineering: Developed Python-based transformation engines to validate and map disparate industry standards (X12, EDIFACT, XML, JSON), ensuring seamless data exchange across the EDITRACE platform.",
      "Operational Observability: Built real-time monitoring dashboards that provided immediate insight into automated data pipelines, reducing troubleshooting time for critical EDI processes."
    ],
    techStack: "Python, EDI (X12, XML, EDIFACT, Tradacoms, JSON, IDoc), Bootstrap, Git"
  }
];

const calculateDuration: (start: string, end: string) => string = (start: string, end: string): string => {
  const [startMonthStr, startYearStr]: [string, string] = start.split(" ") as [string, string];
  const [endMonthStr, endYearStr]: [string, string] =
    end === "Present"
      ? [new Date().toLocaleString("default", { month: "long" }), new Date().getFullYear().toString()]
      : (end.split(" ") as [string, string]);

  const startMonth: number = months.indexOf(startMonthStr);
  const endMonth: number = months.indexOf(endMonthStr);

  const startYear: number = parseInt(startYearStr, 10);
  const endYear: number = parseInt(endYearStr, 10);

  let totalMonths: number = (endYear - startYear) * 12 + (endMonth - startMonth);

  if (end === "Present") {
    totalMonths += 1; // Include current month
  }

  if (totalMonths < 12) {
    return totalMonths === 1 ? "1 month" : `${totalMonths} months`;
  } else {
    const years: number = Math.floor(totalMonths / 12);
    const monthsRemainder: number = totalMonths % 12;
    if (monthsRemainder === 0) {
      return years === 1 ? "1 year" : `${years} years`;
    } else {
      return `${years} year${years > 1 ? "s" : ""} ${monthsRemainder} month${monthsRemainder > 1 ? "s" : ""}`;
    }
  }
};

const WorkExperience: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle: (index: number) => void = (index: number): void => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="container text-center">
      <FadeInSection>
        <h2 className="mb-4">Work Experience</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {experiences.map((exp: Experience, index: number) => (
              <Card
                key={index}
                expandable
                expanded={expanded === index}
                onToggle={() => handleToggle(index)}
                className="mb-3"
                showBottomToggle
                title={
                  <div>
                    <div className="card-entry-title">{exp.jobTitle}</div>
                    <div className="card-entry-organization">{exp.company}</div>
                    <div className="card-entry-location">{exp.location}</div>
                    <div className="card-entry-dates">
                      {exp.startDate} - {exp.endDate} {' '} ({calculateDuration(exp.startDate, exp.endDate)})
                    </div>
                  </div>
                }
              >
                {expanded === index && (
                  <>
                    <ul className="work-experience-list">
                      {exp.description.map((point: string, i: number) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <p className="work-experience-tech">
                      <strong>Tech Stack:</strong> {exp.techStack}
                    </p>
                  </>
                )}
              </Card>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default WorkExperience;
