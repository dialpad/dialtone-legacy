<template>
  <component-vue-table-slots :component-name="formattedComponentName" />
  <component-vue-table-props :component-name="formattedComponentName" />
  <component-vue-table-events :component-name="formattedComponentName" />
</template>

<script setup>
import { computed } from 'vue';

import ComponentVueTableSlots from './ComponentVueTableSlots.vue';
import ComponentVueTableProps from './ComponentVueTableProps.vue';
import ComponentVueTableEvents from './ComponentVueTableEvents.vue';

const props = defineProps({
  componentName: {
    type: String,
    required: true,
  },
});
const formattedComponentName = computed(() => `Dt${props.componentName}`);
</script>

<style scoped>
.vue-api-table {
  word-break: normal;
  overflow-wrap: anywhere;
}
</style>
