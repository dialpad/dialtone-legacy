<template>
  <!-- eslint-disable vue/no-static-inline-styles -->
  <dt-stack :direction="{ default: 'row' }" gap="400">
    <dt-select-menu
      name="format-select"
      label="Select Format"
      select-class="d-w128"
      :options="formatSelectMenuOptions"
      @change="setFormat"
    />
    <dt-select-menu
      v-if="category === 'color'"
      name="theme-select"
      label="Select Theme"
      select-class="d-w128"
      :options="THEMES"
      @change="setTheme"
    />
  </dt-stack>
  <table class="d-table dialtone-doc-table">
    <thead>
      <tr>
        <th
          scope="col"
        />
        <th
          scope="col"
        >
          Name
        </th>
        <th
          scope="col"
        >
          Value
        </th>
        <th
          scope="col"
        >
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="({ name, tokenValue, description, style }) in tokensProcessed"
        :key="name"
      >
        <td>
          <div
            v-if="category === 'color'"
            class="d-bar-circle d-w42 d-h42"
            :style="style"
          />
          <p
            v-if="category === 'typography'"
            :style="style"
          >
            Aa
          </p>
          <div
            v-if="category === 'shadow'"
            class="d-bar2 d-w42 d-h42"
            :style="style"
          />
        </td>
        <th
          scope="row"
          class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"
        >
          <dt-stack
            direction="row"
            gap="300"
            class="d-ai-center"
          >
            <span class="d-ws-nowrap">{{ name }}</span>
            <copy-button
              :text="name"
              aria-label="copy token"
            />
          </dt-stack>
        </th>
        <td
          class="d-fs-100 d-lh-300"
        >
          <div class="d-wmx264">
            {{ tokenValue }}
          </div>
        </td>
        <td
          class="d-fs-100 d-lh-300"
          v-text="description"
        />
      </tr>
    </tbody>
  </table>
</template>

<script>
import * as tokensJson from '@dialpad/dialtone-tokens/dist/doc.json';
import { getComposedTypographyTokens, getComposedShadowTokens } from '../common/token-utilities';
import CopyButton from './CopyButton.vue';

const FORMAT_MAP = {
  CSS: 'css/variables',
  Android: 'compose/object',
  iOS: 'ios-swift/enum.swift',
};

const THEMES = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

const CATEGORY_MAP = {
  color: ['color', 'opacity', 'theme'],
  typography: ['typography', 'font'],
  size: ['size'],
  space: ['space'],
  shadow: ['shadow'],
  component: ['avatar', 'badge', 'checkbox', 'icon', 'inputs', 'action'],
};

const COMPOSED_TOKENS_CATEGORIES = [
  {
    category: 'typography',
    format: 'CSS',
    getTokensFn: getComposedTypographyTokens,
  },
  {
    category: 'shadow',
    format: 'CSS',
    getTokensFn: getComposedShadowTokens,
  },
];

const FONT_KEY_MAP = {
  family: 'font-family',
  size: 'font-size',
  lineHeight: 'line-height',
  weight: 'font-weight',
  'text-case': 'text-transform',
};

const TYPOGRAPHY_KEY_MAP = {
  fontFamily: 'font-family',
  fontWeight: 'font-weight',
  lineHeight: 'line-height',
  fontSize: 'font-size',
  textCase: 'text-transform',
};

export default {
  name: 'TokenTable',

  components: {
    CopyButton,
  },

  props: {
    category: {
      type: String,
      default: 'color',
      validator: (v) => Object.keys(CATEGORY_MAP).includes(v),
    },
  },

  data () {
    return {
      format: 'CSS',
      theme: 'light',
      THEMES,
    };
  },

  computed: {
    tokensProcessed () {
      const tokens = [];
      Object.entries(tokensJson[this.theme])
        .filter(([key, value]) => CATEGORY_MAP[this.category].includes(key.split('/')[0]) && value['css/variables'])
        .forEach(([key, value]) => {
          const { name, value: tokenValue, description } = value[FORMAT_MAP[this.format]] || {};
          const { value: exampleValue } = value['css/variables'];
          const style = this.getExampleStyle(key, exampleValue);
          tokens.push({ name, tokenValue, description, style });
        });
      const composedTokens = [];
      if (COMPOSED_TOKENS_CATEGORIES.some(item => item.category === this.category && item.format === this.format)) {
        composedTokens.push(...COMPOSED_TOKENS_CATEGORIES
          .find(item => item.category === this.category).getTokensFn(this.theme));
      }
      composedTokens.forEach((token, index) => {
        composedTokens[index] = { ...token, style: this.getExampleStyle('composed', token.tokenValue) };
      });
      return [...composedTokens, ...tokens];
    },

    formatSelectMenuOptions () {
      return Object.keys(FORMAT_MAP).map((item) => {
        return { value: item, label: item };
      });
    },
  },

  methods: {
    setFormat (newFormat) {
      this.format = newFormat;
    },

    setTheme (newTheme) {
      this.theme = newTheme;
    },

    getExampleStyle (key, value) {
      const CATEGORY_STYLE_MAP = {
        color: this.getColorStyle,
        typography: this.getTypographyStyle,
        shadow: this.getShadowStyle,
      };
      if (!CATEGORY_STYLE_MAP[this.category]) return null;
      const style = CATEGORY_STYLE_MAP[this.category](key, value);
      if (style === null && location.hostname === 'localhost') {
        console.warn(`Token style not processed for the value ${value}`);
      }
      return style;
    },

    getColorStyle (key, value) {
      const property = key.split('/')[0];
      switch (property) {
        case 'color':
          return `background: ${value}`;

        case 'opacity':
          return `background: rgba(0, 0, 0, ${value})`;

        case 'theme':
          return `background: ${value}`;

        default:
          return null;
      }
    },

    getTypographyStyle (key, value) {
      if (key === 'composed') {
        return `font: ${value}`;
      }
      const properties = key.split('/');
      let mappedProp;
      if (properties[0] === 'font') {
        mappedProp = FONT_KEY_MAP[properties[1]];
      }
      if (properties[0] === 'typography') {
        mappedProp = TYPOGRAPHY_KEY_MAP[properties.pop()];
      }
      if (mappedProp) {
        return `${mappedProp}: ${value}`;
      }
      return null;
    },

    getShadowStyle (key, value) {
      if (key === 'composed') {
        return `box-shadow: ${value}`;
      }
      return null;
    },
  },
};
</script>
