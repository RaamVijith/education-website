import React, { useState } from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginPopupOpen, setLoginPopupOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLoginPopupToggle = () => {
    setLoginPopupOpen(!loginPopupOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="https://getmasum.com/html-preview/edumon/assets/img/logo.svg" alt="EduMon" className="logo-icon" />
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <div className="nav-links">
            <div className="nav-link dropdown">
              <span>Courses</span>
              <ul className="dropdown-menu">
                <li><a href="#">Software</a></li>
                <li><a href="#">Hardware</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Cart</a></li>
              </ul>
            </div>
            <div className="nav-link dropdown">
              <span>Pages</span>
              <ul className="dropdown-menu">
                <li><a href="#">Grid Blog</a></li>
                <li><a href="#">Standard Blog</a></li>
                <li><a href="#">Blog Details</a></li>
                <li><a href="#">Cart</a></li>
              </ul>
            </div>
            
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Contact</a>
          </div>
        </nav>
        <div className="right-section">
          <div className="icon">
            <i className="fas fa-search"></i>
          </div>
          <div className="icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="notification">3</span>
          </div>
          <button className="login-button" onClick={handleLoginPopupToggle}>Login / Register</button>
        </div>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </header>

      {loginPopupOpen && (
        <div className="login-popup">
          <div className="login-popup-content">
            <span className="close" onClick={handleLoginPopupToggle}>&times;</span>
            <h2>Login / Register</h2>
            {/* Add your login/register form here */}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
