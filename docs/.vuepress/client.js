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
import ComponentCombinator from './baseComponents/ComponentCombinator.vue';

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
    // Register libraries
    if (!__VUEPRESS_SSR__) {
      registerDialtoneVue(app);
      registerDialtoneCombinator(app);
      registerDialtoneIcons(app);
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
    app.component('ComponentCombinator', ComponentCombinator);

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

async function registerDialtoneCombinator (app) {
  const module = await import('@dialpad/dialtone-combinator');
  app.component('DtcCombinator', module.DtcCombinator);
  app.component('DtcSection', module.DtcSection);
  app.provide('variantBank', module.variantBank());
}

async function registerDialtoneVue (app) {
  const module = await import('@dialpad/dialtone-vue');
  const dialtoneComponents = Object.keys(module).filter((key) => key.startsWith('Dt'));
  dialtoneComponents.forEach((key) => {
    app.component(key, module[key]);
  });
  app.provide('dialtoneComponents', dialtoneComponents);
}

async function registerDialtoneIcons (app) {
  const brandIcons = (await import(`../_data/svg-brand.json`)).default;
  const systemIcons = (await import(`../_data/svg-system.json`)).default;
  const icons = [
    ...brandIcons,
    ...systemIcons,
  ];

  const iconEntries = [];
  const iconPromises = [];
  icons.forEach(icon => {
    const promise = import(`../../lib/dist/vue/icons/${icon.vue}.vue`);
    iconPromises.push(promise);
    promise.then(module => {
      iconEntries.push([icon.vue, module.default]);
    });
  });

  await Promise.all(iconPromises);

  iconEntries.forEach(([name, icon]) => {
    app.component(name, icon);
  });

  app.provide('dialtoneIcons', iconEntries.map(([name]) => name));
}
