module.exports = {
  sidebar: [
    {
      type: 'link',
      label: '🌤️ Return to Cumulus Landing Page',
      href: '/cumulus-ui-library/',
    },
    {
      type: 'category',
      label: '📚 Storybook Components',
      collapsed: false,
      items: [
        'storybook/storybook-components',
      ],
    },
    {
      type: 'category',
      label: '📓 Confluence Integration',
      collapsed: false,
      items: [
        'confluence/confluence-sops',
        'confluence/approval-flows',
        'confluence/connected-docs',
      ],
    },
    {
      type: 'category',
      label: '🛡️ Compliance & PDF Exports',
      collapsed: false,
      items: [
        'compliance/overview',
        'compliance/pdf-templates',
        'compliance/export-workflows',
      ],
    },
  {
  type: 'category',
  label: '📘 Knowledge Base',
  collapsed: false,
  items: [
    'knowledge-base/intro',
    'knowledge-base/design-tokens',
    'knowledge-base/component-structure',
    'knowledge-base/versioning-strategy',
    'knowledge-base/contribution-guide',
    'knowledge-base/accessibility',
    'knowledge-base/style-rules',
    'knowledge-base/auth-and-permissions',
    'knowledge-base/onboarding',
    'knowledge-base/glossary',
     
  ],
},

  ],
};
