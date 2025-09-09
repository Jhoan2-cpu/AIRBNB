import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Asistencia</h4>
          <ul>
            <li><a href="#">Centro de ayuda</a></li>
            <li><a href="#">Información de seguridad</a></li>
            <li><a href="#">Opciones de cancelación</a></li>
            <li><a href="#">Respuesta ante COVID-19</a></li>
            <li><a href="#">Denuncia discriminación</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Comunidad</h4>
          <ul>
            <li><a href="#">AirFel.org: ayuda en caso de desastre</a></li>
            <li><a href="#">Combatir la discriminación</a></li>
            <li><a href="#">Diversidad y pertenencia</a></li>
            <li><a href="#">Accesibilidad</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Ser anfitrión</h4>
          <ul>
            <li><a href="#">Pon tu espacio en AirFel</a></li>
            <li><a href="#">Cubre tu anfitrión</a></li>
            <li><a href="#">Recursos para anfitriones</a></li>
            <li><a href="#">Foro de la comunidad</a></li>
            <li><a href="#">Ser anfitrión responsable</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>AirFel</h4>
          <ul>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Nuevas funciones</a></li>
            <li><a href="#">Carreras</a></li>
            <li><a href="#">Inversores</a></li>
            <li><a href="#">Tarjetas de regalo</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="footer-bottom-left">
            <span>© 2024 AirFel, Inc.</span>
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Mapa del sitio</a>
          </div>
          
          <div className="footer-bottom-right">
            <button className="language-btn">🌐 Español (ES)</button>
            <button className="currency-btn">€ EUR</button>
            <div className="social-links">
              <a href="#">📘</a>
              <a href="#">🐦</a>
              <a href="#">📷</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;