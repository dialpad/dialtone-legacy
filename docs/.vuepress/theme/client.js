import { defineClientConfig } from '@vuepress/client';
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';

import '@dialpad/dialtone/lib/build/less/dialtone.less';
import './assets/less/dialtone-docs.less';

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
  },
});
