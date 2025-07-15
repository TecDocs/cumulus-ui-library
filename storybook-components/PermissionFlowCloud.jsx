import React from 'react';

export default function PermissionFlowCloud() {
  const containerStyle = {
    padding: '1.25rem',
    marginTop: '1rem',
    borderRadius: '12px',
    backgroundColor: '#f4f7fa',
    border: '1px solid #cbd5e0',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#111111',
    letterSpacing: '0.5px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>
        User → Role Check → Permission Rules → Component Access
      </p>
    </div>
  );
}
