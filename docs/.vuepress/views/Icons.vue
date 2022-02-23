<template>
  <div :class="{['d-bgc-black-800 d-fc-white']: ['light', 'night'].includes(variation) }" class="d-stack16 d-p16 d-bar8">
    <h2 :id="`${variation}-${kind}`" class="d-pl16 d-headline24 d-fl1" tabindex="-1">
      <a :href="'#' + variation + '-' + kind" class="header-anchor">#</a>
      {{ title }}
    </h2>
    <div :class="iconsContainerClass">
      <base-icon
        v-for="(icon, index) in icons"
        :desc="icon.desc"
        :code="icon.code"
        :file="icon.file"
        :kind="kind"
        :name="icon.name"
        :selected="selectedCardIndex === index"
        :variation="variation"
        :vue="icon.vue"
        @click="toggleCard(index)"
      ></base-icon>
    </div>
  </div>
</template>

<script>
import BaseIcon, {ICON_KINDS, ICON_VARIATIONS} from "../components/BaseIcon.vue";

export default {
  name: "Icons",
  components: {
    BaseIcon
  },
  props: {
    kind: {
      type: String,
      required: true,
      validator: (_kind) => {
        return ICON_KINDS.includes(_kind);
      },
    },
    variation: {
      type: String,
      validator: (_variation) => {
        return ICON_VARIATIONS.includes(_variation);
      },
    },
    size: {
      type: String,
      required: false,
      validator: (_size) => {
        return _size === 'large'
      }
    },
    title: {
      type: String,
      default: null
    }
  },
  computed: {
    iconsContainerClass() {
      return this.size ? `d-gl-docsite-icons--${this.size}` : 'd-gl-docsite-icons';
    },
    isWeatherKind() {
      return this.kind === 'weather';
    },
    isPatternsKind() {
      return this.kind === 'patterns';
    },
  },
  data: () => ({
    icons: [],
    selectedCardIndex: undefined,
  }),
  async beforeCreate() {
    const importedModule = await import(`../../_data/svg-${this.kind}.json`);
    this.icons = (this.isWeatherKind || this.isPatternsKind) ? importedModule.default[this.variation] : this.icons = importedModule.default;
  },
  methods: {
    toggleCard(index) {
      if (this.selectedCardIndex === index) index = undefined;
      this.selectedCardIndex = index;
    }
  }
}
</script>
