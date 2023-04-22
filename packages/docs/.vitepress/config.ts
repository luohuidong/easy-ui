import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Easy UI",
  appearance: false,
  themeConfig: {
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present luohuidong",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/easy-ui-team/easy-ui" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [{ text: "Getting Started", link: "/guide/getting-started" }],
      },
      {
        text: "Components",
        items: [
          {
            text: "General",
            items: [{ text: "Button", link: "/components/general/button/" }],
          },
          {
            text: "Data Display",
            items: [
              { text: "Table", link: "/components/data-display/table/" },
              { text: "Tooltip", link: "/components/data-display/tooltip/" },
              { text: "Popup", link: "/components/data-display/popup/" },
            ],
          },
          {
            text: "Data Entry",
            items: [{ text: "Input", link: "/components/data-entry/input/" }],
          },
        ],
      },
    ],
  },
});
