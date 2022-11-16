import Navigation from './components/Navigation/index.js'
import Home from './components/Home/index.js'
import AboutMe from './components/About-Me/index.js';
import Skills from './components/Skills/index.js';
import MyWorks from './components/My-Works/index.js';
import ContactMe from './components/Contact-Me/index.js';
import Footer from './components/Footer/index.js';
import { useRef, useEffect } from 'react';
import './App.scss';

const observer = new IntersectionObserver((entries) => {

})

function App() {
  const myRef= useRef();
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      console.log('myRef', myRef.current)
      // const entry = entries[0];
      // console.log('entry',entry);
    }, [])
  })

  return (
    <div className="App">
      <Navigation />
      <Home />
      <AboutMe />
      <Skills />
      <MyWorks />
      <ContactMe />
      <Footer />
      <div className="wave" ref={myRef} ></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
}

export default App;