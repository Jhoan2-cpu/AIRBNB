import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import PropertyListings from './components/PropertyListings';
import ExperiencesPage from './components/ExperiencesPage';
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Preloader from './components/Preloader';
import './styles/App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'experiences':
        return <ExperiencesPage />;
      case 'services':
        return <ServicesPage />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <SearchBar />
            <PropertyListings />
          </>
        );
    }
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      {renderPage()}
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;