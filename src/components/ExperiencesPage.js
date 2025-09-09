import React, { useState } from 'react';
import '../styles/ExperiencesPage.css';

function ExperiencesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const experiences = [
    {
      id: 1,
      title: "Tour Culinario por Tapas Madrileñas",
      location: "Madrid, España",
      price: 45,
      duration: 3,
      rating: 4.9,
      reviews: 234,
      category: 'gastronomia',
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&auto=format",
      host: "Chef María González"
    },
    {
      id: 2,
      title: "Clase de Flamenco Tradicional",
      location: "Sevilla, España",
      price: 35,
      duration: 2,
      rating: 4.8,
      reviews: 189,
      category: 'cultura',
      image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&h=400&fit=crop&auto=format",
      host: "Carmen Jiménez"
    },
    {
      id: 3,
      title: "Recorrido Histórico por el Barrio Gótico",
      location: "Barcelona, España",
      price: 25,
      duration: 2.5,
      rating: 4.7,
      reviews: 312,
      category: 'historia',
      image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=400&fit=crop&auto=format",
      host: "Jordi Martín"
    },
    {
      id: 4,
      title: "Senderismo en Picos de Europa",
      location: "Asturias, España",
      price: 55,
      duration: 6,
      rating: 5.0,
      reviews: 87,
      category: 'naturaleza',
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&auto=format",
      host: "Miguel Fernández"
    },
    {
      id: 5,
      title: "Taller de Cerámica Artesanal",
      location: "Valencia, España",
      price: 40,
      duration: 3,
      rating: 4.6,
      reviews: 156,
      category: 'arte',
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&auto=format",
      host: "Ana López"
    },
    {
      id: 6,
      title: "Surf para Principiantes",
      location: "San Sebastián, España",
      price: 50,
      duration: 4,
      rating: 4.8,
      reviews: 203,
      category: 'naturaleza',
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&auto=format",
      host: "Pablo Ruiz"
    }
  ];

  const categories = [
    { id: 'all', name: '🌟 Todas las experiencias', emoji: '🌟' },
    { id: 'gastronomia', name: '🍽️ Gastronomía', emoji: '🍽️' },
    { id: 'cultura', name: '🎭 Cultura', emoji: '🎭' },
    { id: 'historia', name: '🏛️ Historia', emoji: '🏛️' },
    { id: 'naturaleza', name: '🏔️ Naturaleza', emoji: '🏔️' },
    { id: 'arte', name: '🎨 Arte', emoji: '🎨' }
  ];

  const filteredExperiences = activeCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === activeCategory);

  return (
    <div className="experiences-page">
      <div className="experiences-hero">
        <div className="hero-content">
          <h1>Experiencias únicas en España</h1>
          <p>Descubre actividades locales organizadas por anfitriones expertos</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Experiencias</span>
          </div>
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Ciudades</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.8</span>
            <span className="stat-label">⭐ Valoración</span>
          </div>
        </div>
      </div>

      <div className="experiences-container">
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="experiences-grid">
          {filteredExperiences.map(experience => (
            <div key={experience.id} className="experience-card">
              <div className="experience-image">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="experience-img"
                />
                <div className="experience-badge">
                  {categories.find(cat => cat.id === experience.category)?.emoji}
                </div>
                <button className="heart-btn">♡</button>
              </div>
              
              <div className="experience-info">
                <div className="experience-header">
                  <h3 className="experience-title">{experience.title}</h3>
                  <div className="experience-rating">
                    ⭐ {experience.rating} ({experience.reviews})
                  </div>
                </div>
                
                <p className="experience-location">📍 {experience.location}</p>
                <p className="experience-host">👤 Anfitrión: {experience.host}</p>
                <p className="experience-duration">⏱️ {experience.duration} horas</p>
                
                <div className="experience-footer">
                  <span className="experience-price">€{experience.price} / persona</span>
                  <button className="book-btn">Reservar</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more">
          <button className="load-more-btn">Ver más experiencias</button>
        </div>
      </div>
    </div>
  );
}

export default ExperiencesPage;