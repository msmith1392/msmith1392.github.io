import React from 'react';
import FadeInSection from './FadeInSection';

type Experience = {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  techStack: string;
};

const WorkExperience: React.FC = () => {
  const experiences: Experience[] = [
    {
      jobTitle: "Software Engineer",
      company: "4 Arrows Consulting (FEMA Contract - PrepToolkit)",
      location: "Remote / Somerset, KY",
      startDate: "March 2019",
      endDate: "Present",
      description: [
        "Contributed to multiple modules of FEMA's PrepToolkit, including the Unified Reporting Tool (URT), " +
        "Radiological Emergency Preparedness Program (REPP) Exercises, and supporting local, regional, federal, " +
        "and private sector partners with Homeland Security Exercise and Evaluation Program (HSEEP) Exercises.",
        "Led enhancements and updates to URT assessment systems for each fiscal year cycle.",
        "Supported the migration of legacy components from max.gov to PrepToolkit. These components are: " +
        "Threat and Hazard Identification and Risk Assessment (THIRA), Comprehensive Preparedness Guide (CPG), " +
        "National Incident Management System (NIMS), and Urban Area Working Group (UAWG)",
        "Participated in architecture discussions, code reviews, and estimation for both GWT-based and serverless/Svelte modules.",
        "Supported containerized Java microservices built with Quarkus, deployed using Podman.",
        "Maintained high code quality using version control, CM tools, and test-driven practices.",
        "Mentored junior developers, providing guidance on code quality, troubleshooting, and best practices across both legacy " +
        "and modern stacks, as well as assisting with their understanding of architectural patterns across project modules."
      ],
      techStack: "Java, Spring Boot, Quarkus, Google Web Toolkit (GWT), MySQL, Liferay 7, Apache HTTP Server, JavaScript/TypeScript, Svelte, AWS Lambda, Git"
    },
    {
      jobTitle: "Applications Developer",
      company: "United Parcel Service (UPS)",
      location: "Louisville, KY",
      startDate: "March 2017",
      endDate: "March 2019",
      description: [
        "Maintained and enhanced enterprise logistics systems used across UPS ground operations.",
        "Developed UI features for a real-time transportation visibility system.",
        "Collaborated across teams to implement and test new features from requirements through deployment.",
        "Translated requirements into discrete rules for the Drools inference engine to process.",
        "Conducted system performance testing using Apache JMeter and HP Roadrunner.",
        "Delivered features on a three-week agile sprint cycle.",
        "Provided 24/7 production support (on rotation with the rest of the team members)."
      ],
      techStack: "Java, Spring Framework, Drools (BRMS), WebLogic, ActiveMQ, SQL Server, TFVC"
    },
    {
      jobTitle: "Software Developer",
      company: "Apax Software",
      location: "Lexington, KY",
      startDate: "March 2016",
      endDate: "March 2017",
      description: [
        "Developed web applications for clients including Presbyterian Church (USA) and University of Kentucky’s College of Public Health.",
        "Built custom CMS tools, event registration systems, and online surveys using Python/Django and AngularJS.",
        "Participated in full development lifecycle from planning to deployment."
      ],
      techStack: "Python, Django, JavaScript (AngularJS, jQuery), Bootstrap, AWS, GitHub, PHP, Drupal"
    },
    {
      jobTitle: "Programming Analyst",
      company: "Knowledge Facilitations Group (KFG)",
      location: "Richmond, KY",
      startDate: "March 2015",
      endDate: "March 2016",
      description: [
        "Developed backend components for an EDI platform (EDITRACE) using Python.",
        "Built translation/validation tools to process data in XML, JSON, IDOC, X12, CSV, and other formats.",
        "Created a web console for real-time transaction analysis."
      ],
      techStack: "Python, EDI (X12, XML, EDIFACT, Tradacoms, JSON, IDOC), Bootstrap, Git"
    }
  ];

  const calculateDuration = (start: string, end: string): string => {
    const startYear: number = parseInt(start.split(" ")[1], 10);
    const endYear: number = end === "Present" ? new Date().getFullYear() : parseInt(end.split(" ")[1], 10);
    const years: number = endYear - startYear;
    return years === 1 ? "1 year" : `${years} years`;
  };

  return (
    <section className="container text-center">
      <FadeInSection>
        <h2>Work Experience</h2>
        <ul className="list-unstyled text-left">
          {experiences.map((exp: Experience, index: number) => (
            <li key={index} className="mb-5">
              <h3>{exp.jobTitle} — {exp.company}</h3>
              <h5>{exp.location}</h5>
              <p className="mb-1">
                {exp.startDate} - {exp.endDate} ({calculateDuration(exp.startDate, exp.endDate)})
              </p>
              <ul>
                {exp.description.map((point: string, i: number) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p><strong>Tech Stack:</strong> {exp.techStack}</p>
            </li>
          ))}
        </ul>
      </FadeInSection>
    </section>
  );
};

export default WorkExperience;
