// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cumulus UI Library',
  tagline: 'Build scalable UI with confidence',
  favicon: 'img/cloud.svg',

  url: 'https://tecdocs.github.io',
  baseUrl: '/cumulus-ui-library/',
  organizationName: 'TecDocs',
  projectName: 'cumulus-ui-library',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/TecDocs/cumulus-ui-library/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

 themeConfig: {
  image: 'img/cloud.svg',
  navbar: {
    title: 'Cumulus UI Library',
    logo: {
      alt: 'Cumulus Logo',
      src: 'img/stormcloud.svg',
    },
    items: [
      {
        type: 'html',
        position: 'left',
        value: `
          <span class="header-project-desc">
            Welcome to Cumulus UI Library – A fully documented internal UI and design system library built for enterprise workflows
          </span>
        `,
      },
      // 🚫 Removed the right-side <div class="header-icon-stack"> to prevent conflict
    ],
  },

  footer: {
    style: 'dark',
    links: [
      {
        title: 'Connect',
        items: [
          {
            label: 'Portfolio',
            href: 'https://joshua-schoen.com',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/TecDocs/cumulus-ui-library',
          },
          {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/joshua-schoen-77b742252/',
          },
          {
            label: 'Substack',
            href: 'https://substack.com/@tecdocs',
          },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Joshua Schoen • Cumulus UI`,
  },

  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
},


  plugins: [],

  future: {
    v4: true,
  },
};

export default config;
