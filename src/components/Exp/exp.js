import React from 'react';
import './exp.css';

const Experience = () => {
  const experiences = [

    {
      company: "Fintech Global",
      role: "App. Support & Maintenance Analyst (Contract)",
      location: "Gandhinagar, Gujarat, India",
      duration: "August 2025 - Nov 2025"
    },
    {
      company: "KraftHeinz GCC",
      role: " Data & Automation Developer",
      location: "Ahmedabad, Gujarat, India",
      duration: "January 2025 - August 2025"
    },
    {
      company: "Fristine Infotech",
      role: "CRM Dev",
      location: "Remote",
      duration: "October 2024 - December 2024"
    },
    {
      company: "Hilti Technological Solutions Ltd",
      role: "Engineering Intern",
      location: "Pune, MH, India",
      duration: "June 2024 - August 2024"
    }
  ];

  return (
    <section id="experience">
      <span className="expTitle">Experience</span>
      
      <div className="timeline">
        <div className="verticalLine"></div>

        {experiences.map((exp, index) => (
          <div className="timelineItem" key={index}>
            <div className="timelineDate">
              {exp.duration}
            </div>

            <div className="timelineDot"></div>

            <div className="timelineContent">
              <h3>{exp.company}</h3>
              <p className="role">{exp.role}</p>
              <p className="location">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;