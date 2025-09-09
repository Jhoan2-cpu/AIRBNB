import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Encuentra espacios únicos donde alojarte
        </h1>
        <p className="hero-subtitle">
          Descubre hogares enteros y habitaciones privadas perfectas para cualquier viaje.
        </p>
      </div>
      <div className="hero-image">
        <div className="image-placeholder">
          <i className="fas fa-home hero-icon"></i>
          <div className="icon-decoration">
            <i className="fas fa-heart heart-float"></i>
            <i className="fas fa-star star-float"></i>
            <i className="fas fa-key key-float"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;