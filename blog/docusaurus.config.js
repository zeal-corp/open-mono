/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "zeal open mono",
  tagline: "on culture, problems, and solutions",
  url: "https://dev-blog.zeal.com",
  baseUrl: "/open-mono/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "zeal-corp",
  projectName: "open-mono",
  themeConfig: {
    navbar: {
      title: "open mono",
      logo: {
        alt: "zeal logo",
        src: "/img/ZEAL_Logo_White_WEB.png",
      },
      items: [
        {
          type: "doc",
          docId: "posts/testing-at-zeal",
          position: "left",
          label: "latest post",
        },
        {
          type: "doc",
          docId: "culture/index",
          position: "left",
          label: "culture",
        },
        {
          type: "doc",
          docId: "jobs/index",
          position: "right",
          label: "jobs",
        },
        {
          href: "https://github.com/zeal-corp/open-mono",
          label: "github",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "posts",
          items: [
            {
              label: "latest",
              to: "/docs/posts/index",
            },
          ],
        },
        {
          title: "culture",
          items: [
            {
              label: "latest",
              to: "/docs/culture/index",
            },
          ],
        },
        {
          title: "jobs",
          items: [
            {
              label: "latest",
              to: "/docs/jobs/index",
            },
          ],
        },
      ],
      copyright: `copyright © ${new Date().getFullYear()} zeal, inc. via docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/zeal-corp/open-mono/edit/main/blog/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/zeal-corp/open-mono/edit/main/blog/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
