<template>
  <router-link
    class="d-btn d-py0"
    title="Go back to the homepage"
    to="/"
  >
    <img
      class="d-h42"
      :alt="brandLogoAlt"
      :src="brandLogo"
    >
  </router-link>
  <nav
    class="d-ml64 d-flow12 lg:d-d-none"
    role="navigation"
  >
    <router-link
      v-for="link in navbarLinks"
      :key="link.text"
      :to="link.link"
      class="d-link d-td-none"
      :class="{ 'router-link-active': isActive(link.text) }"
    >
      {{ link.text }}
    </router-link>
  </nav>
  <div class="d-ml-auto d-flow8 d-d-flex lg:d-d-none">
    <div class="d-d-flex d-flow4">
      <a
        alt="GitHub repo"
        class="d-btn d-btn--muted d-tooltip--hover"
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
          GitHub Repo
        </div>
      </a>
      <a
        alt="Codepen Template"
        class="d-btn d-btn--muted d-tooltip--hover"
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
          Codepen Template
        </div>
      </a>
      <!-- <a
            href="#"
            class="d-btn d-btn--muted d-btn--sm d-tooltip--hover js-theme-switcher"
            title="Toggle dark and light modes"
          >
          {% iconSystem "invert-colors", "d-icon--size-400" %}
          <div class="d-tooltip d-tooltip__arrow--top-center d-ps-absolute d-w128">
              Toggle between dark and light color modes
          </div>
      </a> -->
    </div>
    <div
      id="algolia-search-container"
      ref="searchBtn"
    />
  </div>
</template>

<script setup>
import { useThemeLocaleData } from '@vuepress/plugin-theme-data/client';
import { useSiteLocaleData } from '@vuepress/client';
import { useRoute } from 'vue-router';
import { onMounted, ref, watch } from 'vue';

const navbarLinks = useThemeLocaleData().value.navbar || [];
const brandLogo = useThemeLocaleData().value.logo;
const brandLogoAlt = useSiteLocaleData().value.title;
const activeLink = ref(undefined);
const searchBtn = ref(undefined);
const route = useRoute();
const currentPath = ref(route.path);

function initialize () {
  Promise.all([
    import(/* webpackChunkName: "docsearch" */ '@docsearch/js'),
    import(/* webpackChunkName: "docsearch" */ '@docsearch/css'),
  ]).then(([docsearch]) => {
    docsearch = docsearch.default;
    docsearch({
      indexName: 'dialpad',
      apiKey: '6436ebddb959748daeec411eb388a99d',
      container: '#algolia-search-container',
      appId: 'Y5HG9UX6KM',
      placeholder: 'Search Dialtone',
    });

    convertSearchToDialtone();
  });
}

function convertSearchToDialtone () {
  const DocSearchBtn = searchBtn.value.children.item(0);
  const searchString = document.createElement('span');
  searchString.className = 'd-btn__label';
  searchString.textContent = 'Search Dialtone';

  const searchIcon = document.createElement('span');
  searchIcon.className = 'd-btn__icon d-btn__icon--left';
  // eslint-disable-next-line max-len
  searchIcon.innerHTML = '<svg aria-hidden="true" focusable="false" data-name="Search" class="d-icon d-icon--search d-icon--size-200" viewBox="0 0 12 12"><path fill="currentColor" fill-rule="evenodd" d="M5.5 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM1 5.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z" clip-rule="evenodd"/><path fill="currentColor" fill-rule="evenodd" d="M7.972 7.972a.5.5 0 0 1 .707 0l2.175 2.174a.5.5 0 1 1-.707.708L7.972 8.679a.5.5 0 0 1 0-.707Z" clip-rule="evenodd"/></svg>';

  DocSearchBtn.appendChild(searchString);
  DocSearchBtn.appendChild(searchIcon);
}

function isActive (text) {
  const linkBase = text.toLowerCase().replace(' ', '-');
  if (currentPath.value.search(linkBase) !== -1) {
    activeLink.value = text;
    return true;
  } else {
    return false;
  }
}

onMounted(() => {
  initialize();
});

watch(
  () => route.path,
  newPath => {
    currentPath.value = newPath;
  },
);
</script>
