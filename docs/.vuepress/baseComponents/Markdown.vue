<template>
  <div v-html="renderedMarkdown" />
</template>

<script>
import markdownIt from 'markdown-it';

// Takes markdown syntax in the default slot and converts it to HTML and renders it.
export default {
  name: 'Markdown',

  setup(props, {slots}) {
    const slotString = slots.default()[0].children.trim();
    let md = new markdownIt({ html: true }),
        renderedMarkdown = md.render(slotString);
    return {
      renderedMarkdown
    }
  },
}
</script>
