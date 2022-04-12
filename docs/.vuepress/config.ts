import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { resolve } from "path";

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: 'en-US',
  title: 'Dialtone',

  base: '/',

  // theme and its config
  theme: resolve(__dirname, './theme/index.js'),
  themeConfig: {
    logo: '/assets/images/dialpad-logo.svg',
    navbar: [
      {text: 'About', link: '/about/dialtone'},
      {text: 'Getting Started', link: '/getting-started/installation'},
      {text: 'Design', link: '/design/colors/color-palette'},
      {text: 'Utilities', link: '/utilities/backgrounds/background_colors'},
      {text: 'Components', link: '/components/avatar'},
    ],
    sidebar: {
      '/about/': [
        {
          text: 'About',
          children: [
            {text: 'About Dialtone', link: '/about/dialtone.html'},
            {text: 'Contributing', link: '/about/contributing.html'},
          ],
        },
      ],
      '/getting-started/': [
        {
          text: 'Getting started',
          children: [
            {text: 'Installation', link: '/getting-started/installation.html'},
            {text: 'Using Dialtone', link: '/getting-started/usage.html'},
            {text: 'Building Dialtone Locally', link: '/getting-started/building-locally.html'},
          ],
        },
        {
          text: 'Accessibility',
          children: [
            {text: 'Fundamentals', link: '/getting-started/accessibility/fundamentals.html'},
            {text: 'Best Practices', link: '/getting-started/accessibility/best-practices.html'},
            {text: 'Tooling', link: '/getting-started/accessibility/tooling.html'},
          ],
        },
      ],
      '/components/': [
        'Avatar',
        'Badge',
        'Banner',
        'Breadcrumbs',
        'Button',
        'Checkbox',
        'Input',
        'Link',
        'Modal',
        'Notice',
        'Popover',
        'Radio',
        'Select',
        'Skeleton',
        'Table',
        'Tabs',
        'Toast',
        'Toggle',
        'Tooltip'
      ],
      '/design/': [
        {
          text: 'Colors',
          children: [
            {text: 'Color Palette', link: '/design/colors/color-palette.html'},
          ],
        },
        {
          text: 'Icons',
          children: [
            {text: 'Brand Icons', link: '/design/icons/brand.html'},
            {text: 'System Icons', link: '/design/icons/system.html'},
            {text: 'Weather Icons', link: '/design/icons/weather.html'},
            {text: 'Sizes', link: '/design/icons/sizes.html'},
            {text: 'Adding Icons', link: '/design/icons/adding.html'},
          ],
        },
        {
          text: 'Illustrations',
          children: [
            {text: 'Patterns', link: '/design/illustrations/patterns.html'},
            {text: 'Spot Illustrations', link: '/design/illustrations/spot.html'},
          ],
        },
        {
          text: 'Spacing',
          children: [
            {text: 'Spacing System', link: '/design/spacing/spacing-system.html'},
          ],
        },
      ],
      '/utilities/': [
        {
          text: 'Backgrounds',
          children: [
            '/utilities/backgrounds/background_colors',
          ],
        },
      ],
    },
    editLink: false,
    darkMode: false,
    // contributors: false,
    // lastUpdated: false,
  },

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
  },
})
