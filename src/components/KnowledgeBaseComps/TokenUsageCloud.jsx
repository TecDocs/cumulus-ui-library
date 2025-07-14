import React from 'react';

export default function TokenUsageCloud({ token, usedIn }) {
  const boxStyle = {
    marginTop: '2rem',
    padding: '1.2rem',
    borderRadius: '10px',
    background: '#eaf3ff',
    color: '#111',
    boxShadow: '0 4px 8px rgba(0,0,0,0.06)',
  };

  const headerStyle = {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const listStyle = {
    paddingLeft: '1.2rem',
    margin: 0,
  };

  return (
    <div style={boxStyle}>
      <div style={headerStyle}>Token: {token}</div>
      <ul style={listStyle}>
        {usedIn.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
