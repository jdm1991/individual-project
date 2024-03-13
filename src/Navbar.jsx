import { Link } from 'react-router-dom';
import './navbar.css'; 

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/workout-tracker">Workout Tracker</Link>
                    <div className="dropdown-menu">
                        <Link to="/WorkoutTrackerPage1">Favourite Workouts</Link>
                        <Link to="/workout-tracker">Workout Tracker</Link>
                    </div>
                </li>
                <li>
                    <Link to="/icebath">Ice Bath</Link>
                    {/* <div className="dropdown-menu">
                        <Link to="/icebath/page1">Page 1</Link>
                        <Link to="/icebath/page2">Page 2</Link>
                    </div> */}
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    {/* <div className="dropdown-menu">
                        <Link to="/contact/page1">Page 1</Link>
                        <Link to="/contact/page2">Page 2</Link>
                    </div> */}
                </li>
                {/* <li> */}
                    {/* <Link to="/mindfulness">Mindfulness</Link> */}
                    {/* <div className="dropdown-menu">
                        <Link to="/mindfulness/page1">Page 1</Link>
                        <Link to="/mindfulness/page2">Page 2</Link>
                    </div> */}
                {/* </li> */}
                {/* <li>
                    <Link to="/resources">Resources</Link> */}
                    {/* <div className="dropdown-menu">
                        <Link to="/resources/page1">Page 1</Link>
                        <Link to="/resources/page2">Page 2</Link>
                    </div> */}
                {/* </li> */}
               
            </ul>
        </nav>
    );
}
