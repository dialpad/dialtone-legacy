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
        <h1 v-if="$page.frontmatter.title" class="d-headline42 d-lh6 d-mb4 d-pt16" v-text="$page.frontmatter.title" />
        <a v-if="$page.frontmatter.storybook_url" class="d-link d-fs14 d-mb24"
           :href="$page.frontmatter.storybook_url" target="_blank">
          View Storybook
          <icon-launch />
        </a>
        <p v-if="$page.frontmatter.desc" class="d-fs20 d-lh6" v-html="$page.frontmatter.desc"></p>
      </header>
    </template>
  </ParentLayout>
</template>
