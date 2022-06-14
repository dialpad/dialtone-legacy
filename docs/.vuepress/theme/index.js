const { path } = require('@vuepress/utils')
const { defaultTheme } = require('vuepress')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')

exports.dialtoneTheme = (options) => {
  return {
    name: '@dialpad/vuepress-theme-default',
    extends: defaultTheme(options),
    layouts: {
      Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    },
    alias: {
      '@theme/Navbar.vue': path.resolve(__dirname, './components/Navbar.vue'),
      '@theme/Home.vue': path.resolve(__dirname, './components/Home.vue'),
      '@theme/Sidebar.vue': path.resolve(__dirname, './components/Sidebar.vue'),
      '@theme/PageHeader.vue': path.resolve(__dirname, './components/PageHeader.vue'),
      '@theme/PageToc.vue': path.resolve(__dirname, './components/PageToc.vue')
    },
    plugins: [
      mediumZoomPlugin({
        selector: '.zoomable-image'
      }),
    ],
  }
};
