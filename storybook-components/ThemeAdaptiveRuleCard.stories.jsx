import React from 'react';
import ThemeAdaptiveRuleCard from './ThemeAdaptiveRuleCard';

export default {
  title: 'Components/ThemeAdaptiveRuleCard',
  component: ThemeAdaptiveRuleCard,
};

export const Default = () => (
  <ThemeAdaptiveRuleCard
    title="Spacing Rules"
    lightImg="https://via.placeholder.com/600x300?text=Light+Mode"
    darkImg="https://via.placeholder.com/600x300?text=Dark+Mode"
    description="Spacing tokens ensure consistent layouts across components and pages."
  />
);
