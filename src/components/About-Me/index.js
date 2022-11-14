import KLPic from './../../assets/images/kualaLumpur.png';
import './index.scss';

const AboutMe = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={KLPic} />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque magna
              vitae ultricies finibus. Donec hendrerit, nulla ac fringilla commodo, neque ante gravida
              mauris, vitae ultrices ex massa a lorem. Curabitur non lectus vel mauris aliquet porta
              a ac libero. Vivamus rutrum rhoncus ipsum, vel semper elit feugiat in. Ut tempus enim dolor, eu
              blandit nulla interdum et. Curabitur lorem nisi, fringilla et ligula at, pulvinar tincidunt nunc.
            </p>

            <div className="tab-titles">
            <p className="tab-links active-link" onclick="openTab(event,'skills')">Skills</p>
            <p className="tab-links" onclick="openTab(event,'experience')">Experience</p>
            <p className="tab-links" onclick="openTab(event,'education')">Education</p>
          </div>
          <div className="tab-contents active-tab" id="skills">
            <ul>
              <li><span>UI/UX</span><br />Designing Web/App Interfaces</li>
              <li><span>Web Development</span><br />Web App Development</li>
              <li><span>App Development</span><br />Building Android/iOS Apps</li>
            </ul>
          </div>

          <div className="tab-contents"  id="experience">
            <ul>
              <li><span>Just a Test</span><br />Yo</li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;