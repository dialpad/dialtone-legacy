<template>
  <div class="d-d-flex d-fd-column d-w100p d-stack16">
    <div
      class="d-tablist"
      :class="{
        'd-tablist--sm': size === 'small',
        'd-tablist--no-border': borderless,
        'd-tablist--inverted': inverted
      }"
      role="tablist"
      aria-label="Label Example Group"
    >
      <button
        class="d-tab"
        :class="{'d-tab--selected': selected === 0}"
        role="tab"
        :aria-selected="selected === 0"
        aria-controls="base-panel-1"
        id="base-tab-1"
        tabindex="0"
        @click="selectTab(0)"
      >
        First tab
      </button>
      <button
        class="d-tab"
        :class="{'d-tab--selected': selected === 1}"
        role="tab"
        :aria-selected="selected === 1"
        aria-controls="base-panel-2"
        id="base-tab-2"
        tabindex="-1"
        @click="selectTab(1)"
      >
        Second tab
      </button>
      <button
        class="d-tab"
        :class="{'d-tab--selected': selected === 2}"
        role="tab"
        :aria-selected="selected === 2"
        aria-controls="base-panel-3"
        id="base-tab-3"
        tabindex="-1"
        @click="selectTab(2)"
      >
        Third tab
      </button>
    </div>
    <slot name="panel_content" :selected="selected"></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      selected: 0
    };
  },
  props: {
    size: {
      type: String,
    },
    borderless: {
      type: Boolean,
      default: false,
    },
    inverted: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectTab(tabNumber) {
      this.selected = tabNumber;
    }
  }
}
</script>

<style scoped>

</style>
