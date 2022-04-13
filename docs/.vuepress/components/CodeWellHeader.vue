<template>
  <aside class="d-mt16 d-btr8 d-of-hidden">
    <header
      class="d-fl-center d-fd-column d-p24 d-of-auto d-stack8"
      :class="bgclass"
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
      default: 'd-bgc-black-025',
    },
  },
}
</script>
