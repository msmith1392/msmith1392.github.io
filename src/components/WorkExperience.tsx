import { Box, Typography, Container } from '@mui/material';
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
      "Delivered features across multiple FEMA PrepToolkit modules, including Unified Reporting Tool (URT), Radiological Emergency Preparedness Program (REPP) Exercises, and Homeland Security Exercise and Evaluation Program (HSEEP) tools used by local, regional, federal, and private partners.",
      "Led annual updates to URT assessment systems, aligning with fiscal year requirements.",
      "Modernized legacy apps during the transition from max.gov to PrepToolkit, including Threat and Hazard Identification and Risk Assessment (THIRA), Comprehensive Preparedness Guide (CPG), National Incident Management System (NIMS), and Urban Area Working Group (UAWG).",
      "Collaborated on architectural decisions and led code reviews across both legacy GWT modules and modern Svelte-based services, ensuring technical consistency and maintainability across the stack.",
      "Supported containerized Java microservices built with Quarkus and deployed via Podman.",
      "Provided mentorship to junior developers by demonstrating established code quality standards, reviewing PRs, and supporting architectural understanding across legacy and modern codebases."
    ],
    techStack: "Java, Spring Boot, Gradle, Quarkus, Google Web Toolkit (GWT), MySQL, Liferay 7, Apache HTTP Server, JavaScript/TypeScript, Svelte, Node.js, npm, AWS Lambda, Git"
  },
  {
    jobTitle: "Applications Developer",
    company: "United Parcel Service (UPS)",
    location: "Louisville, KY",
    startDate: "March 2017",
    endDate: "March 2019",
    description: [
      "Maintained and enhanced enterprise logistics systems used across UPS ground operations.",
      "Developed UI features and backend logic for a real-time transportation visibility and logistics system.",
      "Collaborated across teams to implement and test new features from requirements through deployment.",
      "Translated requirements into discrete rules for the Drools inference engine, streamlining complex logic processing.",
      "Conducted performance tuning initiatives using JMeter and Roadrunner to optimize logistics workflows. Identified and resolved bottlenecks in real-time transportation tracking systems.",
      "Delivered features on a three-week agile sprint cycle.",
      "Provided 24/7 production support, ensuring minimal downtime and rapid issue resolution, contributing to overall system reliability."
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
      "Managed multiple client projects simultaneously using GitHub Flow for efficient deployment and version control.",
      "Delivered Python/Django and AngularJS web applications for clients including Presbyterian Church (USA) and University of Kentucky, boosting user engagement.",
      "Developed CMS tools, event registration systems, and wellness apps, improving client workflows.",
      "Heavily involved in the full software development lifecycle of a project for University of Kentucky's College of Public Health, including a mobile web app (Fit Face-Off), and interactive wellness tool for team and individual fitness challenges."
    ],
    techStack: "Python, Django, JavaScript (AngularJS, jQuery), Bootstrap, SQL, AWS, Git, PHP, Drupal, WordPress"
  },
  {
    jobTitle: "Programming Analyst",
    company: "Knowledge Facilitations Group (KFG)",
    location: "Richmond, KY",
    startDate: "March 2015",
    endDate: "March 2016",
    description: [
      "Contributed to KFG's Electronic Data Interchange (EDI) platform, EDITRACE, by developing backend Python components for its translation, validation, and mapping engine in close collaboration with the Business Analyst and broader development team.",
      "Built tools to process and validate data in a variety of formats, including XML, X12, EDIFACT, CSV, Excel, Tradacom, JSON, and IDoc, and assisted with managing data flow to and from databases.",
      "Analyzed EDI processes in real-time production environments with other developers to identify and resolve transaction errors.",
      "Implemented a web-based console for users to inspect and analyze any aspect of the EDI process in real time."
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

  const handleToggle = (index: number): void => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <FadeInSection>
        <Typography variant="h4" align="center" gutterBottom>
          Work Experience
        </Typography>
        {experiences.map((exp, index) => (
          <Box key={index} mb={3}>
            <Card
              expandable
              expanded={expanded === index}
              onToggle={() => handleToggle(index)}
              showBottomToggle
              title={
                <Box>
                  <Typography variant="h6" className="card-entry-title">{exp.jobTitle}</Typography>
                  <Typography className="card-entry-organization">{exp.company}</Typography>
                  <Typography className="card-entry-location">{exp.location}</Typography>
                  <Typography className="card-entry-dates">
                    {exp.startDate} - {exp.endDate} ({calculateDuration(exp.startDate, exp.endDate)})
                  </Typography>
                </Box>
              }
            >
              {expanded === index && (
                <>
                  <ul className="work-experience-list">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <Typography className="work-experience-tech" sx={{ mt: 2 }}>
                    <strong>Tech Stack:</strong> {exp.techStack}
                  </Typography>
                </>
              )}
            </Card>
          </Box>
        ))}
      </FadeInSection>
    </Container>
  );
};

export default WorkExperience;