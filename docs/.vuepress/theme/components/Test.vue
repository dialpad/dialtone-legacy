<template>
  <Toc :headers="page.headers" />
</template>

<script setup>
  import {ref} from "vue";

  const props = defineProps({
    page: Object
  });

  const headers = ref([
    {
      level: 0,
      title: "Variants and Examples",
      slug: "variants-and-examples",
      children: []
    },
    {
      level: 0,
      title: "Classes",
      slug: "classes",
      children: []
    },
    {
      level: 0,
      title: "Accessibility",
      slug: "accessibility",
      children: []
    }
  ]);
</script>

<style lang="less" scoped>
  div {
    background-color: black;
  }
</style>
