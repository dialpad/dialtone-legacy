<template>
  <div class="d-mt8 d-mb16">
    <div class="d-select">
      <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
      <label class="d-vi-visible-sr" for="Dialtone--SelectCategory">Categories</label>
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
import BaseIcon from '@baseComponents/BaseIcon.vue';
import { categories } from '@data/icon.json';
import { computed, ref } from 'vue';

const selectedIcon = ref(null);
const selectedCategory = ref('all');

const categoriesList = computed(() => {
  return Object.keys(categories);
});
const iconsList = computed(() => {
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
