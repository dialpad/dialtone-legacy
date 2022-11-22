<template>
  <main class="page">
    <slot name="top" />

    <div>
      <slot name="content-top" />

      <!-- eslint-disable vue/no-undef-components -->
      <Content />
      <!-- eslint-enable vue/no-undef-components -->

      <slot name="content-bottom" />
    </div>

    <page-meta />

    <page-nav />

    <slot name="bottom" />
  </main>
</template>

<script setup>
import PageMeta from '@theme/PageMeta.vue';
import PageNav from '@theme/PageNav.vue';
</script>

<style scoped>

</style>
