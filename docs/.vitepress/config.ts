import { defineConfig } from "vitepress";
import path from "node:path";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  title: "Unify UI",
  appearance: false,
  vite: {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        "unify-ui": path.join(__dirname, "../../src"),
      },
    },
  },
  themeConfig: {
    outline: [2, 3],
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present luohuidong",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/easy-ui-team/easy-ui" }],
    nav: [
      {
        text: "Guide",
        activeMatch: `^/guide/`,
        link: "/guide/getting-started.html",
      },
      {
        text: "Components",
        activeMatch: `^/components/`,
        link: "/components/general/button/",
      },
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
              { text: "Empty", link: "/components/data-display/empty/" },
              { text: "Popup", link: "/components/data-display/popup/" },
              { text: "Table", link: "/components/data-display/table/" },
              { text: "Tooltip", link: "/components/data-display/tooltip/" },
            ],
          },
          {
            text: "Feedback",
            items: [
              { text: "ConfirmModal", link: "/components/feedback/confirm-modal/" },
              { text: "Modal", link: "/components/feedback/modal/" },
              { text: "NotFound", link: "/components/feedback/not-found/" },
            ],
          },
          {
            text: "Data Entry",
            items: [
              { text: "Checkbox", link: "/components/data-entry/checkbox/" },
              { text: "CheckboxGroup", link: "/components/data-entry/checkbox-group/" },
              { text: "FileDropZone", link: "/components/data-entry/file-drop-zone/" },
              { text: "FilePicker", link: "/components/data-entry/file-picker/" },
              { text: "Input", link: "/components/data-entry/input/" },
              { text: "Password", link: "/components/data-entry/password/" },
              { text: "Radio", link: "/components/data-entry/radio/" },
              { text: "RadioGroup", link: "/components/data-entry/radio-group/" },
              { text: "Switch", link: "/components/data-entry/switch/" },
            ],
          },
        ],
      },
    ],
  },
});