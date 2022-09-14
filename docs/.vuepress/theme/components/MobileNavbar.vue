<template>
  <div class="d-ml-auto d-d-none lg:d-d-flex d-ai-center">
    <span
      v-show="!isMenuOpen"
      class="js-mobile-header-search d-c-pointer d-mr16"
      @click="showSearch"
      @keydown.space="showSearch"
    > <icon-search /> </span>
    <span
      v-show="!isMenuOpen"
      class="js-mobile-header-menu d-c-pointer"
      @click="toggleNavbar"
      @keydown.space="toggleNavbar"
    > <icon-menu /> </span>
    <span
      v-show="isMenuOpen"
      class="js-mobile-header-close d-c-pointer"
      @click="toggleNavbar"
      @keydown.space="toggleNavbar"
    > <icon-close /> </span>
    <nav
      class="
        mobile-header-drop-down-menu d-ps-fixed d-l0 d-w100p
        d-bgc-white d-of-auto d-fs-300 d-d-flex
        d-fd-column d-ai-baseline d-py24 d-px16
      "
      :class="{ 'd-o0 d-d-none': !isMenuOpen }"
    >
      <router-link
        v-for="link in items"
        :key="link"
        :to="link.link"
        class="d-link d-mb12"
        :class="{ 'router-link-active': activeLink === link.text }"
        @click="toggleNavbar"
      >
        {{ link.text }}
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import IconSearch from '@svgIcons/IconSearch.vue';
import IconMenu from '@svgIcons/IconMenu.vue';
import { ref } from 'vue';

const isMenuOpen = ref(false);

defineProps({
  items: { type: Array, required: true },
  activeLink: { type: String, default: '' },
});

const emit = defineEmits(['search']);

function showSearch () {
  emit('search');
}

function toggleNavbar () {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.classList.toggle('d-of-hidden', !!isMenuOpen.value);
}
</script>

<style lang="less" scoped>
.mobile-header-drop-down-menu {
  top: var(--navbar-height);
  height: 100%;
}
</style>
