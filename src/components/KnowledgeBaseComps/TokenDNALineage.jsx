import React from 'react';

export default function TokenDNALineage({ tokens }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', padding: '2rem' }}>
      {tokens.map((token, index) => (
        <div key={index} style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.75rem 1.5rem',
          background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
          borderRadius: '20px',
          color: '#fff',
          fontWeight: 'bold',
          fontFamily: 'monospace',
        }}>
          {token}
          {index < tokens.length - 1 && (
            <svg height="60" width="2" style={{ position: 'absolute', bottom: -60 }}>
              <line x1="1" y1="0" x2="1" y2="60" stroke="#8ec5fc" strokeDasharray="4,4" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}