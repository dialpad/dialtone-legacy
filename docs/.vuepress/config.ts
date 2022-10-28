import { defineUserConfig } from 'vuepress';
import { resolve } from 'path';

const sidebar = require('../_data/site-nav.json');
const { dialtoneTheme } = require('./theme');
const baseURL = (process.env.VUEPRESS_BASE_URL ?? "/") as `/${string}/`;

const { viteBundler } = require('@vuepress/bundler-vite');
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics');
const { tocPlugin } = require('@vuepress/plugin-toc');

const themeConfig = {
  logo: baseURL + 'assets/images/dialpad-logo.svg',
  navbar: [
    {text: 'Home', link: '/'},
    {text: 'Design', link: '/design/colors/color-palette'},
    {text: 'Components', link: '/components/avatar'},
    {text: 'Utilities', link: '/utilities/backgrounds/attachment'},
    {text: 'Guides', link: '/guides/getting-started/installation'},
    {text: 'About', link: '/about/dialtone'},
  ],
  sidebar,
  sidebarDepth: 0,
  editLink: false,
  colorModeSwitch: false,
  contributors: false,
  themePlugins: {
    mediumZoom: false,
  }
};

const isDevelopment = (process.env.NODE_ENV === 'development');
const dialtoneCSS = isDevelopment ? 'dialtone.css' : 'dialtone.min.css';
const dialtoneDocsCSS = isDevelopment ? 'dialtone-docs.css' : 'dialtone-docs.min.css';

export default defineUserConfig({
  // site config
  lang: 'en-US',
  title: 'Dialtone',

  base: baseURL,

  port: 4000,

  // theme and its config
  theme: dialtoneTheme(themeConfig),

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {
      template: {
        compilerOptions: {
          whitespace: 'preserve'
        }
      }
    },
  }),

  // Header links and meta tags
  head: [
    // Favicons
    ['link', {rel: "apple-touch-icon", sizes: "180x180", href: baseURL + "assets/images/favicons/apple-touch-icon.png"}],
    ['link', {rel: "icon", href: baseURL + "assets/images/favicons/favicon.svg"}],
    ['link', {rel: "manifest", href: baseURL + "assets/images/favicons/site.webmanifest"}],
    ['link', {rel: "mask-icon", href: baseURL + "assets/images/favicons/safari-pinned-tab.svg", color: "#7C52FF"}],
    ['meta', {name: "msapplication-TileColor", content: "#7C52FF"}],
    ['meta', {name: "theme-color", content: "#ffffff"}],

    // Social
    ['meta', {property: "og:type", content: "website"}],
    ['meta', {property: "og:url", content: "https://dialpad.design/"}],
    ['meta', {
      property: "og:image",
      itemprop: "image primaryImageOfPage",
      content: baseURL + "assets/images/favicons/apple-touch-icon-180x180.png",
    }],
    ['meta', {name: "twitter:card", content: "summary"}],
    ['meta', {name: "twitter:domain", content: "dialpad.design"}],
    ['meta', {name: "twitter:title", property: "og:title", itemprop: "title name", content: "Dialtone"}],
    ['meta', {
      name: "twitter:description",
      property: "og:description",
      itemprop: "description",
      content: "Dialtone is the design system and resources for the Dialpad team."
    }],
  ],

  // markdown config
  markdown: {
    anchor: {
      level: [1, 2],
    },
    code: {
      lineNumbers: false
    },
    extractHeaders: {
      level: [2] // Generated data header levels (used for toc)
    }
  },

  alias: {
    '@data': resolve(__dirname, '../_data/'), // Needed to import json data.
    '@svgIcons': resolve(__dirname, '../../lib/dist/vue/icons/'), // Needed to easily import svg
    '@v7Icons': resolve(__dirname, '../../lib/dist/vue/v7/'), // Needed to easily import new icons
    '@theme': resolve(__dirname, './theme'),
    '@exampleComponents': resolve(__dirname, './exampleComponents'),
    '@baseComponents': resolve(__dirname, './baseComponents'),
    '@dialtoneCSS': resolve(__dirname, '../assets/css/' + dialtoneCSS),
    '@dialtoneDocsCSS': resolve(__dirname, '../assets/css/' + dialtoneDocsCSS),
    '@mixins': resolve(__dirname, './common/mixins/'),
  },

  plugins: [
    tocPlugin({}),
    googleAnalyticsPlugin({
      id: 'G-0YV8QJ44LF',
    }),
  ],
})
