// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "alexmercerind",
  tagline: "alexmercerind's libraries's docs & blogs.",
  url: "https://alexmercerind.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "alexmercerind",

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Hitesh Kumar Saini",
        logo: {
          alt: "alexmercerind",
          src: "img/docusaurus.png",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://github.com/alexmercerind",
            className: "header-github-link",
            position: "right",
          },
          {
            href: "https://twitter.com/alexmercerind",
            className: "header-twitter-link",
            position: "right",
          },
          {
            href: "https://www.linkedin.com/hitesh-kumar-saini",
            className: "header-linkedin-link",
            position: "right",
          },
          {
            href: "#",
            className: "header-discord-link",
            position: "right",
          },
          {
            href: "https://wa.me/+917905236796",
            className: "header-whatsapp-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Links",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/alexmercerind",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/alexmercerind",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/hitesh-kumar-saini",
              },
              {
                label: "WhatsApp",
                href: "https://wa.me/+917905236796",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hitesh Kumar Saini. Built with React.js & Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
