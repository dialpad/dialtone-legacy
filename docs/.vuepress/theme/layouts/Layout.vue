<template>
  <ParentLayout>
    <template #page>
      <div class="d-d-flex d-jc-space-between">
        <Page class="d-fl-grow1">
          <template #top>
            <PageHeader :page="$page" />
          </template>
        </Page>
        <PageToc class="d-pr16 d-pt16" :headers="$page.headers" />
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
