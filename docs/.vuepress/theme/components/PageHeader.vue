<template>
  <section class="theme-default-content d-stack32 d-pb0 d-mb8">
    <slot name="content-top" />
    <header class="d-stack2">
      <div class="d-d-flex d-ai-center d-gg8" >
        <h1
          v-if="frontmatter.title"
          class="d-lh-200 d-fs-500 d-fw-medium d-mb8"
          v-text="frontmatter.title"
        />
        <span v-if="frontmatter.new" class="d-badge d-badge--purple-500">New</span>
      </div>
      <p
        v-if="frontmatter.desc"
        class="d-fs-300 d-lh-300 d-wmx80p"
        v-html="frontmatter.desc"
      />
    </header>
    <slot name="content-bottom" />
    <div
      v-if="path.startsWith('/components') && !frontmatter.no_preview"
      id="preview-header"
      class="d-d-flex d-jc-space-between"
    >
      <h2 class="d-fs-200 d-ba-unset">
        Preview
      </h2>
      <a
        v-if="frontmatter.storybook_url"
        class="d-link d-fs-200"
        :href="frontmatter.storybook_url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="d-mr4">View Storybook</span>
        <icon-launch class="d-svg--size16" />
      </a>
    </div>
  </section>
</template>

<script setup>
import IconLaunch from '@svgIcons/IconLaunch.vue';
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
