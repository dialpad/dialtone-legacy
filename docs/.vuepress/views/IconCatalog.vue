<template>
  <div class="d-ba d-bar8 d-p12 d-bc-black-300">
    <div
      v-for="(icons, category) in categories"
      :key="category"
      class="d-mb12"
    >
      <span
        class="d-fw-bold d-tt-capitalize"
        v-text="category"
      />
      <div class="d-gl-docsite-icons">
        <base-icon
          v-for="(keywords, icon, index) in icons"
          :key="index"
          :file-name="icon"
          :keywords="keywords"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { categories } from '@data/icon.json';
import BaseIcon from '@baseComponents/BaseIcon.vue';
</script>

<style scoped>

</style>
