import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Proj1 from './../../assets/images/proj1.png';
import Proj2 from './../../assets/images/proj2.png';
import Proj3 from './../../assets/images/proj3.png';
import './index.scss';

const MyWorks = () => {
  return (
    <div id="portfolio">
    <div className="container">
      <h1 className="sub-title"><span>M</span>y Works</h1>
      <div className="work-list">
        <div className="work">
          <img src={Proj1} alt="first-portfolio" />
          <div className="layer">
            <h3>Tic-Tac-Toe App</h3>
            <p>A simple Tic-Tac-Toe game, made purely with HTML, CSS and JavaScript.</p>
            <a href="https://github.com/LapizJusoh/-Proj1-TicTacToe" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
        <div className="work">
          <img src={Proj2} alt="second-portfolio" />
          <div className="layer">
            <h3>Genshin Character Planner</h3>
            <p>A simple application where users can find not only guides on what material they require for specific characters on the game Genshin Impact, but to also allow users freedom to edit and add in their own info.</p>
            <a href="https://genshin-character-planner-655.herokuapp.com/" target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
        <div className="work">
          <img src={Proj3} alt="third-portfolio" />
          <div className="layer">
            <h3>Bookworm App</h3>
            <p>Book Tracker app to track books that you are currently reading, read already and inspiration for what book to read next.</p>
            <a href="https://bookworm-2022-app.herokuapp.com/"  target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </div>
        </div>
      </div>
      <a href="https://github.com/LapizJusoh?tab=repositories" className="btn" target="_blank">See more</a>
    </div>
  </div>
  )
}

export default MyWorks;