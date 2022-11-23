<template>
  <div class="d-d-grid d-gg16 d-g-cols6 d-mt8 d-mb16">
    <div class="d-gc4 d-input__wrapper">
      <span class="d-input-icon d-input-icon--left">
        <icon-search />
      </span>
      <input
        id="search-input"
        ref="searchRef"
        v-model="search"
        aria-label="Search icon"
        class="d-input d-input-icon--left d-input-icon--right"
        type="text"
      >
      <span class="d-input-icon d-input-icon--right">
        <icon-close
          class="d-c-pointer"
          @click="resetSearch"
        />
      </span>
    </div>
    <div class="d-gc2 d-select">
      <label
        class="d-vi-visible-sr"
        for="Dialtone--SelectCategory"
      >
        Categories
      </label>
      <select
        id="Dialtone--SelectCategory"
        v-model="selectedCategory"
        class="d-select__input d-tt-capitalize"
      >
        <option
          value="all"
          selected
        >
          All categories
        </option>
        <option
          v-for="category in categoriesList"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
  </div>
  <div
    v-for="(icons, category) in iconsList"
    :key="category"
    class="d-mb16"
  >
    <span
      v-if="selectedCategory === 'all' "
      class="d-headline-medium d-tt-capitalize"
      v-text="category"
    />
    <div class="d-gl-docsite-icons">
      <base-icon
        v-for="(keywords, icon, index) in icons"
        :key="`${category}-${index}`"
        :file-name="icon"
        :keywords="keywords"
        :selected="selectedIcon === `${category}-${index}`"
        @select-icon="selectIcon(`${category}-${index}`)"
      />
    </div>
  </div>
</template>

<script setup>
import BaseIcon from '@baseComponents/BaseV7Icon.vue';
import { categories } from '@data/icon.json';
import { computed, ref } from 'vue';
import IconSearch from '@v7Icons/Search.vue';
import IconClose from '@v7Icons/Close.vue';
import { refDebounced } from '@vueuse/core';

const selectedIcon = ref(null);
const selectedCategory = ref('all');
const search = ref(null);
const searchDebounced = refDebounced(search, 500);
const searchRef = ref(null);

const categoriesList = computed(() => {
  return Object.keys(categories);
});

const searchByIconName = (icons, name) => {
  const result = {};
  const regex = new RegExp(name, 'i');

  for (const category in icons) {
    for (const icon in icons[category]) {
      if (regex.test(icon)) {
        if (result[category] === undefined) {
          result[category] = {};
        }

        result[category][icon] = icons[category][icon];
      }
    }
  }

  return result;
};

const resetSearch = () => { search.value = null; searchDebounced.value = null; searchRef.value.focus(); };

const resetCategory = () => { selectedCategory.value = 'all'; };

const iconsList = computed(() => {
  if (searchDebounced.value != null && searchDebounced.value !== '') {
    resetCategory();
    return searchByIconName(categories, searchDebounced.value);
  }

  return selectedCategory.value === 'all'
    ? categories
    : Object.assign({}, { [selectedCategory.value]: categories[selectedCategory.value] });
});

const selectIcon = (index) => {
  selectedIcon.value = index !== selectedIcon.value ? index : null;
};
</script>

<style scoped>

</style>