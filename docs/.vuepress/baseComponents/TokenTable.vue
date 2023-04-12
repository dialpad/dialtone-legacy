<template>
  <dt-select-menu
    name="format-select"
    label="Select Format"
    :options="selectMenuOptions"
    @change="setFormat"
  />
  <table class="d-table dialtone-doc-table">
    <thead>
      <tr>
        <th
          class="d-w60p"
          scope="col"
        >
          Name
        </th>
        <th
          scope="col"
        >
          Value
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="({ name, value }) in tokensProcessed"
        :key="name"
      >
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
          v-text="value"
        />
      </tr>
    </tbody>
  </table>
</template>

<script>
import CopyButton from './CopyButton.vue';

const FORMAT_MAP = {
  css: 'css/variables',
  android: 'compose/object',
  ios: 'ios-swift/enum.swift',
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
      format: 'css',
      json: null,
    };
  },

  computed: {
    tokensProcessed () {
      if (!this.json) return;
      const tokens = [];
      for (const [key, value] of Object.entries(this.json)) {
        if (key.split('/')[0] !== this.category) continue;
        const token = {
          name: value[FORMAT_MAP[this.format]]?.name,
          description: '',
          value: value[FORMAT_MAP[this.format]]?.value,
        };
        tokens.push(token);
      }
      return tokens;
    },

    selectMenuOptions () {
      return Object.keys(FORMAT_MAP).map((item) => {
        return { value: item, label: item };
      });
    },
  },

  beforeMount () {
    import('../../../node_modules/@dialpad/dialtone-tokens/dist/doc.json').then((module) => {
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
