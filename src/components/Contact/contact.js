import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Using your provided credentials
    emailjs.sendForm(
      'service_meb3gqv', 
      'template_k3t2dti', 
      form.current, 
      'W1rGJktIbgG6Gkl6Z'
    )
    .then((result) => {
        console.log(result.text);
        alert("Success! Your message has been sent to Dhruv.");
        e.target.reset(); // Clears the form fields
    }, (error) => {
        console.log(error.text);
        alert("Failed to send: " + error.text);
    });
  };

  return (
    <section className='contactPage' id='contactPage'>
      <div className="contactHeader">
        <span className="contactSubtitle">CONTACT</span>
        <h1 className='contactPageTitle'>Let's Work Together</h1>
        <p className="contactDesc">
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </p>
      </div>

      <div className="contactContent">
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          {/* Note: 'name' attributes are used by EmailJS template variables */}
          <input type="text" name="from_name" className="name" placeholder='Your Name' required />
          <input type="email" name="from_email" className="email" placeholder='Your Email' required />
          <textarea name="message" className='msg' rows="8" placeholder='Tell me about your project...' required></textarea>
          
          <button type="submit" className="submitBtn">
            Send Message <span className="arrow">→</span>
          </button>
        </form>

        <div className="contactInfo">
          <div className="infoItem">
            <div className="infoIcon">✉</div>
            <div className="infoText">
              <span>Email</span>
              <p>careers.dsol@gmail.com</p>
            </div>
          </div>

          <div className="infoItem">
            <div className="infoIcon">📞</div>
            <div className="infoText">
              <span>Phone</span>
              <p>+91 72280 36721</p>
            </div>
          </div>

          <div className="infoItem">
            <div className="infoIcon">📍</div>
            <div className="infoText">
              <span>Location</span>
              <p>Melbourne,Victoria,Australia</p>
            </div>
          </div>

          <div className="socialContainer">
            <span className="socialTitle">Follow me on</span>
            <div className="links">
              <a href="https://www.linkedin.com/in/dhruv-solanki-921237391/" target="_blank" rel="noreferrer" className="linkIcon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;