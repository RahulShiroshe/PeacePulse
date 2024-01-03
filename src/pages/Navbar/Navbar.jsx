import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className={showMenu ? 'nav-links active' : 'nav-links'}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/meditation-guides">Meditation Guide</Link></li>
          <li><Link to="/breathing-exercises">Breathing Exercises</Link></li>
          <li><Link to="/calming-animations">Calming Animations</Link></li>
          <li><Link to="/mindfulness-sleep">Mindfulness Sleep</Link></li>
          <li><Link to="/gratitude-journal">Gratitude Journal</Link></li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
}

export default Navbar;
