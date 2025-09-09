import React, { useState } from 'react';
import '../styles/PropertyListings.css';

function PropertyListings() {
  const [likedProperties, setLikedProperties] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const properties = [
    {
      id: 1,
      title: "Apartamento acogedor en el centro",
      location: "Madrid, España",
      price: 75,
      rating: 4.8,
      reviews: 124,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 2,
      title: "Casa moderna con vistas al mar",
      location: "Valencia, España",
      price: 120,
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 3,
      title: "Loft vintage en barrio artístico",
      location: "Barcelona, España",
      price: 95,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 4,
      title: "Villa con piscina privada",
      location: "Ibiza, España",
      price: 200,
      rating: 5.0,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 5,
      title: "Casa rural en la montaña",
      location: "Asturias, España",
      price: 60,
      rating: 4.6,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 6,
      title: "Estudio luminoso cerca de la playa",
      location: "Málaga, España",
      price: 85,
      rating: 4.8,
      reviews: 91,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 7,
      title: "Penthouse con terraza panorámica",
      location: "Sevilla, España",
      price: 150,
      rating: 4.9,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 8,
      title: "Casa histórica restaurada",
      location: "Toledo, España",
      price: 110,
      rating: 4.7,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop&auto=format"
    },
    {
      id: 9,
      title: "Apartamento minimalista moderno",
      location: "Bilbao, España",
      price: 90,
      rating: 4.6,
      reviews: 112,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&auto=format"
    }
  ];

  const toggleLike = (propertyId) => {
    const newLikedProperties = new Set(likedProperties);
    if (newLikedProperties.has(propertyId)) {
      newLikedProperties.delete(propertyId);
    } else {
      newLikedProperties.add(propertyId);
    }
    setLikedProperties(newLikedProperties);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('¡Se han cargado 12 nuevas propiedades! En total tienes ahora ' + (properties.length + 12) + ' opciones disponibles.');
    }, 2000);
  };

  return (
    <section className="property-listings">
      <div className="listings-container">
        <h2 className="listings-title">Lugares para alojarse</h2>
        
        <div className="category-tabs">
          <button className="category-tab active">🏠 Casas enteras</button>
          <button className="category-tab">🏨 Habitaciones privadas</button>
          <button className="category-tab">🛏️ Habitaciones compartidas</button>
          <button className="category-tab">🏰 Experiencias únicas</button>
        </div>
        
        <div className="properties-grid">
          {properties.map(property => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="property-img"
                />
                <button 
                  className={`heart-btn ${likedProperties.has(property.id) ? 'liked' : ''}`}
                  onClick={() => toggleLike(property.id)}
                >
                  {likedProperties.has(property.id) ? '♥' : '♡'}
                </button>
              </div>
              
              <div className="property-info">
                <div className="property-header">
                  <h3 className="property-title">{property.title}</h3>
                  <div className="property-rating">
                    ⭐ {property.rating} ({property.reviews})
                  </div>
                </div>
                
                <p className="property-location">{property.location}</p>
                
                <div className="property-footer">
                  <span className="property-price">€{property.price} / noche</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="load-more">
          <button 
            className={`load-more-btn ${isLoading ? 'loading' : ''} btn-glow`}
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="loading-spinner"></div>
                Cargando más<span className="loading-dots"></span>
              </>
            ) : (
              'Mostrar más'
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default PropertyListings;