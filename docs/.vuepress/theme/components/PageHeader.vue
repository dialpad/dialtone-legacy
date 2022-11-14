<template>
  <section class="theme-default-content d-stack32 d-pb0 d-mb8">
    <slot name="content-top" />
    <header class="d-stack2">
      <div class="d-d-flex d-ai-center d-gg8">
        <h1
          v-if="frontmatter.title"
          class="dialtone-page-title"
          v-text="frontmatter.title"
        />
        <span
          v-if="frontmatter.new"
          class="d-badge d-badge--purple-500"
        >New</span>
      </div>
      <p
        v-if="frontmatter.desc"
        class="dialtone-intro"
        v-html="frontmatter.desc"
      />
    </header>
    <slot name="content-bottom" />
    <div
      v-if="path.startsWith('/components') && !frontmatter.no_preview"
      id="preview-header"
      class="d-d-flex d-jc-space-between"
    >
      <h2 class="d-vi-visible-sr">
        Preview
      </h2>
      <span class="d-d-flex d-flow16">
        <a
          v-if="frontmatter.figma_url"
          class="d-link d-fs-200"
          :href="frontmatter.figma_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Figma</span>
        </a>
        <a
          v-if="frontmatter.storybook_url"
          class="d-link d-fs-200"
          :href="frontmatter.storybook_url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Storybook</span>
        </a>
      </span>
    </div>
  </section>
</template>

<script setup>
defineProps({
  path: {
    type: String,
    required: true,
  },
  frontmatter: {
    type: Object,
    required: true,
  },
});
</script>
