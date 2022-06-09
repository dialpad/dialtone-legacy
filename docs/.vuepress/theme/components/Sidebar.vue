<template>
  <Test />
  <aside class="sidebar">
    <SidebarItems />
  </aside>
</template>

<script setup>
  import { reactive, onMounted, onBeforeUnmount } from 'vue';
  import SidebarItems from '@theme/SidebarItems.vue'
</script>
