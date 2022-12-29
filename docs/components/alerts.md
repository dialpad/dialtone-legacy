---
title: Alert-like components
---

<div class="qwerqwerqwerqwer d-pt64">
  <div class="d-d-flex d-d-flex d-jc-center d-flow8 d-ai-center">
    <strong>Toggle</strong>
    <button class="d-btn d-btn--outlined" onclick="(() => { const buttons = document.querySelectorAll('.d-notice__actions .d-btn--outlined'); buttons.forEach(button => { button.style.display = button.style.display === 'none' ? 'block' : 'none'; }); })()"><dt-icon name="eye" size="300" /> Action</button>
    <button class="d-btn d-btn--outlined" onclick="(() => { const buttons = document.querySelectorAll('.d-notice__actions .d-btn--circle'); buttons.forEach(button => { button.style.display = button.style.display === 'none' ? 'block' : 'none'; }); })()"><dt-icon name="eye" size="300" /> Close</button>
    <button class="d-btn d-btn--outlined" onclick="(() => { const buttons = document.querySelectorAll('.d-notice__title'); buttons.forEach(button => { button.style.display = button.style.display === 'none' ? 'block' : 'none'; }); })()"><dt-icon name="eye" size="300" /> Title</button>
    <button class="d-btn d-btn--outlined" onclick="(() => { const buttons = document.querySelectorAll('.d-notice__message'); buttons.forEach(button => { button.style.display = button.style.display === 'none' ? 'block' : 'none'; }); })()"><dt-icon name="eye" size="300" /> Message</button>
  </div>
  <h2>Banner</h2>
  <div class="qwerqwerqwerqwer__list">
    <div>
      <example-banner />
    </div>
  </div>
  <h2>Toast</h2>
  <div class="qwerqwerqwerqwer__list">
    <div>
      <example-toast />
    </div>
  </div>
  <h2>Notice</h2>
  <div class="qwerqwerqwerqwer__list">
    <div class="d-d-flex d-flow16">
      <div class="d-fl-grow1 d-stack16">
        <example-notice class="d-w100p" kind="base" role="status" />
        <example-notice class="d-w100p" kind="error" role="status" />
        <example-notice class="d-w100p" kind="info" role="status" />
        <example-notice class="d-w100p" kind="success" role="status" />
        <example-notice class="d-w100p" kind="warning" role="status" />
      </div>
      <div class="d-fl-grow1 d-stack16">
        <example-notice class="d-w100p" kind="base" role="status" important />
        <example-notice class="d-w100p" kind="error" role="status" important />
        <example-notice class="d-w100p" kind="info" role="status" important />
        <example-notice class="d-w100p" kind="success" role="status" important />
        <example-notice class="d-w100p" kind="warning" role="status" important />
      </div>
    </div>
  </div>
</div>

<script setup>
  import { accessible } from '@data/banner.json';
  import ExampleBanner from '@exampleComponents/ExampleBanner.vue';
  import ExampleToast from '@exampleComponents/ExampleToast.vue';
  import ExampleNotice from '@exampleComponents/ExampleNotice.vue';
</script>
