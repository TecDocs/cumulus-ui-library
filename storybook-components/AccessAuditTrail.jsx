import React from 'react';
export default function AccessAuditTrail() {
  const logs = [
    { user: 'User123', action: 'Access Denied', reason: 'Insufficient Role' },
    { user: 'Admin42', action: 'Access Granted', reason: 'Admin Role' },
  ];

  return (
    <div style={{ padding: '1rem', maxWidth: '500px', margin: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>User</th><th>Action</th><th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx}>
              <td>{log.user}</td><td>{log.action}</td><td>{log.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
