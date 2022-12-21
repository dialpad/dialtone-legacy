---
title: Toast
status: ready
thumb: true
desc: A toast notice, sometimes called a snackbar, is a time-based message that appears based on users' actions. It contains at-a-glance information about outcomes and can be paired with actions.
storybook_url: https://vue.dialpad.design/?path=/story/components-toast--default
figma_url: https://www.figma.com/file/2adf7JhZOncRyjYiy2joil/DT-Core%3A-Components-7?node-id=8919%3A21834&viewport=-496%2C632%2C0.48&t=xHutRjwo1o5zMTgT-11
---

<!-- <component-combinator component-name="DtToast" /> -->

## Variants and examples

<example-toast />

```html
<aside class="d-toast-wrapper">
  <div class="d-toast" role="status" aria-hidden="true">
    <div class="d-toast__dialog">
      <div class="d-notice__icon">...</div>
      <div class="d-notice__content">
        <h2 class="d-notice__title">...</h2>
        <p class="d-notice__message">...</p>
      </div>
      <div class="d-notice__actions">
        <button type="button" class="d-btn d-btn--sm d-btn--circle d-btn--muted" aria-label="Close">
          <span class="d-btn__icon"><icon-close /></span>
        </button>
      </div>
    </div>
  </div>
</aside>
```

## Classes

<component-class-table component-name="toast" />

## Accessibility

Avoid using toast for critical information since toast disappears automatically and make sure
to provide enough time to read the message and act consequently. For best accessible user experience, the amount of
time a toast displays for should be user configurable.

Using `role="alert"`, it sets `aria-live="assertive"` which
means it will immediately interrupt anything currently being read by the screen reader, so use it for things
that require immediate attention such as:

- An invalid value was entered into a form field
- The user's login session is about to expire
- The connection to the server was lost, local changes will not be saved

Meanwhile `role="status"` implies `aria-live="polite"` which
means the toast will be read out after what's currently being has finished.

<component-accessible-table component-name="toast" />

<script setup>
  import ExampleToast from '@exampleComponents/ExampleToast.vue';
</script>
