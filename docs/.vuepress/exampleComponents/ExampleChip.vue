<template>
  <span class="d-chip d-chip--interactive js-chip" tabindex="0">
    <span v-if="withAvatar" class="d-avatar">
      <img src="/assets/images/person.png" alt="" />
    </span>
    <span v-if="withIcon" class="d-chip__icon">
      <icon-phone />
    </span>
    <span>{{ label }}</span>
    <button v-if="!hideCloseBtn" aria-label="close" class="d-btn d-btn--circle js-chip-button" type="button">
      <span class="d-btn__icon"><icon-close/></span>
    </button>
  </span>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  hideCloseBtn: { type: Boolean, default: false },
  withIcon: { type: Boolean, default: false },
  withAvatar: { type: Boolean, default: false },
})

</script>
