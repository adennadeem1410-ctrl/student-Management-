// src/components/FloatingCTA.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function FloatingCTA() {
  return (
    <Link to="/contact" className="shadow-lg" style={{
      position: 'fixed',
      right: '25px',
      bottom: '25px',
      width: '65px',
      height: '65px',
      background: '#25D366',
      color: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      zIndex: 1000,
      boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
      transition: 'all 0.3s',
      animation: 'pulse 2s infinite'
    }}>
      <i className="fab fa-whatsapp"></i>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </Link>
  );
}