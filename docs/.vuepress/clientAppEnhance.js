import {defineClientAppEnhance} from '@vuepress/client';

import CodeWellHeader from './components/CodeWellHeader.vue';
import Icons from "./views/Icons.vue";
import Colors from "./views/Colors.vue";
import UtilityClassTable from "./components/UtilityClassTable.vue";
import ComponentClassTable from "./components/ComponentClassTable.vue";

import '../.././lib/build/less/dialtone.less';
import './styles/dialtone-docs.less';
import './styles/overrides.less';
import './styles/hljs-dialpad.less';

export default defineClientAppEnhance(({app, router, siteData}) => {
    app.component('component-class-table', ComponentClassTable);
    app.component('utility-class-table', UtilityClassTable);
    app.component('code-well-header', CodeWellHeader);
    app.component('icons', Icons);
    app.component('colors', Colors);
})
