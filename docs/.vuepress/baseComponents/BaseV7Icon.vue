<template>
  <dt-button
    class="dialtone-icon-grid__item"
    icon-position="top"
    importance="clear"
    kind="muted"
    width="100%"
  >
    <template #icon>
      <dt-icon
        :name="fileName"
        size="600"
        class="d-mb8"
      />
    </template>
    <p
      class="dialtone-icon-card__subtitle d-tt-capitalize d-fc-tertiary"
      v-text="name"
    />
  </dt-button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  fileName: { type: String, required: true },
});
const name = computed(() => {
  return props.fileName
    .replaceAll('-', ' ');
});
</script>
