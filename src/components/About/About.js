import React from 'react';
import './About.css';
import Software from '../../assets/software.png';
import Coding from '../../assets/coding.png';
import Automation from '../../assets/automation.png';
import Data from '../../assets/data.png';
import Framework from '../../assets/framework.png';
import Tools from '../../assets/tools.png';
import bs from '../../assets/bachelors2.png';
import ms from '../../assets/master2.png'

const About = () => {
  return (
    <section id='skills'>
      <div className="skillHeader">
        <span className="skillSubtitle">CREATE</span>
        <h1 className="skillTitle">Skills & Technologies</h1>
        <p className="skillDescription">
          A versatile skill set combining computer science fundamentals with modern full-stack execution.
        </p>
      </div>

      {/* Grid Container for Skills */}
      <div className="skillCardsContainer">
        <div className="skillCard">
          <img src={Software} alt="software" className="skillCardIcon" />
          <h2>Data Analytics & Visualisation</h2>
          <p>Power BI, Tableau, Pandas, NumPy, Matplotlib</p>
        </div>

        <div className="skillCard">
          <img src={Coding} alt="coding" className="skillCardIcon" />
          <h2>Programming</h2>
          <p>Python, SQL, Java (Basic)</p>
        </div>

        <div className="skillCard">
          <img src={Automation} alt="Automation" className="skillCardIcon" />
          <h2>Soft Skills</h2>
          <p> Analytical Thinking, Problem Solving, Communication, Critical Thinking, Attention to Detail, Time Management, Stakeholder Collaboration</p>
        </div>

        <div className="skillCard">
          <img src={Data} alt="Data" className="skillCardIcon" />
          <h2>AI & ML</h2>
          <p>TensorFlow, Scikit-Learn, Predictive Analytics, Anomaly Detection</p>
        </div>

        <div className="skillCard">
          <img src={Framework} alt="Framework" className="skillCardIcon" />
          <h2>Web & APIs</h2>
          <p>FastAPI, REST APIs, HTML, CSS, JavaScript, TypeScript</p>
        </div>

        <div className="skillCard">
          <img src={Tools} alt="Tools" className="skillCardIcon" />
          <h2>OS&Tools</h2>
          <p>Windows, Linux, Git, Jira, ServiceNow, Confluence, Technical Documentation</p>
        </div>
      </div>

<div className="educationSection">
  <h1 className="EducationTitle">Education</h1>

  {/* MS Degree */}
  <div className="Edubar">
    <img src={ms} alt="masters" className="Edubarbs" />
    <div className="EdubarText">
      <a
        href="https://www.google.com/search?q=Monash University+Australia"
        target="_blank"
        rel="noreferrer"
        className="eduLink"
      >
        <h2>Monash University,Clayton Campus,VIC,AUS</h2>
      </a>
      <p>MS in Data Science (2026–2027)</p>
    </div>
  </div>

  {/* B.Tech Degree */}
  <div className="Edubar">
    <img src={bs} alt="bachelors" className="Edubarbs" />
    <div className="EdubarText">
      <a
        href="https://www.google.com/search?q=SVNIT+Surat"
        target="_blank"
        rel="noreferrer"
        className="eduLink"
      >
        <h2>SVNIT, Surat, India</h2>
      </a>
      <p>B.Tech Computer Science and Engineering (2021–2025)</p>
    </div>
  </div>
</div>

    </section>
  );
};

export default About;