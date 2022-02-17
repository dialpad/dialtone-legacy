<template>
  <section class="d-stack16">
    <div class="d-d-grid d-gg24 d-g-cols2 md:d-g-cols1">
      <base-color
        v-for="color in colors"
        :key="color.color"
        :color="color.color"
        :stops="color.stops || []"></base-color>
    </div>
  </section>
</template>

<script>
import BaseColor from "../components/BaseColor.vue";

export default {
  name: "Colors",
  components: {
    BaseColor
  },
  data: () => ({
    colors: [],
  }),
  async beforeCreate() {
    const data = await import('../../_data/colors.json');
    this.colors = data.default;
  },
}
</script>
