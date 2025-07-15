import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default {
  framework: '@storybook/react-vite',

  stories: [
    '../storybook-components/**/*.stories.@(js|jsx|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-themes'
  ],

  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [svgr()],
      optimizeDeps: {
        include: ['react']
      }
    });
  }
};
