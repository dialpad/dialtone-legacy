<template>
  <aside
    class="vuepress-toc lg:d-ps-relative lg:d-w100p d-ps-fixed d-r16 d-pt24"
  >
    <h2 class="d-headline-eyebrow d-fw-semibold">
      On this page
    </h2>
    <toc
      :headers="$page.headers"
      :options="options"
    />
  </aside>
</template>

<script setup>
const options = {
  containerTag: '',
  listClass: 'toc-list d-ls-reset',
  itemClass: 'toc-item',
  linkTag: 'a',
  linkClass: 'd-btn d-btn--sm d-btn--muted d-fw-normal d-w100p d-jc-flex-start',
  linkActiveClass: 'active-item d-btn--active d-fw-medium',
  linkChildrenActiveClass: 'active-category',
};
</script>
