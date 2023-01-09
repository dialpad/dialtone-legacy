<template>
  <div class="d-d-grid d-gg16 d-g-cols6 d-mt8 d-mb16">
    <div class="d-gc4">
      <dt-input
        id="search-input"
        ref="searchRef"
        v-model="search"
        aria-label="Search icon"
        placeholder="Search for an icon"
        class="d-input d-input-icon--left d-input-icon--right"
        type="text"
        autocomplete="off"
      >
        <template #leftIcon>
          <dt-icon
            name="search"
          />
        </template>
        <template #rightIcon>
          <dt-button
            kind="muted"
            importance="clear"
            circle
            id="search-input-button-close"
            aria-label="Clear filters"
            @click="resetSearch"
          >
            <template #icon>
              <dt-icon
                name="close"
              />
            </template>
          </dt-button>
        </template>
      </dt-input>
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
          :disabled="!isCategoryInResults(category)"
        >
          {{ category }}
        </option>
      </select>
    </div>
  </div>
  <div
    v-for="(icons, category) in filteredIconList"
    :key="category"
    class="d-mb16"
  >
    <span
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
  <div
    v-if="!hasSearchResults"
    class="d-d-flex d-fl-center d-p16 d-gg4 d-fc-tertiary d-fs-300"
  >
    <span>No results found for</span>
    <strong class="d-fw-semibold">
      &OpenCurlyDoubleQuote;{{ search }}&CloseCurlyDoubleQuote;
    </strong>
  </div>
</template>

<script setup>
import BaseIcon from '@baseComponents/BaseV7Icon.vue';
import { categories } from '@dialpad/dialtone-icons/dist/icons.json';
import { computed, ref } from 'vue';

const selectedIcon = ref(null);
const selectedCategory = ref('all');
const search = ref(null);
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

const resetSearch = () => {
  search.value = null;
  resetCategory();
  searchRef.value.focus();
};

const resetCategory = () => { selectedCategory.value = 'all'; };

const hasSearchMinimumLength = computed(() => search.value?.length > 1);

const hasSearchResults = computed(() => Object.keys(filteredIconList.value).length > 0);

const iconsList = computed(() => {
  if (hasSearchMinimumLength.value) {
    resetCategory();
    return searchByIconName(categories, search.value);
  }
  return categories;
});

const filteredIconList = computed(() => {
  return selectedCategory.value === 'all'
    ? iconsList.value
    : Object.assign({}, { [selectedCategory.value]: iconsList.value[selectedCategory.value] });
});

const isCategoryInResults = (category) => {
  return Object.keys(iconsList.value).includes(category);
};

const selectIcon = (index) => {
  selectedIcon.value = index !== selectedIcon.value ? index : null;
};
</script>

<style scoped>
  /* more or less a hack, 🤷‍♂️ */
  #search-input-button-close {
    margin-right: calc(var(--size-300) * -1)
  }
</style>
