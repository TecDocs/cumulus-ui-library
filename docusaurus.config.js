// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cumulus UI Library',
  tagline: 'Build scalable UI with confidence',
  favicon: 'img/cloud.svg', // ✅ Your cloud icon as favicon

  // ✅ GitHub Pages config
  url: 'https://tecdocs.github.io',
  baseUrl: '/cumulus-ui-library/', // ✅ Matches your GitHub repo name
  organizationName: 'TecDocs', // ✅ GitHub username or org
  projectName: 'cumulus-ui-library', // ✅ GitHub repo name
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
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Cumulus UI Library',
      logo: {
        alt: 'Cumulus Logo',
        src: 'img/cloud.svg', // ✅ Cloud icon as logo
      },
      items: [
        {
          href: 'https://joshua-schoen.com',
          position: 'right',
          className: 'custom-icon portfolio-icon',
          'aria-label': 'Portfolio',
        },
        {
          href: 'https://github.com/TecDocs/cumulus-ui-library',
          position: 'right',
          className: 'custom-icon github-icon',
          'aria-label': 'GitHub',
        },
        {
          href: 'https://www.linkedin.com/in/joshua-schoen-77b742252/',
          position: 'right',
          className: 'custom-icon linkedin-icon',
          'aria-label': 'LinkedIn',
        },
        {
          href: 'https://substack.com/@tecdocs',
          position: 'right',
          className: 'custom-icon substack-icon',
          'aria-label': 'Substack',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
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
