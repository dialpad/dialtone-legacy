const { path } = require('@vuepress/utils');
const { defaultTheme } = require('vuepress');
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom');
const { activeHeaderLinksPlugin } = require('@vuepress/plugin-active-header-links');

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
      '@theme/PageToc.vue': path.resolve(__dirname, './components/PageToc.vue'),
    },
    plugins: [
      mediumZoomPlugin({
        selector: '.zoomable-image',
      }),
      activeHeaderLinksPlugin({
        headerLinkSelector: 'a.toc-link',
      }),
    ],
    async onInitialized (app) {
      const blogPostsFrontmatter = app
        .pages
        .filter(page => page.path.includes('/about/whats_new/posts'))
        .map(post => {
          return {
            ...post.frontmatter,
            firstParagraph: post.contentRendered.split('\n').find(f => f.startsWith('<p>')),
          };
        });

      const blogIndex = app.pages.find(page => page.path === '/about/whats_new/');
      blogIndex.data.blogPosts = blogPostsFrontmatter;
    },
    extendsPage: (page, app) => {
      if (page.path === '/about/whats_new/') {
        page.data.blogPosts = [];
      }
    },
  };
};
