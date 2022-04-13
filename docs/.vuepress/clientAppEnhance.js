import {defineClientAppEnhance} from '@vuepress/client';

import CodeWellHeader from './components/CodeWellHeader.vue';
import Icons from "./views/Icons.vue";
import Colors from "./views/Colors.vue";
import UtilityClassTable from "./components/UtilityClassTable.vue";
import ComponentClassTable from "./components/ComponentClassTable.vue";
import WeatherCodesTable from "./components/WeatherCodesTable.vue";
import SpacingSystemTable from "./components/SpacingSystemTable.vue";
import IconSizesTable from "./components/IconSizesTable.vue";
import ComponentAccessibleTable from "./components/ComponentAccessibleTable.vue";

// ICons
import IconInfo from '@svgIcons/IconInfo.vue';
import IconLightbulb from "@svgIcons/IconLightbulb.vue";
import IconCheckCircle from "@svgIcons/IconCheckCircle.vue";
import IconWarning from "@svgIcons/IconWarning.vue";
import IconError from "@svgIcons/IconError.vue";
import IconClose from "@svgIcons/IconClose.vue";
import IconCheckmark from "@svgIcons/IconCheckmark.vue";

import '../.././lib/build/less/dialtone.less';
import './styles/dialtone-docs.less';
import './styles/overrides.less';
import './styles/hljs-dialpad.less';

export default defineClientAppEnhance(({app, router, siteData}) => {
    app.component('component-class-table', ComponentClassTable);
    app.component('weather-codes-table', WeatherCodesTable);
    app.component('utility-class-table', UtilityClassTable);
    app.component('spacing-system-table', SpacingSystemTable);
    app.component('icon-sizes-table', IconSizesTable);
    app.component('component-accessible-table', ComponentAccessibleTable);
    app.component('code-well-header', CodeWellHeader);
    app.component('icons', Icons);
    app.component('colors', Colors);
    app.component('icon-info', IconInfo);
    app.component('icon-lightbulb', IconLightbulb);
    app.component('icon-check-circle', IconCheckCircle);
    app.component('icon-warning', IconWarning);
    app.component('icon-error', IconError);
    app.component('icon-close', IconClose);
    app.component('icon-checkmark', IconCheckmark);
})
