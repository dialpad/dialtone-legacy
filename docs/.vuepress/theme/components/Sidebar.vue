<template>
  <ul
    v-if="sidebarItems.length"
    class="
    dialtone-sidebar__list d-t64 d-b0 d-ps-fixed d-p24 d-pl16 d-pr16
    d-pb96 d-h100vh d-of-y-auto"
  >
    <sidebar-item
      v-for="item in sidebarItems"
      :key="item.link || item.text"
      :item="item"
    />
  </ul>
</template>

<script setup>
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client';
import SidebarItem from '../components/SidebarItem.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const items = useThemeLocaleData().value.sidebar;
const sidebarItems = computed(() => {
  const key = Object.keys(items).filter(item => route.path.includes(item));
  return items[key] || [];
});
</script>
