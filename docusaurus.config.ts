import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Agent Mantis',
  tagline: 'AI-powered test automation that adapts to your application',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.agentmantis.com',
  baseUrl: '/',

  organizationName: 'AgentMantis',
  projectName: 'agentmantis-docs',
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
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/AgentMantis/agentmantis-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/AgentMantis/agentmantis-docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/agent-mantis.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Agent Mantis',
      logo: {
        alt: 'Agent Mantis Logo',
        src: 'img/agent-mantis.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/reference/api/',
          label: 'API',
          position: 'left',
        },
        {
          to: '/docs/releases/changelog',
          label: 'Releases',
          position: 'left',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/AgentMantis',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started/intro',
            },
            {
              label: 'Guides',
              to: '/docs/category/guides',
            },
            {
              label: 'API Reference',
              to: '/docs/reference/api/',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Portal',
              to: '/docs/product/portal/overview',
            },
            {
              label: 'Editor',
              to: '/docs/product/editor/overview',
            },
            {
              label: 'RunningMan',
              to: '/docs/product/runningman/overview',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Releases',
              to: '/docs/releases/changelog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AgentMantis',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Agent Mantis Pty Ltd. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
