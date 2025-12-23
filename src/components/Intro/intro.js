import React from 'react';
import './intro.css';
import bg from "../../assets/image2.jpeg";
import btnImg from "../../assets/download.png"
import videoBg from "../../assets/backgroundvideo.mp4";
import myResume from "../../assets/myResume.pdf"
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    

    <section id="intro">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>
     
        <div className="introContent">
            <span className="hello">Hi, </span>
            <span className="introText">I am <span className="introName">Dhruv,</span><br></br> a Software Engineer</span>
            <p className="introPara">with strong CS fundamentals and real-world experience, while constantly exploring new places and perspectives.</p>
            
            <a href={myResume} download="Dhruv_Resume.pdf" className="resumeLink">
              <button className="btn">
                <img src={btnImg} alt="hireme image" className="btnImg" />
                Resume
                </button>
            </a>
            
            
        
        </div>
        <img src={bg} alt="profile" className="bg" />

    </section>


  )
};

export default Intro;
