import React, { useState } from "react";
import Card from "./Card";
import FadeInSection from "./FadeInSection";
import { Box, Typography, Container } from "@mui/material";

type EducationEntry = {
  degree: string;
  school: string;
  location: string;
  year: string;
  projectsAndHonors?: string[];
};

const educationData: EducationEntry[] = [
  {
    degree: "B.S. in Computer Science",
    school: "Eastern Kentucky University",
    location: "Richmond, KY",
    year: "2015",
    projectsAndHonors: [
      "Developed a ticket management system for a fictional movie theater, implementing core features using HTML, JavaScript, CSS, PHP, and SQL. Delivered end-to-end functionality and thorough documentation.",
      "Designed and implemented an inventory management system enabling admins to perform full CRUD operations on a product catalog tailored for Amazon marketplace integration.",
      "Built a content management system for EKU's Department of Computer Science using Apache, PHP, and MySQL. Created detailed requirements and design specification reports to support ongoing departmental use.",
      "Inducted into Upsilon Pi Epsilon, the international honor society for the computing and information disciplines."
    ]
  }
];

const Education: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (index: number): void => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
      <FadeInSection>
        <Typography variant="h4" gutterBottom>Education</Typography>
        {educationData.map((edu, idx) => (
          <Box key={idx} mb={3}>
            <Card
              expandable
              expanded={expanded === idx}
              onToggle={() => handleToggle(idx)}
              showBottomToggle
              title={
                <Box>
                  <Typography variant="h6" className="card-entry-title">{edu.degree}</Typography>
                  <Typography className="card-entry-organization">{edu.school}</Typography>
                  <Typography className="card-entry-location">{edu.location}</Typography>
                  <Typography className="card-entry-dates">{edu.year}</Typography>
                </Box>
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
          </Box>
        ))}
      </FadeInSection>
    </Container>
  );
};

export default Education;