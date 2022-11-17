import './index.scss';

let lastScrollTop = 0, navbar = document.querySelector('nav');

window.addEventListener("scroll",()=>{
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop){
    document.querySelector('nav').style.top='-60px';
  } else {
    document.querySelector('nav').style.top='0';
  }

  lastScrollTop = scrollTop;

})

const Navigation = () => {
  return (
    <nav className="container">
      <h1><span><i>H</i></span>afiz</h1>
      <ul id="side-menu">
      <li><a href="#header">Home</a></li>
      <li><a href="#about">About Me</a></li>
      <li><a href="#services">My Skills</a></li>
      <li><a href="#portfolio">My Works</a></li>
      <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  )
}

export default Navigation;