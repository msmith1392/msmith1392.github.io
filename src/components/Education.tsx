import React from "react";
import Card from "./Card";
import FadeInSection from "./FadeInSection";

const Education: React.FC = () => (
  <section className="container text-center">
    <FadeInSection>
      <h2>Education</h2>
      <Card>
        <div>
          <strong>Eastern Kentucky University</strong><br />
          <span>Richmond, KY</span><br />
          <span>B.S. in Computer Science, 2015</span>
        </div>
      </Card>
    </FadeInSection>
  </section>
);

export default Education;
