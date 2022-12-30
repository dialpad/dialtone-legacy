<template>
  <aside
    v-if="$page.headers.length > 0"
    class="
    toc lg:d-ps-relative lg:d-t0 lg:d-w100p
    d-ps-sticky d-t64 d-pt24
    d-as-flex-start
    d-pr16 d-w216"
  >
    <h3 class="d-p8 d-pt8 d-headline-eyebrow d-fw-semibold">
      On this page
    </h3>
    <toc :headers="$page.headers" />
  </aside>
</template>
