import React from 'react';
import A11yChecklistCloud from './A11yChecklistCloud';

export default {
  title: 'Components/A11yChecklistCloud',
  component: A11yChecklistCloud,
};

export const Default = () => (
  <A11yChecklistCloud
    checks={[
      { label: 'Keyboard navigation', pass: true },
      { label: 'Color contrast', pass: false },
      { label: 'Screen reader labels', pass: true },
    ]}
  />
);
