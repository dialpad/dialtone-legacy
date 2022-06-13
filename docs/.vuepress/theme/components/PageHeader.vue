<template>
  <section class="theme-default-content d-stack32 d-pt64 d-pb0 d-mb8">
    <slot name="content-top" />
    <header class="d-stack2">
      <h1 v-if="frontmatter.title" class="d-headline42 d-lh6 d-mb8 d-pt16" v-text="frontmatter.title" />
      <p v-if="frontmatter.desc" class="d-fs20 d-lh6" v-html="frontmatter.desc"></p>
    </header>
    <slot name="content-bottom" />
    <div v-if="path.startsWith('/components')" class="d-d-flex d-jc-space-between">
      <h2 class="d-fs16">Preview</h2>
      <a v-if="frontmatter.storybook_url" class="d-link d-fs14"
         :href="frontmatter.storybook_url" target="_blank">
        <span class="d-mr4">View Storybook</span>
        <icon-launch class="d-svg--size16" />
      </a>
    </div>
  </section>
</template>

<script setup>
  import IconLaunch from '@svgIcons/IconLaunch.vue';
  const props = defineProps({
    path: String,
    frontmatter: Object
  });
</script>
