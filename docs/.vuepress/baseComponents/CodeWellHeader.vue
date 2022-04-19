<template>
  <aside class="d-mt16 d-btr8 d-of-hidden">
    <header
      class="d-fl-center d-fd-column d-p24 d-w100p d-of-auto d-stack8"
      :class="classes"
    >
      <slot></slot>
    </header>
  </aside>
</template>

<script>
export default {
  name: "CodeWellHeader",
  inheritAttrs: false,
  props: {
    bgclass: {
      type: String,
      default: 'd-bgc-black-025'
    },
    customClasses: {
      type: Array,
      default: function () {
        return [];
      }
    },
  },
  computed: {
    classes() {
      return [
        this.bgclass,
        this.customClasses,
        {
          'd-ba d-bc-black-050 d-btr8 d-baw2': this.bgclass === 'd-bgc-white',
        }
      ];
    }
  }
}
</script>
