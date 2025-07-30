import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionSectionProps {
  header: string;
  body: React.ReactNode;
  id: string;
  expanded: boolean;
  onChange: (panel: string) => void;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  header,
  body,
  id,
  expanded,
  onChange,
}) => (
  <Accordion expanded={expanded} onChange={() => onChange(id)}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="subtitle1">{header}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      {body}
    </AccordionDetails>
  </Accordion>
);

export default AccordionSection;