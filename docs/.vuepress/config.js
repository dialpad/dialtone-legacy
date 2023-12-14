import { defineUserConfig } from 'vuepress';
import { getDirname, path } from '@vuepress/utils';
import { viteBundler } from '@vuepress/bundler-vite';
import viteSvgLoader from 'vite-svg-loader';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { seoPlugin } from 'vuepress-plugin-seo2';
import anchor from 'markdown-it-anchor';

const sidebar = require('../_data/site-nav.json');
const { dialtoneVuepressTheme } = require('./theme');
const siteURL = 'https://dialpad.design/';
const baseURL = (process.env.VUEPRESS_BASE_URL ?? '/');

const themeConfig = {
  logo: baseURL + 'assets/images/dialpad-logo.svg',
  navbar: [
    { text: 'Home', link: '/' },
    { text: 'Design', link: '/design/' },
    { text: 'Components', link: '/components/' },
    { text: 'Utilities', link: '/utilities/' },
    { text: 'Tokens', link: '/tokens/' },
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
  title: 'Dialtone Design System',

  base: baseURL,

  port: 4000,

  // theme and its config
  theme: dialtoneVuepressTheme(themeConfig),

  bundler: viteBundler({
    viteOptions: {
      plugins: [viteSvgLoader()],
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
    ['link', { rel: 'canonical', href: 'https://dialtone.dialpad.com' }],
    ['meta', { name: 'msapplication-TileColor', content: '#7C52FF' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { 'http-equiv': 'refresh', content: '0; url=https://dialtone.dialpad.com' }],
    ['title', { content: 'Redirecting to https://dialtone.dialpad.com' }],

  ],

  // markdown config
  markdown: {
    anchor: {
      level: [1, 2, 3],
      permalink: anchor.permalink.ariaHidden({
        class: 'header-anchor d-link',
      }),
    },
    code: {
      lineNumbers: false,
    },
    headers: {
      level: [2, 3], // Generated data header levels (used for toc)
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
    '@projectRoot': path.resolve(__dirname, '../../'),
    '@': path.resolve(__dirname, '../'),
  },

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-0YV8QJ44LF',
    }),
    seoPlugin({
      hostname: siteURL,
      ogp: (ogp, page) => ({
        ...ogp,
        'og:image': siteURL + baseURL + page.frontmatter.image || ogp['og:image'],
      }),
    }),
  ],
});
