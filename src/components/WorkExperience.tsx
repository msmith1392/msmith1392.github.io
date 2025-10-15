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
    jobTitle: "Software Engineer",
    company: "4 Arrows Consulting, Inc.",
    location: "Remote / Somerset, KY",
    startDate: "March 2019",
    endDate: "Present",
    description: [
      "Delivered core modules of the Preparedness Toolkit (PrepToolkit), including URT, REPP, and HSEEP, used by federal, state, and private partners to track and assess preparedness.",
      "Enhanced URT reporting across THIRA, CPG, NIMS, and UAWG frameworks, aligning outputs with FEMA’s evolving compliance and fiscal-year requirements.",
      "Designed and implemented Spring-based REST APIs integrated with Liferay 7.2 portlets and GWT front-end components, following layered architecture principles (Data → Service → API → Presentation) for scalability and maintainability.",
      "Modernized legacy GWT/Liferay portlets into Svelte and REST-driven micro frontends, reducing maintenance overhead and improving frontend performance.",
      "Supported backend modernization with Spring Boot microservices, containerized via Podman, integrated with MySQL, and managed via Flyway migrations.",
      "Delivered automated document and data exports using Docmosis, OpenCSV, and Apache POI, streamlining FEMA reporting and compliance workflows.",
      "Led peer code reviews and mentored junior developers, improving overall code quality and team technical proficiency.",
      "Integrated Spring Web Security with Liferay's role-based permissions, ensuring secure access control across legacy and modern systems."
    ],
    techStack: "Java, Spring Boot, Gradle, Quarkus, Google Web Toolkit (GWT), MySQL, Flyway, Liferay 7, Apache HTTP Server, JavaScript/TypeScript, Svelte, Node.js, npm, AWS Lambda, Git, Podman"
  },
  {
    jobTitle: "Applications Developer",
    company: "United Parcel Service (UPS)",
    location: "Louisville, KY",
    startDate: "March 2017",
    endDate: "March 2019",
    description: [
      "Maintained and enhanced enterprise logistics systems, improving reliability and operational efficiency across UPS ground operations.",
      "Developed UI features and backend logic for a real-time transportation visibility platform, enabling faster decision-making.",
      "Translated requirements into Drools rules, streamlining complex business logic processing and reducing manual intervention.",
      "Conducted performance tuning with JMeter and Roadrunner, resolving bottlenecks and ensuring mission-critical system uptime.",
      "Delivered features in three-week agile sprints and provided 24/7 production support, minimizing downtime."
    ],
    techStack: "Java, Spring Framework, Maven/Gradle, Drools (BRMS), WebLogic, ActiveMQ, SQL Server, TFVC"
  },
  {
    jobTitle: "Software Developer",
    company: "Apax Software",
    location: "Lexington, KY",
    startDate: "March 2016",
    endDate: "March 2017",
    description: [
      "Delivered Python/Django and AngularJS web applications for clients including Presbyterian Church (USA) and University of Kentucky, improving user engagement.",
      "Developed CMS tools, event registration systems, and wellness apps, streamlining client workflows.",
      "Managed multiple client projects using GitHub Flow, ensuring timely delivery and version control consistency."
    ],
    techStack: "Python, Django, JavaScript (AngularJS, jQuery), Bootstrap, AWS, Git, PHP, Drupal"
  },
  {
    jobTitle: "Programming Analyst",
    company: "Knowledge Facilitations Group (KFG)",
    location: "Richmond, KY",
    startDate: "March 2015",
    endDate: "March 2016",
    description: [
      "Developed Python components for EDITRACE, KFG's EDI platform, enhancing translation, validation, and mapping functionality.",
      "Built tools to process and validate data in multiple formats (XML, X12, EDIFACT, CSV, Excel, Tradacom, JSON, IDoc), improving data quality and workflow efficiency.",
      "Implemented a web-based console for real-time analysis of the EDI process, reducing troubleshooting time and improving end-user insight."
    ],
    techStack: "Python, EDI (X12, XML, EDIFACT, Tradacoms, JSON, IDOC), Bootstrap, Git"
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
