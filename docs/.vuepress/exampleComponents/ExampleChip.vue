<template>
  <span class="d-chip-container">
    <component
        :is="interactive ? 'button' : 'span'"
        :class="['d-chip', {
          'd-w102': truncate,
          [`d-chip--${size}`]: size
        }]"
    >
      <span v-if="withAvatar" class="d-avatar">
        <img src="/assets/images/person.png" alt="" />
      </span>
      <span v-if="withIcon" class="d-chip__icon">
        <icon-phone />
      </span>
      <span :class="{'d-truncate': truncate}">{{ label }}</span>
    </component>
    <button
        v-if="!hideCloseBtn"
        aria-label="close"
        :class="['d-chip-close-btn', {[`d-chip-close-btn--${size}`]: size}]"
    >
      <span class="d-btn__icon" ref="closeBtn"><icon-close/></span>
    </button>
  </span>
</template>

<script setup>
import {ref} from 'vue';

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

</script>
