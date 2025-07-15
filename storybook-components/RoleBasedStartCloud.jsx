import React from 'react';

export default function RoleBasedStartCloud() {
  const containerStyle = {
    border: '2px dashed #0ea5e9',
    borderRadius: '12px',
    padding: '2rem',
    marginTop: '2.5rem',
    background: '#e0f2fe',
    color: '#082f49',
    fontSize: '1rem',
  };

  const buttonStyle = {
    background: '#3b82f6',
    color: '#fff',
    borderRadius: '6px',
    padding: '0.5rem 1.2rem',
    marginRight: '1rem',
    marginTop: '1rem',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '0.95rem',
  };

  return (
    <div style={containerStyle}>
      <div style={{ fontWeight: 'bold', marginBottom: '1rem' }}>Choose your starting path:</div>
      <button style={buttonStyle}>Design-Focused</button>
      <button style={buttonStyle}>Code-First</button>
      <button style={buttonStyle}>Audit-Oriented</button>
    </div>
  );
}
