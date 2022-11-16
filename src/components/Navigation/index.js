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
      <h1><span>H</span>afiz</h1>
      <ul id="side-menu">
      <li><a href="#header">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navigation;