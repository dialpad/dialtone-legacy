<template>
  <aside class="toc">
    <Toc :headers="headers" :options="options" />
  </aside>
</template>

<script setup>
  const props = defineProps({
    headers: Array
  });

  const options = {
    containerTag: "",
    listClass: "toc-list",
    itemClass: "toc-item",
    linkClass: "toc-link"
  };
</script>

<style lang="less">
  .toc .toc-list {
    list-style-type: none;
  }
</style>
