import { defineUserConfig } from 'vuepress';
import { getDirname, path } from '@vuepress/utils';
import { viteBundler } from '@vuepress/bundler-vite';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import anchor from 'markdown-it-anchor';

const sidebar = require('../_data/site-nav.json');
const { dialtoneVuepressTheme } = require('./theme');
const baseURL = (process.env.VUEPRESS_BASE_URL ?? '/');

const themeConfig = {
  logo: baseURL + 'assets/images/dialpad-logo.svg',
  navbar: [
    { text: 'Home', link: '/' },
    { text: 'Design', link: '/design/' },
    { text: 'Components', link: '/components/' },
    { text: 'Utilities', link: '/utilities/' },
    { text: 'Guides', link: '/guides/' },
    { text: 'About', link: '/about/dialtone' },
  ],
  sidebar,
  sidebarDepth: 0,
  editLink: false,
  colorModeSwitch: false,
  contributors: false,
};

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  // site config
  lang: 'en-US',
  title: 'Dialtone',

  base: baseURL,

  port: 4000,

  // theme and its config
  theme: dialtoneVuepressTheme(themeConfig),

  bundler: viteBundler({
    viteOptions: {
      css: {
        devSourcemap: true,
      },
      resolve: {
        alias: {
          vue$: 'vue/dist/vue.esm-bundler.js',
        },
      },
    },
    vuePluginOptions: {
      template: {
        compilerOptions: {
          whitespace: 'preserve',
          // isCustomElement: (tag) => tag.startsWith('dt-'),
        },
      },
    },
  }),

  // Header links and meta tags
  head: [
    // Favicons
    ['link', {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: baseURL + 'assets/images/favicons/apple-touch-icon.png',
    }],
    ['link', { rel: 'icon', href: baseURL + 'assets/images/favicons/favicon.svg' }],
    ['link', { rel: 'manifest', href: baseURL + 'assets/images/favicons/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: baseURL + 'assets/images/favicons/safari-pinned-tab.svg', color: '#7C52FF' }],
    ['meta', { name: 'msapplication-TileColor', content: '#7C52FF' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],

    // Social
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://dialpad.design/' }],
    ['meta', {
      property: 'og:image',
      itemprop: 'image primaryImageOfPage',
      content: baseURL + 'assets/images/favicons/apple-touch-icon-180x180.png',
    }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:domain', content: 'dialpad.design' }],
    ['meta', { name: 'twitter:title', property: 'og:title', itemprop: 'title name', content: 'Dialtone' }],
    ['meta', {
      name: 'twitter:description',
      property: 'og:description',
      itemprop: 'description',
      content: 'Dialtone is the design system and resources for the Dialpad team.',
    }],
  ],

  // markdown config
  markdown: {
    anchor: {
      level: [1, 2, 3],
      permalink: anchor.permalink.ariaHidden({
        class: 'header-anchor d-link d-td-none',
      }),
    },
    code: {
      lineNumbers: false,
    },
    headers: {
      level: [2], // Generated data header levels (used for toc)
    },
  },

  alias: {
    '@data': path.resolve(__dirname, '../_data/'), // Needed to import json data.
    '@svgIcons': path.resolve(__dirname, '../../lib/dist/vue/icons/'), // Needed to easily import svg
    '@v7Icons': path.resolve(__dirname, '../../lib/dist/vue/v7/'), // Needed to easily import new icons
    '@exampleComponents': path.resolve(__dirname, './exampleComponents'),
    '@baseComponents': path.resolve(__dirname, './baseComponents'),
    '@views': path.resolve(__dirname, './views'),
    '@mixins': path.resolve(__dirname, './common/mixins/'),
    '@': path.resolve(__dirname, '../'),
  },

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-0YV8QJ44LF',
    }),
  ],
});
