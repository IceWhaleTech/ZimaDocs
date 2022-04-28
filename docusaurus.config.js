// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZimaDocs',
  tagline: 'Build your own Home Cloud with interesting Apps',
  url: 'https://docs.zimaboard.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'IceWhaleTech',
  projectName: 'ZimaDocs',

  themes: [
    'docusaurus-theme-frontmatter',
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/IceWhaleTech/ZimaDocs/edit/main/',
          remarkPlugins: [simplePlantUML],
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-4W3X8H8867',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'zimaboard',
        path: 'zimaboard',
        routeBasePath: 'zimaboard',
        sidebarPath: require.resolve('./sidebarsZimaBoard.js'),
        remarkPlugins: [simplePlantUML],
        editUrl: 'https://github.com/IceWhaleTech/ZimaDocs/edit/main/zimaboard/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'casaos',
        path: 'casaos',
        routeBasePath: 'casaos',
        sidebarPath: require.resolve('./sidebarsCasaOS.js'),
        remarkPlugins: [simplePlantUML],
        editUrl: 'https://github.com/IceWhaleTech/ZimaDocs/edit/main/casaos/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: true,
      navbar: {
        title: 'ZimaDocs',
        logo: {
          alt: 'ZimaDocs',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            type: 'doc',
            docId: 'intro',
            docsPluginId: 'zimaboard',
            position: 'left',
            label: 'ZimaBoard',
          },
          {
            type: 'doc',
            docId: 'intro',
            docsPluginId: 'casaos',
            position: 'left',
            label: 'CasaOS',
          },
          {to: 'explore', label: 'Explore', position: 'left'},
          {
            href: 'https://shop.zimaboard.com/',
            position: 'right',
            label: 'Shop',
          },
          {
            href: 'https://www.zimaboard.com/',
            position: 'right',
            label: 'Main Site',
          },
          {
            href: 'https://discord.gg/TZjYGnAW3M',
            className: 'header-discord-link',
            'aria-label': 'Discord server',
            position: 'right',
          },
          {
            href: 'https://github.com/IceWhaleTech/ZimaDocs',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
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
                label: 'ZimaBoard',
                to: 'zimaboard/intro',
              },
              {
                label: 'CasaOS',
                to: 'casaos/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/TZjYGnAW3M',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.zimaboard.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/IceWhaleTech/ZimaDocs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Icewhale Technology<br/>Built with ❤️ and you, Based on Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
