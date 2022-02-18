<template>
  <div class="d-stack16 d-p16 d-bar8" :class="{['d-bgc-black-800 d-fc-white']: variation === 'light'}">
    <slot name="title"></slot>
    <div class="d-gl-docsite-icons">
      <base-icon
        v-for="(icon, index) in icons"
        :desc="icon.desc"
        :file="icon.file"
        :kind="kind"
        :name="icon.name"
        :selected="selectedCardIndex === index"
        :vue="icon.vue"
        :variation="variation"
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
  },
  data: () => ({
    icons: [],
    selectedCardIndex: undefined,
  }),
  beforeCreate() {
    import(`../../_data/svg-${this.kind}.json`).then(data => {
      this.icons = data.default;

      // if(this.variation) {
      //   this.icons = data.default[this.variation];
      // } else {
      //   this.icons = data.default;
      // }
    })
  },
  methods: {
    toggleCard(index) {
      if(this.selectedCardIndex === index ) index = undefined;
      this.selectedCardIndex = index;
    }
  }
}
</script>
