<template>
  <component :is="foundSvg" />
</template>

<script setup>
import { defineAsyncComponent, computed, resolveDynamicComponent } from 'vue';

// render an svg by name
const props = defineProps({
  /**
   * Filename of the svg, without extension.
   */
  name: {
    type: String,
    required: true,
  },
});

const foundSvg = computed(() => {
  return svgs.find((svg) => { return resolveDynamicComponent(svg); });
});

const svgs = [
  defineAsyncComponent({
    loader: () => import(`../public/assets/images/${props.name}.svg?component`),
    onError: () => {},
  }),
  defineAsyncComponent({
    loader: () => import(`../public/assets/images/components/${props.name}.svg?component`),
    onError: () => {},
  }),
  defineAsyncComponent({
    loader: () => import(`../public/assets/images/favicons/${props.name}.svg?component`),
    onError: () => {},
  }),
];
</script>
