<script>
import Navbar from '@theme/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
<!--  <aside aria-hidden="false" class="d-banner d-banner&#45;&#45;info d-ps-relative js-dialtone5-banner" role="alert">-->
<!--    <div aria-describedby="info-alert-desc" aria-labelledy="info-alert-title" class="d-banner__dialog d-w-unset"-->
<!--         role="alertdialog">-->
<!--      <div class="d-notice__icon">-->
<!--        <IconInfo/>-->
<!--      </div>-->
<!--      <div class="d-notice__content">-->
<!--        <h1 id="info-alert-title" class="d-notice__title">Dialtone 6.0 is here!</h1>-->
<!--        <p id="info-alert-desc" class="d-notice__message">-->
<!--          Looking for Dialtone 5 documentation?-->
<!--          <a class="d-link" href="//version5.dialpad.design" target="_blank">Find it here.</a>-->
<!--        </p>-->
<!--      </div>-->
<!--    </div>-->
<!--  </aside>-->
  <Navbar/>
  <div class="d-ps-relative d-stack16">
    <Content/>
  </div>
</template>
