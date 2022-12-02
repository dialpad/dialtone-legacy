<template>
  <div class="main-content d-w100p d-pt24">
    <page-header>
      <template #content-bottom>
        <page-toc
          v-if="isMobile"
          :headers="$page.headers"
        />
      </template>
    </page-header>
    <content />
    <footer class="page-meta d-h64 d-d-flex d-ai-center">
      <small>
        Last updated: <span class="d-fc-muted">{{ lastUpdated }}</span>
      </small>
    </footer>
    <nav
      :class="prev ? 'd-jc-space-between' : 'd-jc-flex-end'"
      class="page-nav d-h64 d-d-flex d-ai-center"
    >
      <router-link
        v-if="prev"
        v-slot="{ navigate }"
        custom
        :to="prev.link"
      >
        <dt-button
          size="xl"
          importance="clear"
          @click="navigate"
        >
          <template #icon>
            <component :is="arrowLeft" />
          </template>
          {{ prev.text }}
        </dt-button>
      </router-link>
      <router-link
        v-if="next"
        v-slot="{ navigate }"
        custom
        :to="next.link"
      >
        <dt-button
          size="xl"
          icon-position="right"
          importance="clear"
          @click="navigate"
        >
          <template #icon>
            <component :is="arrowRight" />
          </template>
          {{ next.text }}
        </dt-button>
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue';
import PageToc from '../components/PageToc.vue';
import * as icons from '@dialpad/dialtone-icons';
import { computed } from 'vue';
import { usePageData } from '@vuepress/client';

defineProps({
  prev: {
    type: Object,
    default: () => {},
  },
  next: {
    type: Object,
    default: () => {},
  },
});
const lastUpdated = computed(() => {
  const timestamp = usePageData().value.git.updatedTime;
  return new Date(timestamp);
});
const arrowLeft = computed(() => {
  return icons.ArrowLeft;
});
const arrowRight = computed(() => {
  return icons.ArrowRight;
});
const isMobile = false;
</script>
