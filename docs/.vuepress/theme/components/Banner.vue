<template>
  <aside aria-hidden="false" class="d-banner d-banner--info d-ps-relative lg:d-d-none" role="alert">
    <div aria-describedby="info-alert-desc" aria-labelledy="info-alert-title" class="d-banner__dialog d-w-unset"
         role="alertdialog">
      <div class="d-notice__icon">
        <icon-info />
      </div>
      <div class="d-notice__content">
        <h1 id="info-alert-title" class="d-notice__title">Dialtone 6.0 is here!</h1>
        <p id="info-alert-desc" class="d-notice__message">
          Looking for Dialtone 5 documentation?
          <a class="d-link" href="//dialpad.design/version5" target="_blank">Find it here.</a>
        </p>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Banner'
}
</script>
