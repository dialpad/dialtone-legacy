<template>
  <aside class="d-d-flex d-fd-column">
    <header class="d-d-flex d-jc-space-between d-ai-end d-py16">
      <h2
        :id="color"
        class="d-headline24 d-fl1 d-tt-capitalize"
        tabindex="-1"
      >
        <a
          :href="`#${color}`"
          class="header-anchor"
        >#</a>
        {{ color }}
      </h2>
    </header>
    <div
      v-for="(s, index) in stops"
      :key="index"
      :class="dynamicClasses(s, index)"
      class="d-d-flex d-jc-space-between d-ai-center d-px12 d-py8 d-fs-100 d-lh6 d-ff-mono"
    >
      <div>
        <strong>var(--{{ color }}{{ s.stop ? `-${s.stop}` : '' }})</strong>
        <br>
        <span>#{{ s.hex }}</span>
      </div>
      <div class="d-d-flex d-fd-column d-fs-100 d-lh2 d-fw-bold d-bar-sm d-px4 py2">
        <div>
          {{ s.contrast }}
        </div>
        <div
          v-if="s.darkContrast"
          class="d-fc-primary"
        >
          {{ s.darkContrast }}
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'BaseColor',
  props: {
    stops: {
      type: Array,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },
  },

  methods: {
    dynamicClasses (s, index) {
      const bgColor = { [`d-bgc-${this.color}${s.stop ? '-' + s.stop : ''}`]: true };
      const fontColor = { [`d-fc-${s.copy}`]: true };

      return { ...bgColor, ...fontColor, 'd-btr4': index === 0, 'd-bbr4': index === (this.stops.length - 1) };
    },
  },
};
</script>
