<template>
  <aside v-if="headers.length > 0" class="toc">
    <h3 class="d-pl8 d-pb8 d-ws-nowrap d-tt-uppercase">On this page</h3>
    <Toc :headers="headers" :options="options" />
  </aside>
</template>

<script setup>
  const props = defineProps({
    headers: Array
  });

  const options = {
    containerTag: "",
    listClass: "toc-list d-ls-reset",
    itemClass: "toc-item",
    linkClass: "toc-link"
  };
</script>
