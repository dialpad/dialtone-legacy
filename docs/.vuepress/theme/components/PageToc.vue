<template>
  <aside
    class="vuepress-toc lg:d-ps-relative lg:d-w100p d-ps-fixed d-r16 d-pt24"
  >
    <h2 class="lg:d-pl12 d-headline-eyebrow d-fw-semibold">
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
  listClass: 'toc-list d-ls-reset lg:d-d-flex',
  itemClass: 'toc-item lg:d-d-flex',
  linkTag: 'a',
  linkClass: 'd-btn d-btn--sm d-btn--muted d-fw-normal d-w100p d-jc-flex-start d-ws-nowrap',
  linkActiveClass: 'active-item d-btn--active d-fw-medium',
  linkChildrenActiveClass: 'active-category',
};
</script>
