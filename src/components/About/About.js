import React from 'react';
import './About.css';
import Software from '../../assets/software.png';
import Coding from '../../assets/coding.png';
import Automation from '../../assets/automation.png';
import Data from '../../assets/data.png';
import Framework from '../../assets/framework.png';
import Tools from '../../assets/tools.png';
import bs from '../../assets/bachelors2.png';

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
          <h2>CS Fundamentals</h2>
          <p>Programming Basics, Data Structures, Algorithms, OS, and Networking.</p>
        </div>

        <div className="skillCard">
          <img src={Coding} alt="coding" className="skillCardIcon" />
          <h2>Languages</h2>
          <p>Python, JavaScript, and C++ for robust logic and application building.</p>
        </div>

        <div className="skillCard">
          <img src={Automation} alt="Automation" className="skillCardIcon" />
          <h2>Automation & CRM</h2>
          <p>Expertise in Automation Anywhere, VBA, and PowerBI for business efficiency.</p>
        </div>

        <div className="skillCard">
          <img src={Data} alt="Data" className="skillCardIcon" />
          <h2>Data & ML</h2>
          <p>Managing large scale data with SQL, Databricks, and Snowflake.</p>
        </div>

        <div className="skillCard">
          <img src={Framework} alt="Framework" className="skillCardIcon" />
          <h2>Frameworks</h2>
          <p>Building modern interfaces and backends with React and Node.js.</p>
        </div>

        <div className="skillCard">
          <img src={Tools} alt="Tools" className="skillCardIcon" />
          <h2>Tools</h2>
          <p>Version control and deployment using Git, Github, and Azure.</p>
        </div>
      </div>

      <div className="educationSection">
        <h1 className="EducationTitle">Education</h1>
        <div className="Edubar">
          <img src={bs} alt="bachelors" className="Edubarbs" />
          <div className="EdubarText">
            <a href="https://www.google.com/search?q=SVNIT+Surat" target="_blank" rel="noreferrer" className="eduLink">
              <h2>SVNIT, Surat, India</h2>
            </a>
            <p>B.Tech Computer Science and Engineering (2021-2025)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;