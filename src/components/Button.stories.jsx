import React from 'react';
import { ReactComponent as CloudIcon } from './cloud.svg';

const Button = ({ label }) => (
  <button style={{ padding: '10px 20px', fontSize: '16px' }}>
    <CloudIcon style={{ width: '1em', height: '1em', marginRight: '8px' }} />
    {label}
  </button>
);

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = {
  args: {
    label: 'Click Me',
  },
};
