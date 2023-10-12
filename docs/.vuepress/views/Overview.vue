<template>
  <div class="dialtone-wall">
    <template
      v-for="(page, index) in pages"
      :key="page.title"
    >
      <component
        :is="cardElType(page)"
        :to="`/${basePath}/${page.link}/`"
        class="dialtone-wall__item"
      >
        <div
          v-if="page.thumb"
          class="dialtone-wall__image"
        >
          <!--<div v-if="backgroundImage" class="dialtone-wall__background" v-html="backgroundImage"></div>-->
          <div v-if="svgImage[index]" class="dialtone-wall__thumb" v-html="svgImage[index]"></div>
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
      </component>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, defineProps } from 'vue';
const props = defineProps({
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
const cardElType = (page) => {
  if (page.status !== 'planned' || (page.storybook && page.storybook !== 'planned')) return 'router-link';
  return 'div';
};

const svgPaths = computed(() => {
    return props.pages.map(page => `/assets/images/${props.basePath}/${page.fileName}.svg`);
});

const svgImage = ref([]);
const backgroundImage = ref('');

const fetchBackgroundSvg = async () => {
  try {
    const response = await fetch(`/assets/images/${props.basePath}/img-background.svg`);
    backgroundImage.value = await response.text();
  } catch (error) {
    console.error("Failed to fetch background SVG:", error);
  }
};

const fetchSvgs = async () => {
    const contents = [];
    for (const path of svgPaths.value) {
        try {
            const response = await fetch(path);
            const content = await response.text();
            contents.push(content);
        } catch (error) {
            console.error(`Failed to fetch SVG at ${path}:`, error);
        }
    }
    svgImage.value = contents;
};

onMounted(() => {
  fetchBackgroundSvg();
  fetchSvgs();
});
</script>
