import React from 'react';
import '../styles/Preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="logo-animation">
          <h1 className="preloader-logo">AirFel</h1>
        </div>
        
        <div className="loading-animation">
          <div className="loading-dots">
            <div className="dot dot1"></div>
            <div className="dot dot2"></div>
            <div className="dot dot3"></div>
          </div>
        </div>
        
        <div className="loading-text">
          <span className="loading-message">Preparando tu experiencia...</span>
        </div>
        
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
      
      <div className="preloader-background">
        <div className="floating-icon icon1">🏠</div>
        <div className="floating-icon icon2">✈️</div>
        <div className="floating-icon icon3">🌟</div>
        <div className="floating-icon icon4">🎯</div>
        <div className="floating-icon icon5">💎</div>
        <div className="floating-icon icon6">🎨</div>
      </div>
    </div>
  );
}

export default Preloader;