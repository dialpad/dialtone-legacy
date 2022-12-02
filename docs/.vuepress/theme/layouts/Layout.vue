<template>
  <dt-root-layout
    header-class="d-d-flex d-ai-center d-pl8 d-pr12 d-h64 d-bb d-bc-black-200 d-bgc-white d-zi-navigation"
    :header-sticky="true"
    footer-class="d-text-right"
  >
    <template #header>
      <navbar />
    </template>
    <template
      v-if="!$frontmatter.home"
      #sidebar
    >
      <sidebar />
    </template>
    <template #default>
      <home v-if="$frontmatter.home" />
      <div
        v-else
        class="d-d-flex"
      >
        <page
          :prev="prev"
          :next="next"
        />
        <page-toc />
      </div>
    </template>
  </dt-root-layout>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Home from '../components/Home.vue';
import Page from '../components/Page.vue';
import PageToc from '../components/PageToc.vue';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client';

const route = useRoute();

const prev = ref(null);
const next = ref(null);
const items = useThemeLocaleData().value.sidebar;

// Remove "planned" items to avoid errors
const currentItems = computed(() => {
  const key = Object.keys(items).filter(item => route.path.includes(item));
  return items[key].map(item => item.children.filter(child => !child.planned));
});

// Finds the current item
const findCurrent = () => {
  prev.value = null;
  next.value = null;

  currentItems.value.forEach((item, idx) => {
    const index = item.findIndex(child => child.link === route.path);
    if (index < 0) return;

    if (index >= 0) {
      const prevArray = currentItems.value[idx - 1] || [];
      prev.value = index === 0 ? prevArray[prevArray.length - 1] : prev.value = item[index - 1];
    }
    if (index <= item.length - 1) {
      const nextArray = currentItems.value[idx + 1] || [];
      next.value = index === item.length - 1 ? nextArray[0] : next.value = item[index + 1];
    }
  });
};

watch(
  () => route.path,
  () => {
    if (route.path === '/') return;
    findCurrent();
  },
  { immediate: true },
);
</script>
