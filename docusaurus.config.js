// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kathleen McCulloch-Cop',
  url: 'https://kmccullochcop.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/sunflower.ico',
  deploymentBranch: 'master',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kmccullochcop', // Usually your GitHub org/user name.
  projectName: 'kmccullochcop.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All Posts',
          blogSidebarCount:'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Kathleen McCulloch-Cop',
        logo: {
          alt: 'My Site Logo',
          src: 'img/sunflower.ico',
        },
        items: [
          {
            label: 'Resume',
            to: '/McCullochCop_Kathleen_Resume.pdf',
            target:'_blank',
            position: 'left',
          },
          
          {
            type: 'doc',
            docId: 'list-of-works',
            position: 'left',
            label: 'Writing Samples',
          },
          {
            to: 'blog',
            label: 'Digital Hub',
            position: 'left'
          },

        ],
      },
      footer: {
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'kmccu102[at]uottawa[dot]ca',
                to: "/",
              },
              {
                label: '@KathleenMcCop on Twitter',
                href: 'https://twitter.com/KathleenMcCop',
              }
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/kmccullochcop',
              },
              {
                label: 'Gitlab',
                href: 'https://gitlab.com/kmccullochcop',
              },
              {
                label: 'Posture Bot Twitter (Made with TweePy API)',
                href: 'https://twitter.com/situpstr8bot',
              },
            ],
          }
        ],
        style:'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Kathleen McCulloch-Cop. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
