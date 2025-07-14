import React, { useState } from 'react';
export default function DynamicAccessToggle() {
  const [role, setRole] = useState('User');
  const roles = ['User', 'Manager', 'Admin'];

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        {roles.map(r => <option key={r} value={r}>{r}</option>)}
      </select>
      <div style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
        {role === 'Admin' ? '🔓 Full Access Granted' :
         role === 'Manager' ? '🔐 Partial Access Granted' :
         '🔒 Access Restricted'}
      </div>
    </div>
  );
}
