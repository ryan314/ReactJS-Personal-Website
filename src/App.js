import './App.css';
import Home from './Pages/Home.js';
import RelevantProjects from './Pages/RelevantProjects/RelevantProjects.js';
import Education from './Pages/Education.js';
import Achievements from './Pages/Achievements.js';
import ClubsAndSocieties from './Pages/ClubsAndSocieties.js';
import Hobbies from './Pages/Hobbies/Hobbies.js';
import AboutChess from './Pages/Hobbies/AboutChess.js';
import AboutPiano from './Pages/Hobbies/AboutPiano.js';
import AboutCSProjects from './Pages/Hobbies/AboutCSProjects.js';
import AboutAbsFuncSimulator from './Pages/RelevantProjects/AboutAbsFuncSimulator.js';
import AboutRPGGame from './Pages/RelevantProjects/AboutRPGGame.js';
import github_icon from './Images/github-icon.png';
import linkedin_icon from './Images/linkedin-icon.png';

import React from "react";

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
  useLocation,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav className="nav_bar">
        <Link to="/" className="nav_link">Home</Link>
        <Link to="/projects" className="nav_link">Projects</Link>
        <Link to="/education" className="nav_link">Education</Link>
        <Link to="/achievements" className="nav_link">Awards</Link>
        <Link to="/clubs_and_societies" className="nav_link">Clubs & Societies</Link>
        <Link to="/hobbies" className="nav_link">Hobbies</Link>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/projects" element={<RelevantProjects />} />
        <Route path="/about_abs_func_simulator" element={<AboutAbsFuncSimulator />} />
        <Route path="/about_rpg_game" element={<AboutRPGGame />} />

        <Route path="/education" element={<Education />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/clubs_and_societies" element={<ClubsAndSocieties />} />

        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/about_chess" element={<AboutChess />} />
        <Route path="/about_piano" element={<AboutPiano />} />
        <Route path="/about_cs_projects" element={<AboutCSProjects />} />        
      </Routes>

      <div className="page_container">
        <div className="footer">
          <a href="https://www.linkedin.com/in/ryan-chiu-835745205/">
            <img className='linkedin_icon' src={linkedin_icon}></img>
          </a>
          <a href="https://github.com/ryan314?tab=repositories">
            <img className='github_icon' src={github_icon}></img>
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;