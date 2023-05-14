import './AboutPiano.css';
import myPiano from '../../Images/Piano/my-piano.jpg';

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

function AboutPiano() {
    const navigate = useNavigate()

    return (
        <div>
            <div className='about-piano-title'>Piano</div>
            <img className='piano-image' src={myPiano} ></img>

            <div className='about-piano-description'>
                I like to create my own piano compositions, as well as play Classical music on the piano. 
            </div>
        </div>
    );
}

export default AboutPiano;