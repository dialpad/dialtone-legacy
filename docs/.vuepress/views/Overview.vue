<template>
  <div class="dialtone-wall">
    <template
      v-for="page in pages"
      :key="page.title"
    >
      <router-link
        :to="`/${basePath}/${page.link}/`"
        class="dialtone-wall__item"
      >
        <div
          v-if="page.thumb"
          class="dialtone-wall__image"
        >
          <img
            class="dialtone-wall__thumb"
            :alt="`${page.fileName}-thumbnail`"
            :src="$withBase(`/assets/images/${basePath}/${page.fileName}.png`)"
          >
        </div>
        <div class="dialtone-wall__details">
          <div class="dialtone-wall__title">
            <span class="dialtone-wall__title-text">{{ pageTitle(page) }}</span>
            <span
              v-if="page.status"
              class="d-badge d-tt-capitalize"
              :class="badgeKindClass(page.status)"
            >
              {{ page.status }}
            </span>
          </div>
          <div class="dialtone-wall__description">
            {{ page.description }}
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script setup>
defineProps({
  pages: {
    type: Object,
    default: () => {},
  },
  basePath: {
    type: String,
    default: '/',
  },
});

const badgeKindClass = (status) => {
  switch (status) {
    case 'new':
      return 'd-badge--bulletin';
    case 'ready':
      return 'd-badge--success';
    default:
      return '';
  }
};
const pageTitle = (page) => {
  const shortTitle = page.shortTitle ? page.shortTitle[0].toUpperCase() + page.shortTitle.slice(1) : undefined;
  return shortTitle || page.title;
};
</script>
