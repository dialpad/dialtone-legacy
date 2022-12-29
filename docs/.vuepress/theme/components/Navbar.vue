<template>
  <nav
    class="d-d-flex d-flow4"
    role="navigation"
  >
    <router-link
      v-for="link in items"
      :key="link.text"
      :to="link.link"
      class="d-btn d-btn--md d-bar-pill"
      :class="{ 'd-btn--active': isActiveLink(link.text) }"
    >
      {{ link.text }}
    </router-link>
  </nav>
  <div class="d-d-flex d-flow4">
    <div class="d-d-flex d-flow4">
      <a
        alt="GitHub repo"
        class="d-btn d-btn--muted d-btn--circle d-tooltip--hover"
        href="https://github.com/dialpad/dialtone"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          class="d-icon d-icon--size-400"
          alt="Github icon"
          :src="$withBase('/assets/images/github-icon.svg')"
        >
        <div class="d-tooltip d-tooltip__arrow--top-center d-ps-absolute d-ws-nowrap">
          GitHub repository
        </div>
      </a>
      <a
        alt="Codepen Template"
        class="d-btn d-btn--muted d-btn--circle d-tooltip--hover"
        href="https://codepen.io/pen/?template=BajJpwW"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="d-icon d-icon--size-400"
          alt="Github icon"
          :src="$withBase('/assets/images/codepen-icon.svg')"
        >
        <div class="d-tooltip d-tooltip__arrow--top-center d-ps-absolute d-ws-nowrap">
          Codepen template
        </div>
      </a>
    </div>
    <dt-button
      importance="outlined"
      kind="muted"
      class="d-ml16"
      width="154px"
      @click="$emit('search')"
    >
      <template #icon>
        <dt-icon
          name="search"
          size="200"
        />
      </template>
      <span class="d-fc-disabled">Search Dialtone</span>
    </dt-button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
defineEmits(['search']);

const route = useRoute();

const isActiveLink = (text) => {
  const linkBase = text.toLowerCase();
  return route.path.search(linkBase) !== -1;
};
</script>
