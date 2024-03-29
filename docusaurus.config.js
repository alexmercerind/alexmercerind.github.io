// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/nightOwl");
const darkCodeTheme = require("prism-react-renderer/themes/nightOwl");

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
  projectName: "alexmercerind.github.io",
  deploymentBranch: "gh-pages",
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap",
    "https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto:wght@100;300;400&display=swap",
  ],
  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7639513162093316",
      crossorigin: "anonymous",
    },
  ],
  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-222584022-1",
          anonymizeIP: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      metadata: [
        {
          name: "keywords",
          content:
            "software, software-development, programming, flutter, react, alexmercerind",
        },
      ],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        // logo: {
        //   alt: "alexmercerind",
        //   src: "img/alexmercerind.png",
        // },
        items: [
          // {
          //   type: "doc",
          //   docId: "dart_vlc",
          //   position: "left",
          //   label: "Docs",
          // },
          // {
          //   to: "/docs",
          //   label: "Docs",
          //   position: "left",
          // },
          {
            to: "/",
            label: "Home",
            position: "left",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            to: "/donate",
            label: "Donate",
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
            href: "https://www.linkedin.com/in/hitesh-kumar-saini",
            className: "header-linkedin-link",
            position: "right",
          },
          {
            href: "#",
            className: "header-discord-link",
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
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hitesh Kumar Saini. Built with React.js.`,
      },
      prism: {
        additionalLanguages: ["dart"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
