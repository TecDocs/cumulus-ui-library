import React from 'react';

if (typeof window !== 'undefined') {
  window.React = React;
  console.log('[DEBUG] globalReactFix.js ran in browser context');
}
