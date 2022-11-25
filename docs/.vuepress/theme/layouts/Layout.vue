<template>
  <dt-root-layout
    header-class="d-d-flex d-ai-center d-pl8 d-pr12 d-h64 d-bb d-bc-black-200 d-bgc-white d-zi-navigation"
    :header-sticky="true"
  >
    <template #header>
      <navbar />
    </template>
    <template
      v-if="!$frontmatter.home"
      #sidebar
    >
      <sidebar />
    </template>
    <template #default>
      <home v-if="$frontmatter.home" />
      <div
        v-else
        class="d-d-flex"
      >
        <page />
        <page-toc />
      </div>
    </template>
  </dt-root-layout>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Sidebar from '../components/Sidebar.vue';
import Home from '../components/Home.vue';
import Page from '../components/Page.vue';
import PageToc from '../components/PageToc.vue';
</script>
