import React from 'react';
import HelloCloud from './HelloCloud';
import DocusaurusWrapper from './DocusaurusWrapper';

export default {
  title: '☁️ Cumulus/Hello Cloud',
  component: HelloCloud,
};

const Template = (args) => (
  <DocusaurusWrapper>
    <HelloCloud {...args} />
  </DocusaurusWrapper>
);

export const Default = Template.bind({});
Default.args = {
  message: '☁️ Hello from the cloud!',
};

export const CustomMessage = Template.bind({});
CustomMessage.args = {
  message: '🌩️ Stormy hello from Cumulus!',
};