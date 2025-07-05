import React from 'react';
import HoverExplain from './HoverExplain';

export default {
  title: 'Cumulus/HoverExplain',
  component: HoverExplain,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => (
  <div style={{ padding: '4rem', textAlign: 'center' }}>
    <HoverExplain {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  term: 'Serverless',
  definition: 'A cloud-native model where infrastructure is fully managed by a provider.',
};
