import { getDirname, path } from '@vuepress/utils';
import { themeDataPlugin } from '@vuepress/plugin-theme-data';
import { tocPlugin } from '@vuepress/plugin-toc';
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { gitPlugin } from '@vuepress/plugin-git';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';
import markdownItClass from '@toycode/markdown-it-class';

const __dirname = getDirname(import.meta.url);
const mapping = {
  h2: 'd-docsite--header-2 d-my24',
  h3: 'd-docsite--header-3 d-my24',
  h4: 'd-docsite--header-4 d-my24',
  p: 'd-docsite--paragraph d-mb8 d-lh-400 d-wmx75ch',
  ul: 'd-docsite--unordered-list d-mb16',
  ol: 'd-docsite--ordered-list d-mb16',
  li: 'd-docsite--list-element d-my8',
  img: 'd-docsite--image d-wmx100p',
  a: 'd-docsite--link d-link',
};

export const dialtoneVuepressTheme = (options) => {
  return {
    name: '@dialpad/vuepress-theme-dialtone',
    clientConfigFile: path.resolve(__dirname, 'client.js'),
    plugins: [
      themeDataPlugin({
        themeData: options,
      }),
      tocPlugin({
        defaultPropsOptions: {
          containerTag: '',
          listClass: 'toc-list d-ls-reset',
          itemClass: 'toc-item d-py2',
          linkClass: 'toc-link',
        },
      }),
      activeHeaderLinksPlugin({
        headerLinkSelector: 'a.toc-link',
        offset: 128,
      }),
      prismjsPlugin({}),
      backToTopPlugin(),
      gitPlugin({
        // options
      }),
      docsearchPlugin({
        indexName: 'dialpad',
        apiKey: '6436ebddb959748daeec411eb388a99d',
        container: '#algolia-search-container',
        appId: 'Y5HG9UX6KM',
        placeholder: 'Search Dialtone',
      }),
      sitemapPlugin({
        hostname: 'https://dialpad.design',
      }),
    ],
    extendsMarkdown: (md) => {
      md.use(markdownItClass, mapping);
    },
    onInitialized (app) {
      const blogPostsFrontmatter = app.pages
        .filter(page => page.path.includes('/about/whats_new/posts'))
        .map(post => ({
          ...post.frontmatter,
          firstParagraph: post.contentRendered.split('\n').find(f => f.startsWith('<p>')),
        }));

      const componentsIndexPath = '/components/';
      const componentsFrontmatter = app.pages
        .filter(page => page.path.includes(componentsIndexPath) && page.path !== componentsIndexPath)
        .map(component => ({
          name: component.frontmatter.title.toLowerCase().replaceAll(' ', '-'),
          link: component.frontmatter.title.toLowerCase().replaceAll(' ', '_'),
          ...component.frontmatter,
        }));

      const blogIndex = app.pages.find(page => page.path === '/about/whats_new/');
      blogIndex.data.blogPosts = blogPostsFrontmatter;

      const componentsIndexPage = app.pages.find(page => page.path === componentsIndexPath);
      componentsIndexPage.data.componentsFrontmatter = componentsFrontmatter;
    },
    extendsPage: (page, app) => {
      if (page.path === '/about/whats_new/') {
        page.data.blogPosts = [];
      }
      if (page.path === '/components/') {
        page.data.componentsFrontmatter = [];
      }
    },
  };
};

export default dialtoneVuepressTheme;
