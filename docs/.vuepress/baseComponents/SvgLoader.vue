<template>
  <component :is="svg" />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

// render an svg by name
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const svg = defineAsyncComponent(() => import(`../../assets/svg/${props.name}.svg?component`));
</script>
