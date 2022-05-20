<template>
  <span
      class="d-chip"
      :class="{
        'd-chip--interactive': interactive,
        'd-w102': truncate,
        'd-chip--active': isActive,
        [`d-chip--${size}`]: size
      }"
      :tabindex="interactive ? 0 : -1"
      @mousedown="setActive"
      @mouseup="setActive"
      @mouseleave="isActive = false"
  >
    <span v-if="withAvatar" class="d-avatar">
      <img src="/assets/images/person.png" alt="" />
    </span>
    <span v-if="withIcon" class="d-chip__icon">
      <icon-phone />
    </span>
    <span :class="{'d-truncate': truncate}">{{ label }}</span>
    <span v-if="!hideCloseBtn" class="d-chip-btn-holder"></span>
    <span class="d-chip-btn-container">
      <button
          v-if="!hideCloseBtn"
          aria-label="close"
          class="d-btn d-btn--circle"
          type="button"
      >
        <span class="d-btn__icon" ref="closeBtn"><icon-close/></span>
      </button>
    </span>
  </span>
</template>

<script setup>
import {ref} from 'vue';

const isActive = ref(false);
const closeBtn = ref(null);

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
  if(!props.interactive || closeBtn.value.parentNode.contains(event.target)) return;
  isActive.value = event.type === 'mousedown';
}

</script>
