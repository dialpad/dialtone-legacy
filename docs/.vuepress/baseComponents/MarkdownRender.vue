<template>
  <span v-html="markdownToHtml" />
</template>

<script setup>
import { computed } from 'vue';
import markdownIt from 'markdown-it';

const props = defineProps({
  markdown: {
    type: String,
    required: true,
  },
});

const markdownToHtml = computed(() => {
  // eslint-disable-next-line new-cap
  const md = new markdownIt({ html: true });
  const renderedMarkdown = md.render(props.markdown);
  return renderedMarkdown;
});
</script>
