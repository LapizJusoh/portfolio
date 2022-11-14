import Navigation from './components/Navigation/index.js'
import Home from './components/Home/index.js'
import AboutMe from './components/About-Me/index.js';
import Skills from './components/Skills/index.js';
import MyWorks from './components/My-Works/index.js';
import ContactMe from './components/Contact-Me/index.js';
import Footer from './components/Footer/index.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <AboutMe />
      {/* <Skills />
      <MyWorks />
      <ContactMe /> */}
      <Footer />
    </div>
  );
}

export default App;