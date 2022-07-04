<template>
  <div v-html="renderedMarkdown" />
</template>

<script>
import MarkdownIt from 'markdown-it';

// Takes markdown syntax in the default slot and converts it to HTML and renders it.
export default {
  name: 'Markdown',

  setup (props, { slots }) {
    const slotString = slots.default()[0].children.trim();
    const md = new MarkdownIt({ html: true });
    const renderedMarkdown = md.render(slotString);
    return {
      renderedMarkdown,
    };
  },
};
</script>
