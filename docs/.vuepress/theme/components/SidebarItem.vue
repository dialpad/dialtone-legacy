<template>
  <p
    class="d-fw-bold"
    tabindex="0"
    v-text="item.text"
  />
  <li
    v-for="subItem in subItems"
    :key="subItem.text"
  >
    <router-link
      v-if="subItem.link && !subItem.planned"
      :class="itemClass"
      :to="subItem.link"
    >
      {{ subItem.text }}
    </router-link>
    <p
      v-else
      tabindex="0"
      :class="itemClass"
      class="d-fc-muted"
    >
      {{ subItem.text }}
      <dt-badge
        v-if="subItem.planned"
        class="d-fw-normal d-ml4"
      >
        Planned
      </dt-badge>
    </p>
  </li>
</template>

<script setup>
import { computed } from 'vue';

const itemClass = 'd-link d-td-none d-my4';
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});
const subItems = computed(() => {
  return props.item?.children || [];
});
</script>
