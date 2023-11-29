import { Link } from 'react-router-dom'; 
import './header.css';

export default function Header() {
  return (
    <div className="header-gradient-container">
      <img src="src/assets/Logo.png" alt="logo" className="logo" />
      <Link to="/" style={{ textDecoration: 'none' }}> 
        <h1 className="navbar-title">Evolutionary Health</h1>
      </Link>
    </div>
  );
}
