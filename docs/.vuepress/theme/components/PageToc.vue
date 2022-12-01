<template>
  <aside
    v-if="$page.headers.length > 0"
    class="toc d-t64 d-ps-sticky d-pt24 d-as-flex-start d-zi-navigation d-pr32 d-w216"
  >
    <h3 class="d-pl8 d-fs-100 d-pb8 d-ws-nowrap d-tt-uppercase d-fw-semibold d-fc-secondary">
      On this page
    </h3>
    <toc :headers="$page.headers" />
  </aside>
</template>
