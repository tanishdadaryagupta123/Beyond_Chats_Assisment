import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">BeyondChats</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Registration</Link>
          <Link to="/setup-organisation" className="navbar-link">Organisation Setup</Link>
          <Link to="/chatbot-integration" className="navbar-link">Chatbot Integration</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
