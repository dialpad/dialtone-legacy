<template>
  <ParentLayout>
    <template #page>
      <div class="main-content">
        <Page>
          <template #top>
            <PageHeader :page="$page" />
          </template>
        </Page>
        <PageToc :headers="$page.headers" />
      </div>
    </template>
  </ParentLayout>
</template>

<script setup>
  import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
  import Page from "@theme/Page.vue";
  import PageToc from "@theme/PageToc.vue";
  import PageHeader from "@theme/PageHeader.vue";
</script>

<style lang="less">
  .main-content {
    display: flex;
    width: 100%;
  }

  .page {
    width: 100%;
    min-width: 0;
  }

  .toc {
    position: sticky;
    top: var(--su64);
    align-self: flex-start;
    background-color: var(--base--background-color);
    z-index: 10;
  }

  @media screen and (max-width: 980px) {
    .main-content {
      flex-wrap: wrap;
      flex-direction: column-reverse;
    }

    .page {
      padding-top: var(--su64) !important;
    }

    .toc {
      position: relative;
      width: 100%;
    }

    .toc-item {
      display: inline-block;
    }

    .toc-item > a {
      color: var(--primary-color);
      text-decoration: underline;
    }

    .toc-item > a:hover {
      color: var(--primary-color-hover);
      text-decoration: underline;
      background-color: transparent;
    }
  }
</style>
