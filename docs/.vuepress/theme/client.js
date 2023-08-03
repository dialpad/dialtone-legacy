import { useThemeData } from '@vuepress/plugin-theme-data/client';
import { defineClientConfig } from '@vuepress/client';
import Layout from './layouts/Layout.vue';
import NotFound from './layouts/NotFound.vue';

// CSS
import './assets/css/dialtone.css';
import './assets/less/dialtone-docs.less';
import './assets/css/dialtone-syntax.css';
import '@/../node_modules/@dialpad/dialtone-vue/dist/style.css';

export default defineClientConfig({
  async enhance ({ app, router }) {
    // Register libraries
    if (!__VUEPRESS_SSR__) {
      await registerDialtoneVue(app);
      await registerEmojiDialtoneVue(app);
      await registerDialtoneCombinator(app);
      const defaultTheme = useThemeData().value.themeMode;
      document.body.classList.add(`dialtone-theme-${defaultTheme}`);
    }
    router.options.scrollBehavior = (to, from, savedPosition) => {
      return to.hash
        ? { el: to.hash, behavior: 'smooth', top: 64 }
        : { top: 0 };
    };
  },
  layouts: {
    Layout,
    NotFound,
  },
});

async function registerDialtoneVue (app) {
  const module = await import('@dialpad/dialtone-vue');
  const dialtoneComponents = Object.keys(module).filter((key) => key.startsWith('Dt'));
  dialtoneComponents.forEach((key) => {
    app.component(key, module[key]);
  });
  app.provide('dialtoneComponents', dialtoneComponents);
}

async function registerEmojiDialtoneVue (app) {
  const emojiModule = await import('@dialpad/dialtone-vue/emoji');
  const dialtoneEmojiComponents = Object.keys(emojiModule).filter((key) => key.startsWith('Dt'));
  dialtoneEmojiComponents.forEach((key) => {
    app.component(key, emojiModule[key]);
  });
  app.provide('dialtoneEmojiComponents', dialtoneEmojiComponents);
}

async function registerDialtoneCombinator (app) {
  const module = await import('@dialpad/dialtone-combinator');
  app.component('DtcCombinator', module.DtcCombinator);
  app.component('DtcSection', module.DtcSection);
  app.provide('variantBank', module.variantBank());
}
