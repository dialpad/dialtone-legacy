<template>
  <aside class="d-d-flex d-fd-column">
    <header class="d-d-flex d-jc-space-between d-ai-end d-p16 d-pe-none">
      <h2 :id="color" class="d-headline20" tabindex="-1">
        <a :href="'#' + color" class="header-anchor">#</a>
        <span class="d-pe-auto d-tt-capitalize">{{ color }}</span>
      </h2>
    </header>
    <div v-for="(s, index) in stops"
         :class="dynamicClasses(s, index)"
         class="d-d-flex d-jc-space-between d-ai-center d-px12 d-py8 d-fs12 d-lh6 d-ff-mono"
    >
      <div>
        <strong>var(--{{ color }}{{ s.stop ? '-' + s.stop : '' }})</strong>
        <br/>
        <span class="d-fc-dark-lighter">#{{ s.hex }}</span>
      </div>
      <div class="d-fs11 d-lh2 d-fw-bold d-bar-sm d-px4 py2">{{ s.contrast }}</div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "BaseColor",
  props: {
    stops: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      required: true
    }
  },
  methods: {
    dynamicClasses(s, index) {
      const bgColor = {[`d-bgc-${this.color}${s.stop ? '-' + s.stop : '' }`]: true};
      const fontColor = {[`d-fc-${s.copy}`]: true};

      return {...bgColor, ...fontColor, 'd-btr4': index === 0, 'd-bbr4': index === (this.stops.length - 1)};
    }
  },
}
</script>
