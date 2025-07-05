import { themes } from '@storybook/theming';
import './storybook.css'; // Theme-aware styles

export const parameters = {
  themes: {
    default: 'Cumulus Light',
    list: [
      {
        name: 'Cumulus Light',
        class: 'theme-light',
        color: '#aee1f9',
        default: true,
      },
      {
        name: 'Cumulus Dark',
        class: 'theme-dark',
        color: '#2e3a4b',
      },
    ],
  },
};