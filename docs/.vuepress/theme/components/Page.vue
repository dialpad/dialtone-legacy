<template>
  <div class="main-content d-w100p lg:d-pt64">
    <page-header>
      <template #content-bottom>
        <page-toc
          v-if="isMobile"
          :is-mobile="isMobile"
          :headers="$page.headers"
        />
      </template>
    </page-header>
    <content />
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
          size="lg"
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
          size="lg"
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
    <footer class="d-mt16 d-mb16 d-body-small d-fc-secondary">
      <span v-if="$frontmatter.title" v-text="$frontmatter.title" /> documentation
      last updated {{ lastUpdated }}
    </footer>
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
  isMobile: {
    type: Boolean,
    required: true,
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
</script>
