import Home from '../../index.js';
import './AboutCSProjects.css';

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

function AboutCSProjects() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='about-cs-projects-title'>CS Projects</div>

            <div className='about-cs-projects-description'>
                You can click on the "Projects" button (located on the navigation bar) to view details about CS projects I have created over my lifetime. 
            </div> 
        </div>
    );
}

export default AboutCSProjects;