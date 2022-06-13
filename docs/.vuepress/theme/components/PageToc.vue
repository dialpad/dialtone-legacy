<template>
  <aside v-if="headers.length > 0" class="toc">
    <h3 class="d-pl24 d-pb8 d-ws-nowrap">ON THIS PAGE</h3>
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
