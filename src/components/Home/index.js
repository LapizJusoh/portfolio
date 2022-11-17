import portfolioPic from './../../assets/images/portfolio-picture.png';
import React, { Component,useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './index.scss';

const Navigation = () => {
  const { ref: myRef, inView:myElementIsVisible } = useInView();

  return (
    <div id="header" ref={myRef} className={myElementIsVisible ? 'show' : 'hidden'}>
      <div className="container">
        <div className="header">
          <img className="self-image" src={portfolioPic} alt="a picture"/>
          <div className="header-text">
            <h1>Hi, I'm <span>Hafizuddin</span><br /></h1>
            <p>a Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation;