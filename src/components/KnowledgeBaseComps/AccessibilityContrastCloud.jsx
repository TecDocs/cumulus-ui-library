import React from 'react';

export default function AccessibilityContrastCloud({ backgroundColor, textColor, pass }) {
  const wrapperStyle = {
    borderRadius: '12px',
    padding: '1rem',
    margin: '2rem auto',
    maxWidth: '500px',
    backgroundColor: '#ffffff',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
  };

  const testBoxStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    padding: '1.2rem',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 500,
    transition: 'all 0.3s ease',
  };

  const statusStyle = {
    marginTop: '0.8rem',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    color: pass ? 'limegreen' : 'crimson',
  };

  return (
    <div style={wrapperStyle}>
      <div style={testBoxStyle}>Sample Text on Background</div>
      <div style={statusStyle}>
        {pass ? '✅ Passes WCAG Contrast' : '❌ Fails Contrast Check'}
      </div>
    </div>
  );
}
