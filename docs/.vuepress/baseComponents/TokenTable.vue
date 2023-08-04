<template>
  <!-- eslint-disable vue/no-static-inline-styles -->
  <dt-select-menu
    name="format-select"
    label="Select Format"
    select-class="d-w128"
    :options="selectMenuOptions"
    @change="setFormat"
  />
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
        v-for="({ name, value, description }) in tokensProcessed"
        :key="name"
      >
        <td>
          <div
            class="d-bar-circle d-w42 d-h42"
            style="background-color: var(--dt-color-surface-moderate);"
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
            {{ name }}
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
            {{ value }}
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
import CopyButton from './CopyButton.vue';

const FORMAT_MAP = {
  CSS: 'css/variables',
  Android: 'compose/object',
  iOS: 'ios-swift/enum.swift',
};

const CATEGORIES = [
  'color',
  'typography',
  'size',
  'space',
];

export default {
  name: 'TokenTable',

  components: {
    CopyButton,
  },

  props: {
    category: {
      type: String,
      default: 'color',
      validator: (v) => CATEGORIES.includes(v),
    },
  },

  data () {
    return {
      format: 'CSS',
      json: null,
    };
  },

  computed: {
    tokensProcessed () {
      if (!this.json) return [];

      return Object.entries(this.json)
        .filter(([key]) => key.split('/')[0] === this.category)
        .map(([_, value]) => {
          const { name, value: tokenValue, description } = value[FORMAT_MAP[this.format]] || {};
          return { name, value: tokenValue, description };
        });
    },

    selectMenuOptions () {
      return Object.keys(FORMAT_MAP).map((item) => {
        return { value: item, label: item };
      });
    },
  },

  beforeMount () {
    import('@dialpad/dialtone-tokens/dist/doc.json').then((module) => {
      this.json = module.default;
    });
  },

  methods: {
    setFormat (newFormat) {
      this.format = newFormat;
    },
  },
};
</script>
