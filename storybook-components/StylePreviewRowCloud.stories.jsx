import React from 'react';
import StylePreviewRowCloud from './StylePreviewRowCloud';

export default {
  title: 'Components/StylePreviewRowCloud',
  component: StylePreviewRowCloud,
};

export const Default = () => (
  <StylePreviewRowCloud
    goodExampleImg="https://via.placeholder.com/300x200?text=Good+Example"
    badExampleImg="https://via.placeholder.com/300x200?text=Needs+Improvement"
  />
);
