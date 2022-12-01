import { getDirname, path } from '@vuepress/utils';
import { themeDataPlugin } from '@vuepress/plugin-theme-data';
import { tocPlugin } from '@vuepress/plugin-toc';
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { gitPlugin } from '@vuepress/plugin-git';
import markdownItClass from '@toycode/markdown-it-class';

const __dirname = getDirname(import.meta.url);
const mapping = {
  h2: 'd-docsite--header d-pt72',
  h3: 'd-docsite--subheader d-pt72 d-mt24',
  p: 'd-docsite--paragraph d-my16 d-lh-400',
  ul: 'd-docsite--unordered-list',
  li: 'd-docsite--list-element d-mt8',
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
        offset: 64,
      }),
      prismjsPlugin({}),
      backToTopPlugin(),
      gitPlugin({
        // options
      }),
    ],
    extendsMarkdown: (md) => {
      md.use(markdownItClass, mapping);
    },
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

export default dialtoneVuepressTheme;
