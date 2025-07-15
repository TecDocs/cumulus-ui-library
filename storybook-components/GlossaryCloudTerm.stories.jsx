import React from 'react';
import GlossaryCloudTerm from './GlossaryCloudTerm';

export default {
  title: 'Components/GlossaryCloudTerm',
  component: GlossaryCloudTerm,
};

export const Default = () => (
  <GlossaryCloudTerm title="Design Token">
    A **design token** is a single source of truth that stores design decisions like colors, typography, and spacing.
  </GlossaryCloudTerm>
);
