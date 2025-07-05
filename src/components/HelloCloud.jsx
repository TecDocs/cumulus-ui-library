import React from 'react';

export default function HelloCloud({ message }) {
  return (
    <div
      style={{
        backgroundColor: '#aee1f9',
        padding: '1.5rem 2rem',
        borderRadius: '1rem',
        fontSize: '1.25rem',
        fontWeight: '600',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      {message}
    </div>
  );
}