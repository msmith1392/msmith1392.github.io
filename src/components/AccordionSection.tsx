import React from "react";

interface AccordionSectionProps {
  header: string;
  body: React.ReactNode;
  id: string;
  parentId: string;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ header, body, id, parentId }) => (
  <div className="accordion-item">
    <h2 className="accordion-header" id={`heading${id}`}>
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse${id}`}
        aria-expanded="false"
        aria-controls={`collapse${id}`}
      >
        {header}
      </button>
    </h2>
    <div
      id={`collapse${id}`}
      className="accordion-collapse collapse"
      aria-labelledby={`heading${id}`}
      data-bs-parent={`#${parentId}`}
    >
      <div className="accordion-body">{body}</div>
    </div>
  </div>
);

export default AccordionSection;
