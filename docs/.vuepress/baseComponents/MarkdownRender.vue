<template>
  <span v-html="markdownToHtml" />
</template>

<script setup>
import { computed } from 'vue';
import { marked } from 'marked';

const props = defineProps({
  markdown: {
    type: String,
    required: true,
  },
});

const markdownToHtml = computed(() => {
  return marked(props.markdown);
});
</script>
