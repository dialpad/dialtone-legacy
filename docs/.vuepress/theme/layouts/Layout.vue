<script setup>
  import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
  import IconLaunch from '@svgIcons/IconLaunch.vue';
  import Banner from '../components/Banner.vue';
</script>

<template>
  <Banner />
  <ParentLayout>
    <template #page-top>
      <section class="theme-default-content d-stack32 d-pb0">
        <header class="d-stack2">
          <h1 v-if="$page.frontmatter.title" class="d-headline42 d-lh6 d-mb4 d-pt16" v-text="$page.frontmatter.title" />
          <p v-if="$page.frontmatter.desc" class="d-fs20 d-lh6" v-html="$page.frontmatter.desc"></p>
        </header>
        <div class="d-d-flex d-jc-space-between">
          <h2 class="d-fs24">Preview</h2>
          <a v-if="$page.frontmatter.storybook_url" class="d-link d-fs14"
             :href="$page.frontmatter.storybook_url" target="_blank">
            View Storybook
            <icon-launch />
          </a>
        </div>
      </section>
    </template>
  </ParentLayout>
</template>
