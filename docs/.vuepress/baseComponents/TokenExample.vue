<template>
  <div
    v-if="category === 'color'"
    class="d-bar-circle d-w42 d-h42"
    :style="getColorStyle()"
  />
  <p
    v-if="category === 'typography'"
    :style="getTypographyStyle()"
  >
    Aa
  </p>
  <div
    v-if="category === 'shadow'"
    class="d-bar2 d-w42 d-h42"
    :style="getShadowStyle()"
  />
  <div
    v-if="category === 'size'"
    class="rectangle"
    :style="getSizeStyle()"
  />
  <div
    v-if="category === 'space'"
    class="rectangle"
    :style="getSizeStyle()"
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

  methods: {
    getColorStyle () {
      const property = /^var\(--dt-(\w+)-/.exec(this.name)[1];
      switch (property) {
        case 'color':
          return `background: ${this.value}`;

        case 'opacity':
          return `background: rgba(0, 0, 0, ${this.value})`;

        case 'theme':
          return `background: ${this.value}`;

        default:
          return null;
      }
    },

    getTypographyStyle () {
      const fontRegex = new RegExp(`^var\\(--dt-font-(${Object.keys(TYPOGRAPHY_KEY_MAP).join('|')})`);
      const fontProperties = fontRegex.exec(this.name);
      if (fontProperties) {
        return `${TYPOGRAPHY_KEY_MAP[fontProperties[1]]}: ${this.value}`;
      }
      const typographyRegex = new RegExp(`^var\\(--dt-typography-.+(${Object.keys(TYPOGRAPHY_KEY_MAP).join('|')})\\)$`);
      const typographyProperties = typographyRegex.exec(this.name);
      if (typographyProperties) {
        return `${TYPOGRAPHY_KEY_MAP[typographyProperties[1]]}: ${this.value}`;
      }
      const isCompositionToken = this.name.startsWith('var(--dt-typography');
      if (isCompositionToken) {
        return `font: ${this.value}`;
      }
      return null;
    },

    getShadowStyle () {
      if (SHADOW_COMPOSITION_TOKENS.find(name => this.name.endsWith(`${name})`))) {
        return `box-shadow: ${this.value}`;
      }
      return null;
    },

    getSizeStyle () {
      if (this.value.endsWith('%')) return null;
      const value = parseFloat(this.value.replace('rem', ''));
      if (value < 12.8 && value > 0) return `width: ${this.value}`;
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
