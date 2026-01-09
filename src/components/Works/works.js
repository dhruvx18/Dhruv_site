import React from 'react';
import '../Works/works.css';
import Project1 from '../../assets/portfolio-1.png'; 
import Project2 from '../../assets/portfolio-2.png';
import Project3 from '../../assets/portfolio-3.png';

const Works = () => {
  return (
    <section id="works">
      <span className="worksTitle">Featured Projects</span>
      <span className="worksDesc">
        A collection of projects showcasing my skills in full-stack development, machine learning, and user experience design.
      </span>

      <div className="ProjectList">
        {/* Card 1 */}
        <div className="ProjectCard">
            <div className="ProjectImgPlaceholder">Coming Soon</div>
            <div className="ProjectContent">
              <div className="ProjectHeader">
                <h3>Project 01</h3>
              </div>
              <p className="updatingText">Content yet to be uploaded.</p>
              <div className="ProjectLinks">
                <button className="LinkBtn working" disabled>Under Process</button>
              </div>
            </div>
      </div>

{/* Card 2 */}
  <div className="ProjectCard">
    <div className="ProjectImgPlaceholder">Coming Soon</div>
    <div className="ProjectContent">
      <div className="ProjectHeader">
        <h3>Project 02</h3>
      </div>
      <p className="updatingText">Content yet to be uploaded.</p>
      <div className="ProjectLinks">
        <button className="LinkBtn working" disabled>Under Process</button>
      </div>
    </div>
  </div>

        {/* Card 3 */}
          <div className="ProjectCard">
            <div className="ProjectImgPlaceholder">Coming Soon</div>
            <div className="ProjectContent">
              <div className="ProjectHeader">
                <h3>Project 03</h3>
              </div>
              <p className="updatingText">Content yet to be uploaded.</p>
              <div className="ProjectLinks">
                <button className="LinkBtn working" disabled>Under Process</button>
              </div>
            </div>
          </div>
        </div>

      
    </section>
  );
};

export default Works;