import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Work1 from './../../assets/images/work-1.png';
import Work2 from './../../assets/images/work-2.png';
import Work3 from './../../assets/images/work-3.png';
import './index.scss';

const MyWorks = () => {
  return (
    <div id="portfolio">
    <div className="container hidden">
      <h1 className="sub-title">My Work</h1>
      <div className="work-list">
        <div className="work">
          <img src={Work1} alt="first-portfolio" />
          <div className="layer">
            <h3>Tic-Tac-Toe App</h3>
            <p>A simple Tic-Tac-Toe game, made purely with HTML, CSS and JavaScript.</p>
            <a href="https://github.com/LapizJusoh/-Proj1-TicTacToe"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
        <div className="work">
          <img src={Work2} alt="second-portfolio" />
          <div className="layer">
            <h3>Genshin Character Planner</h3>
            <p>A simple application where users can find not only guides on what material they require for specific characters on the game Genshin Impact, but to also allow users freedom to edit and add in their own info.</p>
            <a href="https://github.com/LapizJusoh/Proj2-GenshinCharacterPlanner"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
        <div className="work">
          <img src={Work3} alt="third-portfolio" />
          <div className="layer">
            <h3>Bookworm App</h3>
            <p>Book Tracker app to track books that you are currently reading, read already and inspiration for what book to read next.</p>
            <a href="https://github.com/LapizJusoh/Proj3-Bookworm"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
      </div>
      <a href="#" className="btn">See more</a>
    </div>
  </div>
  )
}

export default MyWorks;