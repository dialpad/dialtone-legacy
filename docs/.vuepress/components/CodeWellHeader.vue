<template>
  <aside class="d-mt16 d-btr8 d-of-hidden">
    <header
      class="d-fl-center d-fd-column d-p24 d-of-auto d-stack8"
      :class="dark ? 'd-bgc-black-800' : 'd-bgc-black-025'"
    >
      <slot></slot>
    </header>
  </aside>
</template>

<script>
export default {
  name: "CodeWellHeader",
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
