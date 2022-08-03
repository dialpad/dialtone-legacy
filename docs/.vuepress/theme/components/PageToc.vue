<template>
  <aside
    v-if="headers.length > 0"
    class="toc"
  >
    <h3 class="d-pl8 d-pb8 d-ws-nowrap d-tt-uppercase">
      On this page
    </h3>
    <Toc
      :headers="headers"
      :options="options"
    />
  </aside>
</template>

<script setup>
defineProps({ headers: { type: Array, required: true } });

const options = {
  containerTag: '',
  listClass: 'toc-list d-ls-reset',
  itemClass: 'toc-item d-py2',
  linkClass: 'toc-link',
};
</script>

<style lang="less">
  .toc a.active {
    font-weight: initial;
  }
</style>
