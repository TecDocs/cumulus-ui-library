import React from 'react';
import HoverWordCloudRow from './HoverWordCloudRow';

/**
 * Story: HoverWordCloudRow Demo
 * - Renders a centered row of 5 hoverable words.
 * - Each word displays a tooltip cloud on hover.
 */
export default {
  title: 'Components/HoverWordCloudRow',
  component: HoverWordCloudRow,
};

const Template = (args) => <HoverWordCloudRow {...args} />;

export const WordRowDemo = Template.bind({});
WordRowDemo.args = {
  // No args currently – component is self-contained
};
