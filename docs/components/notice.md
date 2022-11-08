---
title: Notice
desc: A notice is an informational and assistive message that appears inline with content.
storybook_url: https://vue.dialpad.design/?path=/story/components-notice--default
---
<code-well-header bgclass="d-bgc-white">
  <example-notice kind="base" role="status" />
</code-well-header>

<!-- <component-combinator component-name="DtNotice" /> -->

## Usage

A notice delivers informational and assistive messages that inform the user about product or account statuses and related actions. It can suggest an action or dismissed by the user, though neither are required. For time-based notifications, see [Toast](toast.md).

## Variants and examples

### Base Styles

Used in most scenarios when the message should be noticeable but not dominate.

<code-well-header bgclass="d-bgc-white">
  <example-notice kind="base" role="status" />
  <example-notice kind="error" role="status" />
  <example-notice kind="info" role="status" />
  <example-notice kind="success" role="status" />
  <example-notice kind="warning" role="status" />
</code-well-header>

```html
<aside class="d-notice d-notice--base" role="status" aria-hidden="false">
  <div class="d-notice__icon">
    <IconInfo />
  </div>
  <div class="d-notice__content">
    <h2 class="d-notice__title">Optional title</h2>
    <p class="d-notice__message">Message body with <a href="#" class="d-link d-link--muted">a link.</a></p>
  </div>
  <div class="d-notice__actions">
    <button type="button" class="d-btn d-btn--sm d-btn--outlined d-btn--muted">Action</button>
    <button type="button" class="d-btn d-btn--sm d-btn--circle d-btn--muted js-example-notice-close" aria-label="Close">
      <span class="d-btn__icon"><IconClose /></span>
    </button>
  </div>
</aside>

<aside class="d-notice d-notice--error" role="status" aria-hidden="false">…</aside>
<aside class="d-notice d-notice--info" role="status" aria-hidden="false">…</aside>
<aside class="d-notice d-notice--success" role="status" aria-hidden="false">…</aside>
<aside class="d-notice d-notice--warning" role="status" aria-hidden="false">…</aside>
```

### Important

Used occasionally in scenarios when the message needs to dominate.

<code-well-header>
  <example-notice kind="base" role="status" important />
  <example-notice kind="error" role="status" important />
  <example-notice kind="info" role="status" important />
  <example-notice kind="success" role="status" important />
  <example-notice kind="warning" role="status" important />
</code-well-header>

```html
<aside class="d-notice d-notice--base d-notice--important" role="alert" aria-hidden="false">
  <div class="d-notice__icon">
    <IconInfo />
  </div>
  <div class="d-notice__content">
    <h2 class="d-notice__title">Optional title</h2>
    <p class="d-notice__message">Message body with <a href="#" class="d-link d-link--inverted">a link.</a></p>
  </div>
  <div class="d-notice__actions">
    <button type="button" class="d-btn d-btn--sm d-btn--outlined d-btn--inverted">Action</button>
    <button type="button" class="d-btn d-btn--sm d-btn--circle d-btn--inverted js-example-notice-close" aria-label="Close">
      <span class="d-btn__icon"><IconClose /></span>
    </button>
  </div>
</aside>

<aside class="d-notice d-notice--error d-notice--important" role="alert" aria-hidden="false">…</aside>
<aside class="d-notice d-notice--info d-notice--important" role="alert" aria-hidden="false">…</aside>
<aside class="d-notice d-notice--success d-notice--important" role="alert" aria-hidden="false">…</aside>
<aside class="d-notice d-notice--warning d-notice--important" role="alert" aria-hidden="false">…</aside>
```

## Classes

<component-class-table component-name="notice" />

## Accessibility

<component-accessible-table component-name="notice" />

<script setup>
  import ExampleNotice from '@exampleComponents/ExampleNotice.vue';
</script>
