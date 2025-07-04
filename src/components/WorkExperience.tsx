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
      company: "4 Arrows Consulting, Inc. (FEMA Contract - PrepToolkit)",
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
        "Managed multiple projects and client requests simultaneously, using GitHub Flow for deployment and version control.",
        "Developed web applications for clients including Presbyterian Church (USA) and University of Kentucky's College of Public Health.",
        "Built custom CMS tools, event registration systems, nomination management, and online surveys for Presbyterian Church (USA) using Python/Django and AngularJS.",
        "Heavily involved in the full software development lifecycle of a project for University of Kentucky's College of Public Health, including a mobile web app (Fit Face-Off), an interactive wellness tool for team and individual fitness challenges.",
      ],
      techStack: "Python, Django, JavaScript (AngularJS, jQuery), Bootstrap, SQL, Git, PHP, Drupal, WordPress, AWS"
    },
    {
      jobTitle: "Programming Analyst",
      company: "Knowledge Facilitations Group (KFG)",
      location: "Richmond, KY",
      startDate: "March 2015",
      endDate: "March 2016",
      description: [
        "Worked with teammates on KFG's Electronic Data Interchange (EDI) platform, EDITRACE.",
        "Developed backend Python components for EDITRACE's translation, validation, and mapping engine, collaborating closely with the Business Analyst.",
        "Built tools to process and validate data in a variety of formats, including XML, X12, EDIFACT, CSV, Excel, Tradacom, JSON, and IDoc, and assisted with managing data flow to and from databases.",
        "Analyzed EDI processes in real-time production environments with other developers to identify and resolve transaction errors.",
        "Implemented a web-based console for users to inspect and analyze any aspect of the EDI process in real time."
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
        <h2 className="mb-4">Work Experience</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {experiences.map((exp: Experience, index: number) => (
              <div key={index} className="work-experience-card">
                <div className="card-body">
                  <h4 className="work-experience-title">
                    {exp.jobTitle} <span className="work-experience-company">— {exp.company}</span>
                  </h4>
                  <h6 className="work-experience-location">{exp.location}</h6>
                  <p className="work-experience-dates">
                    <strong>{exp.startDate} - {exp.endDate}</strong> <span className="text-muted">({calculateDuration(exp.startDate, exp.endDate)})</span>
                  </p>
                  <ul className="work-experience-list">
                    {exp.description.map((point: string, i: number) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <p className="work-experience-tech"><strong>Tech Stack:</strong> {exp.techStack}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default WorkExperience;
