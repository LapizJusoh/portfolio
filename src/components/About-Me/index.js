import React, { Component,useRef, useEffect } from 'react';
import KLPic from './../../assets/images/kualaLumpur.png';
import './index.scss';

class AboutMe extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let tabLinks = Array.from(document.getElementsByClassName("tab-links"));
    let tabContents = Array.from(document.getElementsByClassName("tab-contents"));

    tabLinks.map(link  => {
      link.classList.remove("active-link");
    })
  
    tabContents.map(content=>{
      return content.classList.remove("active-tab");
    })

    e.currentTarget.classList.add("active-link");

    document.getElementById(e.currentTarget.innerHTML.toLowerCase()).classList.add('active-tab');

    console.log(e.currentTarget);
    console.log(document.getElementById(e.currentTarget.innerHTML.toLowerCase()));
  }

  render(){
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={KLPic} />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title"><span>A</span>bout Me</h1>
              <p>Hello, there! Born and raised in Malaysia, I'm a former multimedia student that decide to branch out into tech.
                Not only could I make full-stack applications from end-to-end, I also excel in using Adobe Illustrator and Premier Pro.
                When I'm not coding, my hobbies include playing video games and reading novels.
              </p>
  
              <div className="tab-titles">
                <p className="tab-links active-link" onClick={this.handleClick}>Education</p>
                <p className="tab-links" onClick={this.handleClick}>Experience</p>
              </div>
              <div className="tab-contents active-tab" id="education">
                <ul>
                  <li><span>UniKL MIIT</span><br />Bachelor in Interactive Multimedia and Design</li>
                  <li><span>General Assembly</span><br />Software Engineer Intensive Course</li>
                </ul>
              </div>
  
            <div className="tab-contents"  id="experience">
              <ul>
                <li><span>Adnan Computer</span><br />Video Editor.</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;