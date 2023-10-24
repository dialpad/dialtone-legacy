<template>
  <div
    v-if="category === 'color'"
    class="d-bar-circle d-w42 d-h42"
    :style="getColorStyle"
  />
  <p
    v-if="category === 'typography'"
    :style="getTypographyStyle"
  >
    Aa
  </p>
  <div
    v-if="category === 'shadow'"
    class="d-bar2 d-w42 d-h42"
    :style="getShadowStyle"
  />
  <div
    v-if="category === 'size'"
    class="rectangle"
    :style="getSizeStyle"
  />
  <div
    v-if="category === 'space'"
    class="rectangle"
    :style="getSizeStyle"
  />
</template>

<script>
import { CATEGORY_MAP } from './TokenTable.vue';

const TYPOGRAPHY_KEY_MAP = {
  family: 'font-family',
  size: 'font-size',
  'line-height': 'line-height',
  weight: 'font-weight',
  'text-case': 'text-transform',
};

const SHADOW_COMPOSITION_TOKENS = ['small', 'medium', 'large', 'extra-large', 'card', 'focus', 'focus-inset'];

const isTypography = (name, key) => name.includes('--dt-typography') && name.includes(key);
const isFont = (name, key) => name.includes(`--dt-font-${key}`);

export default {
  name: 'TokenExample',

  props: {
    category: {
      type: String,
      default: 'color',
      validator: (v) => Object.keys(CATEGORY_MAP).includes(v),
    },

    name: {
      type: String,
      default: '',
    },

    value: {
      type: String,
      default: '',
    },
  },

  computed: {
    getColorStyle () {
      const property = this.name.split('--dt-')[1]?.split('-')[0];
      switch (property) {
        case 'color':
        case 'theme':
          return { background: this.value };

        case 'opacity':
          return { background: `rgba(0, 0, 0, ${this.value})` };

        default:
          return null;
      }
    },

    getComposedTypographyStyle () {
      if (this.name.startsWith('var(--dt-typography')) {
        return `font: ${this.value}`;
      }
      return null;
    },

    getTypographyStyle () {
      for (const key in TYPOGRAPHY_KEY_MAP) {
        if (isFont(this.name, key) || isTypography(this.name, key)) {
          return { [TYPOGRAPHY_KEY_MAP[key]]: this.value };
        }
      }
      if (this.name.startsWith('var(--dt-typography')) {
        return `font: ${this.value}`;
      }
      return null;
    },

    getShadowStyle () {
      if (SHADOW_COMPOSITION_TOKENS.some(name => this.name.endsWith(`${name})`))) {
        return { 'box-shadow': this.value };
      }
      return null;
    },

    getSizeStyle () {
      if (this.value.endsWith('%')) return null;
      const value = parseFloat(this.value.replace('rem', ''));
      if (value < 12.8 && value > 0) return { width: this.value };
      return null;
    },
  },
};
</script>

<style scoped lang="less">
.rectangle {
  height: var(--dt-size-625);
  background-color: var(--dt-color-purple-300);
  width: 0;
}
</style>
