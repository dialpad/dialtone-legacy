<template>
  <aside class="sidebar" :style="`top: ${windowPosition.top}rem !important`">
    <SidebarItems />
  </aside>
</template>

<script setup>
  import { reactive, onMounted, onBeforeUnmount } from 'vue';
  import SidebarItems from '@theme/SidebarItems.vue'

  const windowPosition = reactive({top: 0});

  function onScroll() {
    windowPosition.top = window.top.scrollY > 50 ? 6.4 : (11.2 - window.top.scrollY/10);
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll)
    onScroll();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
  })
</script>
