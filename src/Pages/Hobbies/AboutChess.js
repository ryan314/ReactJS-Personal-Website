import './AboutChess.css';
import Home from '../../index.js';

import game0 from '../../Images/Chess/game0.jpg';
import modes from '../../Images/Chess/modes.jpg';
import puzzle0 from '../../Images/Chess/puzzle0.jpg';

import {
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Navigate,
    Link,
    Outlet,
    useParams,
    NavLink,
    useNavigate,
    useLocation
} from 'react-router-dom';

function AboutChess() {
    const navigate = useNavigate()
    
    return (   
        <div>
            <div className='about-chess-title'>Chess Journey</div>
            <img className='modes' src={modes} alt=''></img>
            <img className='puzzle0' src={puzzle0} alt=''></img>
            <img className='game0' src={game0} alt=''></img>
            <div className='about-chess-description'>
                Image 1: These are various time formats offered on the site Lichess. Lately, I have been playing the time format
                of 15 seconds + 0 increment, which has helped me to process chess positions in a quicker and more precise manner.  
                <br/>
                <br/>
                Image 2: This is a chess puzzle game mode where one tries to solve as many chess puzzles within 3 minutes. I have
                been playing this puzzle game mode to improve my ability to spot tactics quicker within a given chess position. 
                <br/>
                <br/>
                Image 3: This is an example of me playing against the highest rated Stockfish chess engine (which is rated 3000). 
            </div>
        </div>
    );
}

export default AboutChess;