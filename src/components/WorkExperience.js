import React from 'react';

const WorkExperience = () => {
  const experiences = [
    {
      jobTitle: "Mid-level Software Developer",
      company: "4 Arrows Consulting Inc.",
      startDate: "March 2019",
      endDate: "Present",
        description: 
            "In 2019, Mr. Smith accepted a position as a Software Engineer. " +
            "Completed work for PrepToolkit Unified Reporting Tool (URT), REP Exercises, and HSEEP Exercises. " +
            "Participates in code design, review, and architecture efforts for assigned systems. " +
            "Utilizes code repositories, CM controls, and other engineering processes. " +
            "Performs unit testing and system-level analysis/testing when required. " +
            "Conducts requirements, defect, and enhancement analysis, including proposed solutions and effort estimates. " +
            "Skills/Tools used: Java/Spring Framework, Apache HTTP Server, Google Web Toolkit, Liferay7, MySQL."
    },
    {
        jobTitle: "Applications Developer",
        company: "Previous Company Name",
        startDate: "March 2017",
        endDate: "March 2019",
        description: 
            "Applications Developer on a team maintaining an application for ground transportation logistics. " +
            "Supported full systems life cycle management (analyses, technical requirements, design, coding, testing, implementation). " +
            "Collaborated with teams for effective communication and achievement of objectives. " +
            "Provided development, maintenance, and support for applications. " +
            "Skills/Tools used: Java/Spring Framework, SQL Server 2016, stress testing with Apache JMeter, HP Roadrunner, WebLogic, ActiveMQ, TFVC, Git."
    },
    {
        jobTitle: "Software Developer",
        company: "Apax Software",
        startDate: "March 2016",
        endDate: "March 2017",
        description: 
            "Notable Django projects for Apax’s biggest client: Presbyterian Church (U.S.A). " +
            "Included custom-built tools: CMS tool, event registration system, nominations handling system, online survey system. " +
            "Involved in the software development lifecycle of Fit Fac-Off, a mobile web app for the University of Kentucky’s College of Public Health. " +
            "Developed and executed on client projects, managing multiple tasks simultaneously. " +
            "Used repository systems and GitHub Flow for deployment. " +
            "Skills used: Python/Django, JavaScript/AngularJS/jQuery, Bootstrap, SQL, Git, PHP, Drupal, WordPress, AWS."
    },
    {
        jobTitle: "Programming Analyst",
        company: "Knowledge Facilitations Group (KFG), Richmond KY",
        startDate: "March 2015",
        endDate: "March 2016",
        description: 
            "Team member on KFG’s Electronic Data Interchange (EDI) platform known as EDITRACE. " +
            "Created backend Python components for Translations, Validations, and Mapping Engine. " +
            "Handled data in various formats, including XML, X12, Editfact, CSV, Excel, Tradacoms, JSON, and IDOC. " +
            "Analyzed the EDI process in real-time production environments with other developers to discover and fix transaction errors. " +
            "Implemented a web-based console that allows users to inspect any aspect of the EDI process."
    }
]
;

const calculateDuration = (start, end) => {
  const startYear = parseInt(start.split(" ")[1]);
  const endYear = end === "Present" ? new Date().getFullYear() : parseInt(end.split(" ")[1]);
  return endYear - startYear;
};

return (
  <section>
    <h2>Work Experience</h2>
    <ul>
      {experiences.map((experience, index) => (
        <li key={index}>
          <h3>{experience.jobTitle} at {experience.company}</h3>
          <p>{experience.startDate} - {experience.endDate} ({calculateDuration(experience.startDate, experience.endDate)} years)</p>
          <p>{experience.description}</p>
        </li>
      ))}
    </ul>
  </section>
);
};

export default WorkExperience;
