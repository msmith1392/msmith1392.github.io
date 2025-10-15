import React, { useState } from "react";
import Card from "./Card";
import FadeInSection from "./FadeInSection";

type EducationEntry = {
  degree: string;
  school: string;
  location: string;
  year: string;
  projectsAndHonors?: string[];
}

const educationData: EducationEntry[] = [
  {
    degree: "B.S. in Computer Science",
    school: "Eastern Kentucky University",
    location: "Richmond, KY",
    year: "2015",
    projectsAndHonors: [
      "Developed a ticket management system for a fictional movie theater using HTML, JavaScript, CSS, PHP, and SQL, delivering end-to-end functionality with thorough documentation.",
      "Designed and implemented an inventory management system enabling full CRUD operations on a product catalog for Amazon marketplace integration.",
      "Built a content management system for EKU's Department of Computer Science using Apache, PHP, and MySQL, including detailed requirements and design specification reports to support ongoing departmental use.",
      "Inducted into Upsilon Pi Epsilon, the international honor society for the computing and information disciplines."
    ]
  }
];

const Education: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle: (index: number) => void = (index: number): void => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="container text-center">
      <FadeInSection>
        <h2 className="mb-4">Education</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {educationData.map((edu, idx) => (
              <Card
                key={idx}
                expandable
                expanded={expanded === idx}
                onToggle={() => handleToggle(idx)}
                className="mb-3"
                showBottomToggle
                title={
                  <div>
                    <div className="card-entry-title">{edu.degree}</div>
                    <div className="card-entry-organization">{edu.school}</div>
                    <div className="card-entry-location">{edu.location}</div>
                    <div className="card-entry-dates">{edu.year}</div>
                  </div>
                }
              >
                {expanded === idx && edu.projectsAndHonors && edu.projectsAndHonors.length > 0 && (
                  <ul className="work-experience-list">
                    {edu.projectsAndHonors.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Education;
