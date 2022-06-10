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
    padding: var(--su16);
    position: sticky;
    flex-grow: 1;
    align-self: flex-start;
    background-color: var(--base--background-color);
    z-index: 10;
  }

  @media screen and (max-width: 980px) {
    .main-content {
      flex-direction: column-reverse;
      width: 100%;
    }

    .page {
      padding-top: 0;
    }

    .toc {
      position: initial;
      padding-top: var(--su96);
      width: 100%;
    }
  }
</style>
