<template>
  <dt-tab-group class="example-tab-group">
    <template #tabs>
      <dt-tab
        id="1"
        panel-id="2"
        selected
      >
        Example
      </dt-tab>
      <dt-tab
        id="3"
        panel-id="4"
      >
        Vue code
      </dt-tab>
      <dt-tab
        id="5"
        panel-id="6"
      >
        HTML code
      </dt-tab>
    </template>
    <dt-tab-panel
      id="2"
      tab-id="1"
    >
      <!-- eslint-disable-next-line vue/no-undef-components -->
      <code-well-header>
        <slot name="example" />
      </code-well-header>
    </dt-tab-panel>
    <dt-tab-panel
      id="4"
      tab-id="3"
    >
      <div class="language-html" data-ext="html">
        <pre class="language-html" v-html="highlightedVue" />
        <copy-button
          class="code-copy-button"
          :text="trimmedVueCode"
          aria-label="Copy Vue code"
        />
      </div>
    </dt-tab-panel>
    <dt-tab-panel
      id="6"
      tab-id="5"
    >
      <dt-banner
        v-if="showHtmlWarning"
        class="d-ps-static"
        kind="warning"
        hide-close
      >
        This component needs Javascript to work as the example
      </dt-banner>
      <div class="language-html" data-ext="html">
        <pre class="language-html" v-html="highlightedHtml" />
        <copy-button
          class="code-copy-button"
          :text="trimmedHtmlCode"
          aria-label="Copy Html code"
        />
      </div>
    </dt-tab-panel>
  </dt-tab-group>
</template>

<script setup>
import Prism from 'prismjs';
import CopyButton from './CopyButton.vue';
const props = defineProps({
  htmlCode: {
    type: String,
    required: true,
  },
  vueCode: {
    type: String,
    required: true,
  },
  showHtmlWarning: {
    type: Boolean,
  },
});
const trimmedHtmlCode = props.htmlCode.replace(/^\n/gm, '');
const trimmedVueCode = props.vueCode.replace(/^\n/gm, '');
const highlightedHtml = Prism.highlight(trimmedHtmlCode, Prism.languages.html, 'html');
const highlightedVue = Prism.highlight(trimmedVueCode, Prism.languages.html, 'html');
</script>

<style scoped lang="less">
.example-tab-group {
  .language-html {
    margin-top: 0;
    position: relative;
    .code-copy-button {
      position: absolute;
      top: var(--dt-space-450);
      right: var(--dt-space-450);
    }
  }
}
</style>
