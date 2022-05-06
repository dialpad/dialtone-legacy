<template>
  <div class="d-ml-auto d-d-none lg:d-d-flex d-ai-center">
    <span v-show="!isMenuOpen" @click="showSearch" class="js-mobile-header-search d-c-pointer d-mr16"> <icon-search/> </span>
    <span v-show="!isMenuOpen" @click="toggleNavbar" class="js-mobile-header-menu d-c-pointer"> <icon-menu/> </span>
    <span v-show="isMenuOpen" @click="toggleNavbar" class="js-mobile-header-close d-c-pointer"> <icon-close/> </span>
    <nav
        class="mobile-header-drop-down-menu d-ps-fixed d-l0 d-w100p d-bgc-white d-of-auto d-fs24 d-d-flex d-fd-column d-ai-baseline d-py24 d-px16"
        :class="{'d-o0 d-d-none': !isMenuOpen }"
    >
      <router-link
          v-for="link in items"
          :to="link.link"
          class="d-link d-mb12"
          @click="toggleNavbar"
          :class="{ 'router-link-active': activeLink === link.text }"
      >
        {{ link.text }}
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import IconSearch from "@svgIcons/IconSearch.vue";
import IconMenu from "@svgIcons/IconMenu.vue";
import { ref, defineEmits } from 'vue';

const isMenuOpen = ref(false);
const searchBtn = ref(undefined);

const props = defineProps({
  items: Array,
  activeLink: String
})

const emit = defineEmits(['search'])

function showSearch() {
  emit('search');
}

function toggleNavbar() {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.classList.toggle('d-of-hidden', !!isMenuOpen.value)
}
</script>

<style lang="less" scoped>
.mobile-header-drop-down-menu {
  top: var(--navbar-height);
  height: 100%;
}
</style>
