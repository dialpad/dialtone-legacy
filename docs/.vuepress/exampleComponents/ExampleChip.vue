<template>
  <span
      class="d-chip"
      :class="{
        'd-chip--interactive': interactive,
        'd-w102': truncate,
        'd-chip--active': isActive,
        [`d-chip--${size}`]: size
      }"
      tabindex="0"
      ref="chip"
      @mousedown="setActive"
      @mouseup="setActive"
  >
    <span v-if="withAvatar" class="d-avatar">
      <img src="/assets/images/person.png" alt="" />
    </span>
    <span v-if="withIcon" class="d-chip__icon">
      <icon-phone />
    </span>
    <span :class="{'d-truncate': truncate}">{{ label }}</span>
    <button
        v-if="!hideCloseBtn"
        aria-label="close"
        class="d-btn d-btn--circle"
        type="button"
    >
      <span class="d-btn__icon"><icon-close/></span>
    </button>
  </span>
</template>

<script setup>
import {ref} from 'vue';

const isActive = ref(false);
const chip = ref(null);

const props = defineProps({
  label: { type: String },
  hideCloseBtn: { type: Boolean, default: false },
  withIcon: { type: Boolean, default: false },
  withAvatar: { type: Boolean, default: false },
  interactive: { type: Boolean, default: true },
  truncate: { type: Boolean, default: false },
  size: { type: String }
})

function setActive(event) {
  if(event.target.parentNode !== chip.value) return;
  isActive.value = event.type === 'mousedown';

}

</script>
