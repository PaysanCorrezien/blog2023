// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PaysanCorrezien Blog",
  tagline: "Tech and Open source Docs",
  favicon: "img/icons8-source-code-100.png",

  // Set the production url of your site here
  url: "https://paysancorrezien.xyz",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "paysancorrezien", // Usually your GitHub org/user name.
  projectName: "blog2023", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/paysancorrezien/blog2023/",
        },
        blog: {
          // feedOptions: {
          //   type: "all",
          //   copyright: `Copyright © ${new Date().getFullYear()} Dylan Meunier.`,
          //   createFeedItems: async (params) => {
          //     const { blogPosts, defaultCreateFeedItems, ...rest } = params;
          //     return defaultCreateFeedItems({
          //       // keep only the 10 most recent blog posts in the feed
          //       blogPosts: blogPosts.filter((item, index) => index < 10),
          //     });
          //   },
          // },

          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/paysancorrezien/blog2023/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "DylanBlog",
        logo: {
          alt: "My Code Logo",
          src: "img/codelogo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Knowledge Base",
          },
          {
            type: "docSidebar",
            sidebarId: "projectsSidebar",
            position: "left",
            label: "Projects",
          },
          { to: "/blog", label: "Articles", position: "left" },
          {
            to: "/about",
            label: "About Me",
            position: "right",
          },
          {
            type: "docSidebar",
            sidebarId: "techstackSidebar",
            position: "right",
            label: "My Tech Stack",
          },
          {
            to: "AboutSite",
            label: "About This Site",
            position: "right",
          },
          {
            href: "https://github.com/paysancorrezien",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()
          } Dylan Meunier, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
