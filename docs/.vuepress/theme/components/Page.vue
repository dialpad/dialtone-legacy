<template>
  <div class="main-content d-w100p d-pt24">
    <page-header>
      <template #content-bottom>
        <page-toc
          v-if="isMobile"
          :headers="$page.headers"
        />
      </template>
    </page-header>
    <content />
  </div>
</template>

<script setup>
import PageHeader from '../components/PageHeader.vue';
import PageToc from '../components/PageToc.vue';
const isMobile = false;
</script>
