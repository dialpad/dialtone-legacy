import { defineClientConfig } from '@vuepress/client';

// Common views
import Icons from "./views/Icons.vue";
import Colors from "./views/Colors.vue";

// Base components
import CodeWellHeader from './baseComponents/CodeWellHeader.vue';
import UtilityClassTable from "./baseComponents/UtilityClassTable.vue";
import ComponentClassTable from "./baseComponents/ComponentClassTable.vue";
import WeatherCodesTable from "./baseComponents/WeatherCodesTable.vue";
import SpacingSystemTable from "./baseComponents/SpacingSystemTable.vue";
import IconSizesTable from "./baseComponents/IconSizesTable.vue";
import ComponentAccessibleTable from "./baseComponents/ComponentAccessibleTable.vue";
import LivePreview from "./baseComponents/LivePreview.vue";

// Common icons
import IconInfo from '@svgIcons/IconInfo.vue';
import IconLightbulb from "@svgIcons/IconLightbulb.vue";
import IconCheckCircle from "@svgIcons/IconCheckCircle.vue";
import IconWarning from "@svgIcons/IconWarning.vue";
import IconError from "@svgIcons/IconError.vue";
import IconClose from "@svgIcons/IconClose.vue";
import IconCheckmark from "@svgIcons/IconCheckmark.vue";
import IconPhone from "@svgIcons/IconPhone.vue";

// CSS
import '@dialtoneCSS';
import '@dialtoneDocsCSS';

export default defineClientConfig({
  enhance({app, router, siteData}) {
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

    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (to, from, savedPosition) => {
      const anchorPadding = 16;
      const position = await scrollBehavior(to, from, savedPosition);
      return (
        to.hash
        ? { ...position, top: app.config.globalProperties.$headerSize + anchorPadding }
        : position
      );
    }

    window.addEventListener('hashchange', () => {
      router.push(router.currentRoute.value);
    });

    // Common views
    app.component('icons', Icons);
    app.component('colors', Colors);

    // Base components
    app.component('code-well-header', CodeWellHeader);
    app.component('utility-class-table', UtilityClassTable);
    app.component('component-class-table', ComponentClassTable);
    app.component('weather-codes-table', WeatherCodesTable);
    app.component('spacing-system-table', SpacingSystemTable);
    app.component('icon-sizes-table', IconSizesTable);
    app.component('component-accessible-table', ComponentAccessibleTable);
    app.component('live-preview', LivePreview);

    // Common icons
    app.component('icon-info', IconInfo);
    app.component('icon-phone', IconPhone);
    app.component('icon-lightbulb', IconLightbulb);
    app.component('icon-check-circle', IconCheckCircle);
    app.component('icon-warning', IconWarning);
    app.component('icon-error', IconError);
    app.component('icon-close', IconClose);
    app.component('icon-checkmark', IconCheckmark);
  },
  setup() {},
  rootComponents: [],
})
