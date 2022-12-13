<template>
  <aside
    v-if="$page.headers.length > 0"
    class="
    toc lg:d-ps-relative lg:d-t0 lg:d-w100p
    d-ps-sticky d-t64 d-pt24
    d-as-flex-start
    d-pr32 d-w216"
  >
    <h3 class="d-pl8 d-fs-100 d-pb8 d-ws-nowrap d-tt-uppercase d-fw-semibold d-fc-secondary">
      On this page
    </h3>
    <toc :headers="$page.headers" />
  </aside>
</template>
