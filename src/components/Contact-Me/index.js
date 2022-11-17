import './index.scss';
import React, { Component,useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Resume  from './../../assets/images/my-Resume.pdf';
import CV from './../../assets/images/my-CV.pdf';


const ContactMe = () => {
  const { ref: myRef, inView:myElementIsVisible } = useInView();

  return (
    <div id="contact">
    <div className="container">
    <h1 className="sub-title" ref={myRef}><span>C</span>ontact Me</h1>
      <div className="row">
        <div className="contact-left">
          <p><i ref={myRef}><FontAwesomeIcon icon={ faEnvelope } /></i>lapizjusoh@yahoo.com</p>
          <p><i ref={myRef}><FontAwesomeIcon icon={ faPhone } /></i>+6017-3192184</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/hafizuddin-yusoff-350129231/" target="_blank"><FontAwesomeIcon icon={ faLinkedin } /></a>
            <a href="https://github.com/LapizJusoh" target="_blank"><FontAwesomeIcon icon={ faGithubSquare } /></a>
          </div>
          <a href={Resume} target="_blank" download className="btn btn2">Download Resume</a>   <a href={CV} target="_blank" download className="btn btn2">Download CV</a>
        </div>

        <div className="contact-right">
          <form action="mailto:lapizjusoh@yahoo.com" target="_blank" method="POST" encType="text/plain">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="mail" placeholder="Your Email" required />
            <textarea name="comment" id="message" rows="6" placeholder="Your Message"></textarea>
            <button type="submit" className="btn btn2">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactMe;