import portfolioPic from './../../assets/images/portfolio-picture.png';
import './index.scss';

const Navigation = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
        <img className="self-image" src={portfolioPic} alt="a picture"/>
          <div className="header-text">
            <h1>Hi, I'm <span>Hafizuddin</span><br />
            From Malaysia</h1>
            <p>a Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation;