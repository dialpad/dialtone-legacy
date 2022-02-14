<template>
  <div class="d-gl-docsite-icons">
    <base-icon
        v-for="(icon, index) in icons"
        :desc="icon.desc"
        :file="icon.file"
        :kind="kind"
        :name="icon.name"
        :selected="selectedCardIndex === index"
        :vue="icon.vue"
        @click="toggleCard(index)"
    ></base-icon>
  </div>
</template>

<script>
import BaseIcon, {ICON_KINDS} from "./BaseIcon.vue";

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
        return ICON_KINDS.includes(_kind)
      }
    }
  },
  data: () => ({
    icons: [],
    selectedCardIndex: undefined,
  }),
  beforeCreate() {
    import(`../_data/svg-${this.kind}.json`).then(data => {
      this.icons = data.default;
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
