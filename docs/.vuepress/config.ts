import { defineUserConfig } from 'vuepress'
import { resolve } from 'path';
const sidebar = require('../_data/site-nav');
const { dialtoneTheme } = require('./theme');

const themeConfig = {
  logo: '/assets/images/dialpad-logo.svg',
  navbar: [
    {text: 'About', link: '/about/dialtone'},
    {text: 'Getting Started', link: '/getting-started/installation'},
    {text: 'Design', link: '/design/colors/color-palette'},
    {text: 'Utilities', link: '/utilities/backgrounds/attachment'},
    {text: 'Components', link: '/components/avatar'},
  ],
  sidebar,
  editLink: false,
  darkMode: false,
  // contributors: false,
  // lastUpdated: false,
};

export default defineUserConfig({
  // site config
  lang: 'en-US',
  title: 'Dialtone',

  base: '/vuepress/',

  // theme and its config
  theme: dialtoneTheme(themeConfig),

  // Header links and meta tags
  head: [
    // Favicons
    ['link', {rel: "apple-touch-icon", sizes: "180x180", href: "/assets/images/favicons/apple-touch-icon.png"}],
    ['link', {rel: "icon", href: "/assets/images/favicons/favicon.svg"}],
    ['link', {rel: "manifest", href: "/assets/images/favicons/site.webmanifest"}],
    ['link', {rel: "mask-icon", href: "/assets/images/favicons/safari-pinned-tab.svg", color: "#6C3DFF"}],
    ['meta', {name: "msapplication-TileColor", content: "#6C3DFF"}],
    ['meta', {name: "theme-color", content: "#ffffff"}],

    // Social
    ['meta', {property: "og:type", content: "website"}],
    ['meta', {property: "og:url", content: "https://dialpad.design/"}],
    ['meta', {
      property: "og:image",
      itemprop: "image primaryImageOfPage",
      content: "/assets/images/favicons/apple-touch-icon-180x180.png"
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

    // CSS
    ['link', {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"}],
  ],

  // markdown config
  markdown: {
    toc: false,
    code: {
      lineNumbers: false
    }
  },

  alias: {
    '@data': resolve(__dirname, '../_data/'), // Needed to import json data.
    '@svgIcons': resolve(__dirname, '../../lib/dist/vue/icons/'), // Needed to easily import svg
    '@theme': resolve(__dirname, './theme'),
    '@exampleComponents': resolve(__dirname, './exampleComponents'),
  },
})
