<template>
  <ParentLayout>
    <template #page>
      <div class="container">
        <Page>
          <template #top>
            <PageHeader :page="$page" />
          </template>
        </Page>
        <PageToc class="d-pr16" :headers="$page.headers" />
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
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .page {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: 50%;
    width: 100%;
  }

  .toc {
    top: var(--su64);
    padding-top: var(--su16);
    position: sticky;
    flex-grow: 1;
    align-self: flex-start;
  }

  @media screen and (max-width: 980px) {
    .container {
      flex-direction: column-reverse;
      width: 100%;
    }

    .toc {
      top: var(--su128);
      background-color: white;
      width: 100%;
      z-index: 10;
    }
  }
</style>
