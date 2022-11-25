import { resolve } from 'path';
import { themeDataPlugin } from '@vuepress/plugin-theme-data';
import { tocPlugin } from '@vuepress/plugin-toc';
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links';

export const dialtoneVuepressTheme = (options) => {
  return {
    name: '@dialpad/vuepress-theme-dialtone',
    clientConfigFile: resolve(__dirname, 'client.js'),
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
      }),
    ],
  };
};
