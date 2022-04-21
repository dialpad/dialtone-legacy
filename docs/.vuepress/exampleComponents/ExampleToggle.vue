<template>
  <div class="d-toggle-copy d-mr6">
    <label class="d-toggle-label" for="Dialtone-Toggle1" v-text="label"/>
  </div>
  <div class="d-toggle-button">
    <button
      class="d-toggle"
      :class="{'d-toggle--checked': isChecked}"
      :aria-checked="isChecked"
      :disabled="disabled"
      type="button"
      role="switch"
      id="Dialtone-Toggle1"
      @click="toggleState"
    >
      <span class="d-toggle__inner"/>
    </button>
  </div>
</template>

<script>
export default {
  name: "example-toggle",
  data() {
    return {
      isChecked: this.checked,
    }
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    toggleState() {
      this.isChecked = !this.isChecked;
    }
  }
}
</script>
