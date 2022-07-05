import { defineClientConfig } from '@vuepress/client';

// Common views
import Icons from './views/Icons.vue';
import Colors from './views/Colors.vue';

// Base components
import CodeWellHeader from './baseComponents/CodeWellHeader.vue';
import UtilityClassTable from './baseComponents/UtilityClassTable.vue';
import ComponentClassTable from './baseComponents/ComponentClassTable.vue';
import WeatherCodesTable from './baseComponents/WeatherCodesTable.vue';
import SpacingSystemTable from './baseComponents/SpacingSystemTable.vue';
import IconSizesTable from './baseComponents/IconSizesTable.vue';
import ComponentAccessibleTable from './baseComponents/ComponentAccessibleTable.vue';
import LivePreview from './baseComponents/LivePreview.vue';

// Common icons
import IconInfo from '@svgIcons/IconInfo.vue';
import IconLightbulb from '@svgIcons/IconLightbulb.vue';
import IconCheckCircle from '@svgIcons/IconCheckCircle.vue';
import IconWarning from '@svgIcons/IconWarning.vue';
import IconError from '@svgIcons/IconError.vue';
import IconClose from '@svgIcons/IconClose.vue';
import IconCheckmark from '@svgIcons/IconCheckmark.vue';
import IconPhone from '@svgIcons/IconPhone.vue';

// CSS
import '@dialtoneCSS';
import '@dialtoneDocsCSS';

export default defineClientConfig({
  enhance ({ app, router, siteData }) {
    // eslint-disable-next-line no-undef
    if (!__VUEPRESS_SSR__) {
      // Dialtone vue components
      import('@dialpad/dialtone-vue').then(module => {
        Object.keys(module)
          .filter((key) => key.startsWith('Dt'))
          .forEach((key) => {
            app.component(key, module[key]);
          });
      });
    }

    // Common views
    app.component('Icons', Icons);
    app.component('Colors', Colors);

    // Base components
    app.component('CodeWellHeader', CodeWellHeader);
    app.component('UtilityClassTable', UtilityClassTable);
    app.component('ComponentClassTable', ComponentClassTable);
    app.component('WeatherCodesTable', WeatherCodesTable);
    app.component('SpacingSystemTable', SpacingSystemTable);
    app.component('IconSizesTable', IconSizesTable);
    app.component('ComponentAccessibleTable', ComponentAccessibleTable);
    app.component('LivePreview', LivePreview);

    // Common icons
    app.component('IconInfo', IconInfo);
    app.component('IconPhone', IconPhone);
    app.component('IconLightbulb', IconLightbulb);
    app.component('IconCheckCircle', IconCheckCircle);
    app.component('IconWarning', IconWarning);
    app.component('IconError', IconError);
    app.component('IconClose', IconClose);
    app.component('IconCheckmark', IconCheckmark);
  },
  setup () {},
  rootComponents: [],
});
