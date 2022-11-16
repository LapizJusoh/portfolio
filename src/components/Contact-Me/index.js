import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';


const ContactMe = () => {
  return (
    <div id="contact">
    <div className="container hidden">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p><FontAwesomeIcon icon={ faEnvelope } /> lapizjusoh@yahoo.com</p>
          <p><FontAwesomeIcon icon={ faPhoneSquare } /> +6017-3192184</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/hafizuddin-yusoff-350129231/"><FontAwesomeIcon icon={ faLinkedin } /></a>
            <a href="https://github.com/LapizJusoh"><FontAwesomeIcon icon={ faGithubSquare } /></a>
          </div>
          <a href="images/my-cv.pdf" target="_blank" download className="btn btn2">Download Resume</a>   <a href="images/my-cv.pdf" target="_blank" download className="btn btn2">Download CV</a>

          <form action="mailto:lapizjusoh@yahoo.com" target="_blank" method="POST" encType="text/plain">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="mail" placeholder="Your Email" required />
            <textarea name="comment" id="message" rows="6" placeholder="Your Message"></textarea>
            <button type="submit" className="btn btn2">Submit</button>
          </form>

        </div>
        <div className="contact-right">
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactMe;