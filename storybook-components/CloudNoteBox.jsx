import React from 'react';

const CloudNoteBox = ({ children }) => {
  return (
    <div style={{
      background: '#f0fdfa',
      border: '1px solid #bae6fd',
      borderRadius: '16px',
      padding: '1rem',
      marginBottom: '1rem',
      color: '#0f172a',
      boxShadow: '0 0 12px rgba(0, 0, 0, 0.08)'
    }}>
      {children}
    </div>
  );
};

export default CloudNoteBox;
