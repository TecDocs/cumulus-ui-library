// .storybook/main.js
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default {
  framework: '@storybook/react-vite',
  stories: [
    // ✅ Go up one folder from .storybook, then into src/components
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-essentials', '@storybook/addon-themes'],
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [svgr()],
      optimizeDeps: {
        include: ['react'],
        exclude: [
          '@docusaurus/theme-common',
          '@docusaurus/router',
          '@docusaurus/Translate',
          '@docusaurus/useDocusaurusContext',
          '@docusaurus/useIsBrowser',
          '@docusaurus/useIsomorphicLayoutEffect',
          '@docusaurus/useRouteContext',
          '@docusaurus/ExecutionEnvironment',
          '@generated/routes',
        ],
      },
      ssr: {
        external: [
          '@docusaurus/theme-common',
          '@docusaurus/router',
          '@docusaurus/Translate',
          '@docusaurus/useDocusaurusContext',
          '@docusaurus/useIsBrowser',
          '@docusaurus/useIsomorphicLayoutEffect',
          '@docusaurus/useRouteContext',
          '@docusaurus/ExecutionEnvironment',
          '@generated/routes',
        ],
      },
    });
  },
};
