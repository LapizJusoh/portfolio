import { faDatabase, faDesktop, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const Skills = () => {
  return (
    <div id="services">
    <div className="container hidden">
      <h1 className="sub-title"><span>M</span>y Expertise</h1>
      <div className="services-list">
        <div>
          <i><FontAwesomeIcon icon={faDesktop} /></i>
          <h2> Front-End</h2>
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>React</li>
            <li>AJAX</li>
          </ul>
        </div>
        <div>
          <i><FontAwesomeIcon icon={faDatabase} /></i>
          <h2> Back-End</h2>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>RESTful API</li>
            <li>PostGreSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
        <div>
          <i><FontAwesomeIcon icon={faScrewdriverWrench} /></i>
          <h2> Misc.</h2>
          <ul>
            <li>Git</li>
            <li>Visual Studio Code</li>
            <li>Heroku</li>
            <li>Adobe Illustrator</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skills;