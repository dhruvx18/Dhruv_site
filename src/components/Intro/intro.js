import React from 'react';
import './intro.css';
import bg from "../../assets/image6.png";
import btnImg from "../../assets/download.png"
import videoBg from "../../assets/backgroundvideo.mp4";

import {Link} from 'react-scroll';

const Intro = () => {
  return (
    

    <section id="intro">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>
     
        <div className="introContent">
            <span className="hello">Hi, </span>
            <span className="introText">I am <span className="introName">Dhruv,</span><br></br>a Data Science</span>
            <p className="introPara">student with strong CS fundamentals, building data-driven solutions and seeking entry-level Data Science & BA roles.</p>
            
            <a href="/Dhruv_Resume.pdf" download="Dhruv_Resume.pdf" className="resumeLink">
              <button className="btn">

                <img src={btnImg} alt="download icon" className="btnImg" />
                    Resume
              </button>
            </a>
            
            
        
        </div>
        <img src={bg} alt="profile" className="bg" />

    </section>


  )
};

export default Intro;
