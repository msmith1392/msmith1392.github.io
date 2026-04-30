import React from 'react';
import FadeInSection from './FadeInSection';

type EducationEntry = {
  degree: string;
  school: string;
  location: string;
  year: string;
  projectsAndHonors?: string[];
};

const educationData: EducationEntry[] = [
  {
    degree: 'B.S. in Computer Science',
    school: 'Eastern Kentucky University',
    location: 'Richmond, KY',
    year: '2015',
    projectsAndHonors: [
      'Developed a ticket management system for a fictional movie theater using HTML, JavaScript, CSS, PHP, and SQL, delivering end-to-end functionality with thorough documentation.',
      'Designed and implemented an inventory management system enabling full CRUD operations on a product catalog for Amazon marketplace integration.',
      "Built a content management system for EKU's Department of Computer Science using Apache, PHP, and MySQL, including detailed requirements and design specification reports to support ongoing departmental use.",
      'Inducted into Upsilon Pi Epsilon, the international honor society for the computing and information disciplines.',
    ],
  },
];

const Education: React.FC = () => (
  <section id="education" className="bg-white py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <FadeInSection>
        {/* Section label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-3">
          Education
        </p>

        <h2 className="text-3xl font-bold text-navy mb-12">Education & honors</h2>

        {educationData.map((edu: EducationEntry, idx: number) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-5">
              <div>
                <h3 className="text-base font-semibold text-navy">{edu.degree}</h3>
                <p className="text-sm text-gray-700 mt-0.5">{edu.school}</p>
                <p className="text-sm text-gray-400 mt-0.5">{edu.location}</p>
              </div>
              <span className="text-sm text-gray-400 shrink-0">{edu.year}</span>
            </div>

            {/* Projects & honors */}
            {edu.projectsAndHonors && edu.projectsAndHonors.length > 0 && (
              <ul className="space-y-2">
                {edu.projectsAndHonors.map((item: string, i: number) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </FadeInSection>
    </div>
  </section>
);

export default Education;
