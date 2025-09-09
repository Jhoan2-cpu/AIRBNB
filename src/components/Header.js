import React, { useState } from 'react';
import '../styles/Header.css';

function Header({ onNavigate, currentPage }) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleNavigation = (page) => {
    onNavigate(page);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="logo" onClick={() => handleNavigation('home')}>
            <h1>AirFel</h1>
          </div>
          
          <div className="team-info">
            <span className="team-members">
              <span className="team-member">Bustamante P. A.</span>
              <span className="team-separator">•</span>
              <span className="team-member">Camargo H. S.</span>
              <span className="team-separator">•</span>
              <span className="team-member">Cruz C. J.</span>
            </span>
          </div>
        </div>
        
        <nav className="nav-links">
          <button 
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavigation('home')}
          >
            Lugares para alojarse
          </button>
          <button 
            className={`nav-link ${currentPage === 'experiences' ? 'active' : ''}`}
            onClick={() => handleNavigation('experiences')}
          >
            Experiencias
          </button>
          <button 
            className={`nav-link ${currentPage === 'services' ? 'active' : ''}`}
            onClick={() => handleNavigation('services')}
          >
            Servicios
          </button>
        </nav>
        
        <div className="user-menu">
          <button className="host-btn btn-pulse notification-badge">Conviértete en anfitrión</button>
          <div className="user-profile">
            <button className="menu-btn" onClick={toggleUserMenu}>
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path d="M2 4h10v1H2zM2 7h10v1H2zM2 10h10v1H2z" fill="currentColor"/>
              </svg>
              <svg width="20" height="20" viewBox="0 0 20 20">
                <circle cx="10" cy="6" r="3" fill="currentColor"/>
                <path d="M10 13c-3.5 0-6.5 1.5-6.5 3.5V18h13v-1.5c0-2-3-3.5-6.5-3.5z" fill="currentColor"/>
              </svg>
            </button>
            {showUserMenu && (
              <div className="user-dropdown">
                <a href="#" className="dropdown-item">Mi perfil</a>
                <a href="#" className="dropdown-item">Mis viajes</a>
                <a href="#" className="dropdown-item">Lista de deseos</a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">Pon tu espacio en AirFel</a>
                <a href="#" className="dropdown-item">Organiza una experiencia</a>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item">Centro de ayuda</a>
                <a href="#" className="dropdown-item">Cerrar sesión</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;