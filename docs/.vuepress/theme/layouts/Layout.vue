<script setup>
  import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
  import Test from "@theme/Test.vue";
  import Header from "@theme/Header.vue";
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <div class="content">
        <Header :page="$page"/>
        <Test test="Test" />
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="less" scoped>
  .content {
    display: flex;
    flex-direction: row;
  }
</style>
