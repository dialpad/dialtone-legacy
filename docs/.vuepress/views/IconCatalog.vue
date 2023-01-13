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
        @keyup="searchByIconName"
      >
        <template #leftIcon>
          <dt-icon name="search" />
        </template>
        <template #rightIcon>
          <dt-button
            id="search-input-button-close"
            kind="muted"
            importance="clear"
            circle
            aria-label="Clear filters"
            @click="resetSearch"
          >
            <template #icon>
              <dt-icon name="close" />
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
          value=""
          selected
        >
          All categories
        </option>
        <option
          v-for="(_, category) in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
  </div>
  <div
    v-for="(icons, category) in filteredIconsList"
    :key="category"
    class="d-mb16"
  >
    <span
      class="d-headline-medium d-tt-capitalize"
      v-text="category"
    />
    <div class="d-gl-docsite-icons">
      <icon-popover
        v-for="(keywords, name) in icons"
        :key="name"
        v-model="isPopoverOpen[name]"
        :icon-name="name"
        :category="category"
        :keywords="keywords"
        @click="selectIcon({ name, keywords, category })"
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
  <dt-modal
    :show="isModalOpen"
    :close-button-props="{ ariaLabel: 'Close' }"
    size="full"
    content-class="d-wmx100p d-pr32"
    @update:show="isModalOpen = false"
  >
    <template #header>
      <span
        class="d-tt-capitalize"
        v-text="selectedIcon.name"
      />
    </template>
    <icon-popover-content
      :icon-name="selectedIcon.name"
      :keywords="selectedIcon.keywords"
      :category="selectedIcon.category"
    />
  </dt-modal>
</template>

<script setup>
import { categories } from '@dialpad/dialtone-icons/dist/icons.json';
import { computed, onMounted, ref, watch } from 'vue';
import IconPopover from '../baseComponents/IconPopover.vue';
import IconPopoverContent from '../baseComponents/IconPopoverContent.vue';

const selectedCategory = ref('');
const search = ref(null);
const searching = ref(false);
const searchRef = ref(null);
const isMobile = ref(false);
const isModalOpen = ref(false);
const isPopoverOpen = ref({});
const filteredIconsList = ref({});
const delayTimer = ref(null);
const selectedIcon = ref(undefined);

const searchByIconName = () => {
  clearTimeout(delayTimer.value);
  delayTimer.value = setTimeout(() => {
    searching.value = true;
    resetCategory();
    filterIconList();
  }, 300);
};

const resetSearch = () => {
  searching.value = false;
  search.value = null;
  resetCategory();
  searchRef.value.focus();
  filterIconList();
};

const resetCategory = () => {
  selectedCategory.value = '';
};

const hasSearchResults = computed(() => Object.keys(filteredIconsList.value).length > 0);

const filterIconList = () => {
  const regex = new RegExp(search.value, 'i');
  const filteredIcons = Object.keys(categories)
    .filter(category => category.includes(selectedCategory.value))
    .reduce((acc, category) => {
      const filteredCategory = Object.keys(categories[category])
        .filter(icon => !search.value || regex.test(icon))
        .reduce((acc, icon) => Object.assign(acc, { [icon]: Object.freeze(categories[category][icon]) }), {});

      if (Object.keys(filteredCategory).length) {
        Object.assign(acc, { [category]: Object.freeze(filteredCategory) });
      }
      return acc;
    }, {});

  filteredIconsList.value = Object.freeze(filteredIcons);
};

const selectIcon = (icon) => {
  selectedIcon.value = icon;
  if (isMobile.value) isModalOpen.value = true;
  else isPopoverOpen.value[icon.name] = !isPopoverOpen.value[icon.name];
};

watch(selectedCategory, (newCategory) => {
  if (newCategory === 'all' && searching.value) return;
  searching.value = false;
  filterIconList();
});
onMounted(() => {
  isMobile.value = window.outerWidth <= 980;
  filterIconList();
});
</script>

<style scoped>
  /* more or less a hack, 🤷‍♂️ */
  #search-input-button-close {
    margin-right: calc(var(--size-300) * -1)
  }
</style>
