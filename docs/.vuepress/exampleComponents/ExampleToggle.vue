<template>
  <div class="d-toggle-copy">
    <label
      class="d-toggle-label"
      for="Dialtone-Toggle1"
      v-text="label"
    />
  </div>
  <div class="d-toggle-button">
    <button
      id="Dialtone-Toggle1"
      class="d-toggle"
      :class="toggleClasses"
      :aria-checked="toggleAriaChecked"
      :disabled="disabled"
      type="button"
      :role="toggleRole"
      @click="toggleState"
    >
      <span class="d-toggle__inner" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'ExampleToggle',
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

    indeterminate: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      isChecked: this.checked,
      isIndeterminate: this.indeterminate,
    };
  },

  computed: {
    toggleClasses () {
      return [
        {
          'd-toggle--checked': this.isChecked,
          'd-toggle--indeterminate': this.isIndeterminate,
        },
      ];
    },

    toggleRole () {
      return this.isIndeterminate ? 'checkbox' : 'switch';
    },

    toggleAriaChecked () {
      return this.isIndeterminate ? 'mixed' : this.isChecked;
    },
  },

  methods: {
    toggleState () {
      this.isIndeterminate = null;
      this.isChecked = !this.isChecked;
    },
  },
};
</script>
