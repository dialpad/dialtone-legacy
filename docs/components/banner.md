---
title: Banner
desc: A banner is a type of <a href="components/notice">notice</a>, delivering system and engagement messaging. It is highly intrusive and should be used sparingly and appropriately.
storybook_url: https://vue.dialpad.design/?path=/story/components-banner--default
---

<example-banner />

## Usage
System banners are used for **system** messaging. They are full-width notices placed in one of two locations:

1. **Above everything else:** If the banner is related to the entire app (e.g. the user lost internet service), place the banner first. <em>These should not be dismissable until the issue is resolved.</em> To pin the banner to the top of the app, add the `.d-notice--pinned` class.
2. **Below the top bar:** This is the default location for system banners. Use these when it affects only a particular area of the product (e.g. when the user is in Do Not Disturb mode).

Banners are a type of notice and so you can use the following <a href="components/notice/">notice styles</a> in conjunction with `.d-banner`.

## Variants and Examples
<example-banner />

```html
<aside class="d-banner" role="alert" aria-hidden="false">
  <div class="d-banner__dialog" role="alertdialog" aria-labelledy="info-alert-title" aria-describedby="info-alert-desc">
    <div class="d-notice__icon">
      <IconInfo />
    </div>
    <div class="d-notice__content">
      <h2 class="d-notice__title" id="info-alert-title">Optional title</h2>
      <p class="d-notice__message" id="info-alert-desc">Message body with <a href="#">a link.</a></p>
    </div>
    <div class="d-notice__actions">
      <button type="button" class="d-btn d-btn--sm d-btn--outlined d-btn--muted">Action</button>
      <button type="button" class="d-btn d-btn--sm d-btn--circle d-btn--muted js-example-notice-close" aria-label="Close">
        <span class="d-btn__icon"><IconClose /></span>
      </button>
    </div>
</aside>

<aside class="d-banner d-banner--error" role="alert" aria-hidden="false">…</aside>
<aside class="d-banner d-banner--info" role="alert" aria-hidden="false">…</aside>
<aside class="d-banner d-banner--success" role="alert" aria-hidden="false">…</aside>
<aside class="d-banner d-banner--warning" role="alert" aria-hidden="false">…</aside>
```

## Classes
<component-class-table component-name="banner"></component-class-table>

## Accessibility
<component-accessible-table component-name="banner"></component-accessible-table>

<script setup>
  import { accessible } from '@data/banner.json';
  import ExampleBanner from '@exampleComponents/ExampleBanner.vue';
</script>
