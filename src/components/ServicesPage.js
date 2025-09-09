import React, { useState } from 'react';
import '../styles/ServicesPage.css';

function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const services = [
    {
      id: 1,
      title: "Sesión Fotográfica Profesional",
      location: "Madrid, España",
      price: 120,
      duration: 2,
      rating: 4.9,
      reviews: 156,
      category: 'fotografia',
      image: "https://images.unsplash.com/photo-1554048612-b6ebae92138d?w=600&h=400&fit=crop&auto=format",
      provider: "Studio Lens",
      description: "Sesión fotográfica profesional para eventos, retratos o productos"
    },
    {
      id: 2,
      title: "Chef Privado a Domicilio",
      location: "Barcelona, España", 
      price: 200,
      duration: 4,
      rating: 5.0,
      reviews: 89,
      category: 'gastronomia',
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&auto=format",
      provider: "Chef Premium Services",
      description: "Chef profesional preparará una cena gourmet en tu hogar"
    },
    {
      id: 3,
      title: "Sesión de Yoga Personalizada",
      location: "Valencia, España",
      price: 60,
      duration: 1.5,
      rating: 4.8,
      reviews: 203,
      category: 'wellness',
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&auto=format",
      provider: "Mindful Wellness",
      description: "Clases de yoga adaptadas a tu nivel y necesidades"
    },
    {
      id: 4,
      title: "Entrenamiento Personal",
      location: "Sevilla, España",
      price: 45,
      duration: 1,
      rating: 4.7,
      reviews: 134,
      category: 'fitness',
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&auto=format",
      provider: "FitPro Trainers",
      description: "Entrenamiento personalizado adaptado a tus objetivos"
    },
    {
      id: 5,
      title: "Servicio de Maquillaje Profesional",
      location: "Madrid, España",
      price: 80,
      duration: 2,
      rating: 4.9,
      reviews: 267,
      category: 'estetica',
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop&auto=format",
      provider: "Beauty Pro Studio",
      description: "Maquillaje profesional para eventos especiales y bodas"
    },
    {
      id: 6,
      title: "Limpieza Profesional del Hogar",
      location: "Bilbao, España",
      price: 35,
      duration: 3,
      rating: 4.6,
      reviews: 189,
      category: 'domesticos',
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop&auto=format",
      provider: "CleanHome Services",
      description: "Servicio de limpieza completa para tu hogar u oficina"
    },
    {
      id: 7,
      title: "Masaje de Aromaterapia",
      location: "Valencia, España",
      price: 90,
      duration: 1.5,
      rating: 5.0,
      reviews: 98,
      category: 'wellness',
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop&auto=format",
      provider: "Relaxation Spa",
      description: "Masaje relajante con aceites esenciales premium"
    },
    {
      id: 8,
      title: "Servicio de Catering Gourmet",
      location: "Madrid, España",
      price: 25,
      duration: null,
      rating: 4.8,
      reviews: 145,
      category: 'gastronomia',
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop&auto=format",
      provider: "Gourmet Catering Co.",
      description: "Comida gourmet preparada para eventos y reuniones"
    }
  ];

  const categories = [
    { id: 'all', name: '✨ Todos los servicios', emoji: '✨' },
    { id: 'fotografia', name: '📸 Fotografía', emoji: '📸' },
    { id: 'fitness', name: '💪 Fitness', emoji: '💪' },
    { id: 'wellness', name: '🧘 Wellness', emoji: '🧘' },
    { id: 'estetica', name: '💄 Estética', emoji: '💄' },
    { id: 'gastronomia', name: '👨‍🍳 Gastronomía', emoji: '👨‍🍳' },
    { id: 'domesticos', name: '🏠 Domésticos', emoji: '🏠' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="hero-content">
          <h1>Servicios Profesionales</h1>
          <p>Conecta con expertos locales para todos tus necesidades</p>
        </div>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span className="feature-text">Profesionales Verificados</span>
          </div>
          <div className="feature">
            <span className="feature-icon">⭐</span>
            <span className="feature-text">Calidad Garantizada</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🔒</span>
            <span className="feature-text">Pagos Seguros</span>
          </div>
        </div>
      </div>

      <div className="services-container">
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

        <div className="services-grid">
          {filteredServices.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-img"
                />
                <div className="service-badge">
                  {categories.find(cat => cat.id === service.category)?.emoji}
                </div>
                <div className="service-rating-badge">
                  ⭐ {service.rating}
                </div>
              </div>
              
              <div className="service-info">
                <div className="service-header">
                  <h3 className="service-title">{service.title}</h3>
                  <div className="service-rating">
                    ⭐ {service.rating} ({service.reviews})
                  </div>
                </div>
                
                <p className="service-description">{service.description}</p>
                <p className="service-location">📍 {service.location}</p>
                <p className="service-provider">🏢 {service.provider}</p>
                {service.duration && (
                  <p className="service-duration">⏱️ {service.duration} horas</p>
                )}
                
                <div className="service-footer">
                  <span className="service-price">
                    €{service.price}{service.duration ? ' / servicio' : ' / persona'}
                  </span>
                  <button className="contact-btn">Contactar</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h2>¿Ofreces servicios profesionales?</h2>
            <p>Únete a nuestra plataforma y conecta con clientes en tu área</p>
            <button className="become-provider-btn">Convertirse en Proveedor</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;