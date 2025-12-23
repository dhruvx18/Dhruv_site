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
          <img src={Project1} alt="RedRoute" className="ProjectImg" />
          <div className="ProjectContent">
            <div className="ProjectHeader">
              <h3>RedRoute</h3>
              <span className="ProjectDate">Sept'25 - Present</span>
            </div>
            <div className="ProjectLinks">
              <button className="LinkBtn">Demo</button>
              <button className="LinkBtn">Code</button>
            </div>
            <p>Motion-rich travel booking app to discover and book stays and experiences. Cinematic UI with accessible search.</p>
            <div className="TechTags">
              <span>React (TS)</span> <span>Vite</span> <span>Framer Motion</span> <span>Tailwind CSS</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="ProjectCard">
          <img src={Project2} alt="FlickPick" className="ProjectImg" />
          <div className="ProjectContent">
            <div className="ProjectHeader">
              <h3>FlickPick</h3>
              <span className="ProjectDate">Aug'25 - Sept'25</span>
            </div>
            <div className="ProjectLinks">
              <button className="LinkBtn">Demo</button>
              <button className="LinkBtn">Code</button>
            </div>
            <p>Movie discovery and streaming interface with favorites, search, and trending sections. TMDB API integration.</p>
            <div className="TechTags">
              <span>React</span> <span>Vite</span> <span>React Router</span> <span>TMDB API</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="ProjectCard">
          <img src={Project3} alt="Storify" className="ProjectImg" />
          <div className="ProjectContent">
            <div className="ProjectHeader">
              <h3>Storify</h3>
              <span className="ProjectDate">Jan'24 - May'24</span>
            </div>
            <div className="ProjectLinks">
              <button className="LinkBtn">Code</button>
            </div>
            <p>A website that uses machine learning to suggest music for social media stories, integrating with Spotify.</p>
            <div className="TechTags">
              <span>Python</span> <span>Scikit-learn</span> <span>React</span> <span>Spotify API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;