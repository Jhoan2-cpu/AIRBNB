import React, { useState } from 'react';
import '../styles/ChatBot.css';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! 👋 Soy el asistente virtual de AirFel. ¿En qué puedo ayudarte hoy?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user'
      };
      
      setMessages([...messages, userMessage]);
      setInputValue('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Gracias por tu mensaje. Estoy aquí para ayudarte con cualquier pregunta sobre AirFel. ¿Necesitas ayuda para encontrar un alojamiento?",
          sender: 'bot'
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const quickResponses = [
    "🏠 Buscar alojamiento",
    "💰 Precios y tarifas",
    "📞 Contactar soporte",
    "❓ Preguntas frecuentes"
  ];

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="bot-avatar">🤖</div>
              <div>
                <h4>Asistente AirFel</h4>
                <span className="status">En línea</span>
              </div>
            </div>
            <button className="close-btn" onClick={toggleChat}>
              ✕
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-bubble">
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <div className="quick-responses">
            {quickResponses.map((response, index) => (
              <button key={index} className="quick-response">
                {response}
              </button>
            ))}
          </div>
          
          <form className="chat-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="chat-input"
            />
            <button type="submit" className="send-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>
      )}
      
      {/* Chat Toggle Button */}
      <button className="chat-toggle-btn fab-float" onClick={toggleChat}>
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
          </svg>
        )}
      </button>
    </div>
  );
}

export default ChatBot;