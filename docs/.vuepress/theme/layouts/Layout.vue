<script>
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import IconLaunch from '@svgIcons/IconLaunch.vue';

export default {
  components: {
    ParentLayout,
    IconLaunch
  },
}
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <header class="theme-default-content d-stack2">
        <h1 v-if="$page.frontmatter.title" class="d-headline42 d-lh6 d-mb4">{{ $page.frontmatter.title }}</h1>
        <a v-if="$page.frontmatter.storybook_url" class="d-link d-fs14 d-mb24"
           href="{{ $page.frontmatter.storybook_url }}" target="_blank">
          View Storybook
          <icon-launch></icon-launch>
        </a>
        <p v-if="$page.frontmatter.description" class="d-fs20 d-lh6" v-html="$page.frontmatter.description"></p>
      </header>
    </template>
  </ParentLayout>
</template>
