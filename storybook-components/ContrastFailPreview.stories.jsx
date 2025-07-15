import React from 'react';
import ContrastFailPreview from './ContrastFailPreview';

export default {
  title: 'Components/ContrastFailPreview',
  component: ContrastFailPreview,
};

export const Default = () => (
  <ContrastFailPreview
    fail={{ label: 'Red on black', text: '#ff0000', bg: '#000000' }}
    pass={{ label: 'White on black', text: '#ffffff', bg: '#000000' }}
  />
);
