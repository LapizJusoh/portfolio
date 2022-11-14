import './index.scss';

const Navigation = () => {
  return (
    <nav className="container">
      <h1>Hafiz</h1>
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