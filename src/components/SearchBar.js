import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar() {
  const [searchData, setSearchData] = useState({
    location: '',
    checkin: '',
    checkout: '',
    guests: 1
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    console.log('Searching with:', searchData);
    
    // Simulate search process
    setTimeout(() => {
      setIsSearching(false);
      alert(`¡Búsqueda completada! Encontramos ${Math.floor(Math.random() * 50) + 10} opciones en ${searchData.location || 'tu ubicación'}`);
    }, 2000);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <div className="search-section">
          <label>Ubicación</label>
          <input
            type="text"
            name="location"
            placeholder="¿A dónde vas?"
            value={searchData.location}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="search-section">
          <label>Llegada</label>
          <input
            type="date"
            name="checkin"
            value={searchData.checkin}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="search-section">
          <label>Salida</label>
          <input
            type="date"
            name="checkout"
            value={searchData.checkout}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="search-section">
          <label>Huéspedes</label>
          <select
            name="guests"
            value={searchData.guests}
            onChange={handleInputChange}
          >
            <option value={1}>1 huésped</option>
            <option value={2}>2 huéspedes</option>
            <option value={3}>3 huéspedes</option>
            <option value={4}>4 huéspedes</option>
            <option value={5}>5+ huéspedes</option>
          </select>
        </div>
        
        <button 
          className={`search-btn ${isSearching ? 'searching' : ''}`} 
          onClick={handleSearch}
          disabled={isSearching}
        >
          {isSearching ? (
            <div className="loading-spinner"></div>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M11.2 10.1l4.2 4.2-1.1 1.1-4.2-4.2A5.5 5.5 0 1 1 11.2 10.1zM6.5 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" fill="white"/>
            </svg>
          )}
          {isSearching ? 'Buscando...' : 'Buscar'}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;