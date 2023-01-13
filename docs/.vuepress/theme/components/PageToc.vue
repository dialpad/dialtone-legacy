<template>
  <aside
    class="
    toc lg:d-ps-relative lg:d-t0 lg:d-w100p
    d-ps-sticky d-t64 d-pt24
    d-as-flex-start d-ga-toc"
  >
    <h2 class="d-p8 d-pt8 d-headline-eyebrow d-fw-semibold">
      On this page
    </h2>
    <toc :headers="$page.headers" />
  </aside>
</template>
