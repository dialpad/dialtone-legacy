<div class="qwerqwerqwerqwer">
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
    <div class="d-stack16">
      <example-notice kind="base" role="status" />
      <example-notice kind="error" role="status" />
      <example-notice kind="info" role="status" />
      <example-notice kind="success" role="status" />
      <example-notice kind="warning" role="status" />
    </div>
  </div>
</div>

<script setup>
  import { accessible } from '@data/banner.json';
  import ExampleBanner from '@exampleComponents/ExampleBanner.vue';
  import ExampleToast from '@exampleComponents/ExampleToast.vue';
  import ExampleNotice from '@exampleComponents/ExampleNotice.vue';
</script>
