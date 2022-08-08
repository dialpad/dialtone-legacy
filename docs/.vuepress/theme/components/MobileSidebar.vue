<template>
  <div class="mobile-sidebar">
    <div
      class="
        d-ps-fixed d-w100p d-bgc-white d-h64 d-x0
        lg:d-d-flex d-bb d-bc-black-100 d-ai-center
        d-jc-space-between d-t64 d-d-none
      "
    >
      <ul
        id="breadcrumbs"
        class="d-breadcrumbs d-p12 d-of-hidden d-to-ellipsis d-ws-nowrap d-w628"
      >
        <li
          v-for="breadcrumb in breadcrumbs"
          :key="breadcrumb"
          class="d-breadcrumbs__item d-d-inline"
        >
          {{ breadcrumb }}
        </li>
      </ul>
      <span
        :class="{ 'breadcrumb-arrow--top': isSiteNavOpen }"
        class="d-w24 d-h24 d-p12 d-mr12 breadcrumb-arrow d-c-pointer"
        @click="toggleSiteNav"
        @keydown.space="toggleSiteNav"
      >
        <icon-arrow-back-ios />
      </span>
    </div>
    <div
      :class="{ 'd-o0 d-d-none': !isSiteNavOpen }"
      class="
        mobile-header-drop-down-navigation d-ps-fixed d-l0 d-w100p
        d-bgc-white d-of-auto d-fs24 d-d-flex
        d-fd-column d-ai-baseline d-pt24 d-pr16
      "
    >
      <sidebar-items @click="toggleSiteNav" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import IconArrowBackIos from '@svgIcons/IconArrowBackIos.vue';
import SidebarItems from '@theme/SidebarItems.vue';

const props = defineProps({ currentPath: { type: String, required: true } });

const isSiteNavOpen = ref(false);

const breadcrumbs = computed(() => {
  return props.currentPath
    .replaceAll('-', ' ')
    .replace('.html', '')
    .split('/')
    .filter(v => v.trim())
    .map(v => v[0].toUpperCase() + v.slice(1));
});

function toggleSiteNav () {
  isSiteNavOpen.value = !isSiteNavOpen.value;
  document.body.classList.toggle('d-of-hidden', !!isSiteNavOpen.value);
}
</script>

<style lang="less">
.mobile-sidebar {
  .breadcrumb-arrow {
    transform: rotate(-90deg);

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1.5rem;
      height: 1.5rem;
    }

    &--top {
      transform: rotate(90deg);
    }
  }

  .d-breadcrumbs .d-breadcrumbs__item:not(:last-of-type):before {
    right: -1rem;
    margin-top: 0;
  }

  .mobile-header-drop-down-navigation {
    top: var(--su128);
    height: 100%;
    padding-bottom: 15.2rem;

    ul {
      list-style-type: none;
    }
  }
}
</style>
