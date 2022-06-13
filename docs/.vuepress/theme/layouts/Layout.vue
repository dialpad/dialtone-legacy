<script setup>
  import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
  import IconLaunch from '@svgIcons/IconLaunch.vue';
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <section class="theme-default-content d-stack32 d-pb0 d-mb8">
        <header class="d-stack2">
          <h1 v-if="$page.frontmatter.title" class="d-headline42 d-lh6 d-mb8 d-pt16" v-text="$page.frontmatter.title" />
          <p v-if="$page.frontmatter.desc" class="d-fs20 d-lh6" v-html="$page.frontmatter.desc"></p>
        </header>
        <div id="preview-header" v-if="$page.path.startsWith('/components')" class="d-d-flex d-jc-space-between">
          <h2 class="d-fs16 d-ba-unset">Preview</h2>
          <a v-if="$page.frontmatter.storybook_url" class="d-link d-fs14"
             :href="$page.frontmatter.storybook_url" target="_blank">
            <span class="d-mr4">View Storybook</span>
            <icon-launch class="d-svg--size16" />
          </a>
        </div>
      </section>
    </template>
  </ParentLayout>
</template>
