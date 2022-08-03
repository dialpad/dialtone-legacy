<template>
  <header
    class="
    d-ps-sticky d-t0 d-x0 d-d-flex
    d-ai-center d-w100 d-pl8 d-pr12
    d-h128 d-hmx64 d-bb d-bc-black-100
    d-bgc-white d-zi-navigation"
  >
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
        >
          <img
            class="d-svg--size20"
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
        >
          <img
            class="d-svg--size20"
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
            {% iconSystem "invert-colors", "d-svg--size20" %}
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
    <mobile-navbar
      :active-link="activeLink"
      :items="navbarLinks"
      @search="openSearch"
    />
    <mobile-sidebar
      v-if="currentPath !== '/'"
      :current-path="currentPath"
    />
  </header>
</template>

<script setup>
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables';
import { useSiteLocaleData } from '@vuepress/client';
import { useRoute } from 'vue-router';
import MobileNavbar from './MobileNavbar.vue';
import MobileSidebar from './MobileSidebar.vue';
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
  searchIcon.innerHTML = '' +
        '<svg aria-hidden="true" aria-label="Search" class="d-svg d-svg--system d-svg__search" viewBox="0 0 24 24">\n' +
          '<path clip-rule="evenodd" d="M15.732 14.318h-.741l-.263-.253a6.095 6.095 0 001.389-5.009c-.441-2.607-2.' +
          '619-4.69-5.246-5.009a6.103 6.103 0 00-6.823 6.82c.319 2.626 2.402 4.802 5.011 5.243a6.103 6.103 0 005.' +
          '012-1.388l.253.262v.741l3.989 3.987a.992.992 0 001.398 0 .99.99 0 000-1.398l-3.979-3.996zm-5.631 0a4.217 ' +
          '4.217 0 01-4.223-4.22A4.216 4.216 0 0110.1 5.876a4.216 4.216 0 014.223 4.22 4.216 4.216 0 01-4.223 4.221z"' +
          'fill-rule="evenodd" />\n' +
        '</svg>';

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
function openSearch () {
  const DocSearchBtn = searchBtn.value.children.item(0);
  DocSearchBtn.click();
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
