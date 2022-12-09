<template>
  <div class="dialtone-wall">
    <template
      v-for="page in pages"
      :key="page.title"
    >
      <div
        v-if="isPlanned(page.status)"
        class="dialtone-wall__item dialtone-wall__item--disabled"
      >
        <div class="dialtone-wall__image">
          <img
            v-if="page.thumb"
            class="dialtone-wall__thumb"
            :alt="`${page.name}-thumbnail`"
            :src="$withBase(`/assets/images/${basePath}/${page.name}.png`)"
          >
        </div>
        <div class="dialtone-wall__details">
          <div class="dialtone-wall__title">
            <span class="dialtone-wall__title-text">{{ page.title }}</span>
            <span class="d-badge">Planned</span>
          </div>
          <div class="dialtone-wall__description">
            {{ page.desc }}
          </div>
        </div>
      </div>
      <router-link
        v-else
        :to="`/${basePath}/${page.link}/`"
        class="dialtone-wall__item"
      >
        <div class="dialtone-wall__image">
          <img
            v-if="page.thumb"
            class="dialtone-wall__thumb"
            :alt="`${page.name}-thumbnail`"
            :src="$withBase(`/assets/images/${basePath}/${page.name}.png`)"
          >
        </div>
        <div class="dialtone-wall__details">
          <div class="dialtone-wall__title">
            <span class="dialtone-wall__title-text">{{ page.title }}</span>
            <span
              v-if="isNew(page.status) || isReady(page.status)"
              class="d-badge d-tt-capitalize"
              :class="badgeKindClass(page.status)"
            >
              {{ page.status }}
            </span>
          </div>
          <div class="dialtone-wall__description">
            {{ page.desc }}
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

const isPlanned = (status) => status === 'planned';
const isNew = (status) => status === 'new';
const isReady = (status) => status === 'ready';

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
</script>
