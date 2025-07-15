import React from 'react';
import CloudImpactMeter from './CloudImpactMeter';

export default {
  title: 'Components/CloudImpactMeter',
  component: CloudImpactMeter,
};

export const Default = () => (
  <CloudImpactMeter
    title="Performance Impact"
    level="High"
    explanation="This feature may affect load times significantly."
    affectedAreas={['Rendering', 'Startup Time', 'Network Usage']}
  />
);
