---
title: Icon
desc: An icon is used to visually communicate commands, meaning, status, feedback, or common actions.
new: true
no_preview: true
---

<aside class="d-notice d-notice--info d-mt24 d-wmx100p" role="status" aria-hidden="false">
  <div class="d-notice__icon">
    <icon-info></icon-info>
  </div>
  <div class="d-notice__content d-stack4">
    <h2 class="d-notice__title">Looking for the previous icon set?</h2>
    <p class="d-notice__message">
      Check
      <a
        href="https://dialpad.design/version6/design/icons/system.html"
        class="d-link"
        target="_blank"
      >
       documentation for the deprecated icon set
      </a>.
    </p>
  </div>
</aside>

## Icon catalog

<icon-catalog></icon-catalog>

## Variants and examples

### Base Styles

<code-well-header>
    <inbox-icon></inbox-icon>
</code-well-header>

```html
<svg
  aria-hidden="true"
  focusable="false"
  data-name="[ICON_NAME]"
  class="
    d-icon
    d-icon--size-[SIZE]
    d-icon--[ICON_NAME]
  "
  viewBox="0 0 12 12"
>
  ...
</svg>
```

## Sizes

<table class="d-table dialtone-doc-table">
  <thead>
    <tr>
      <th scope="col">Size</th>
      <th scope="col">Width and height</th>
      <th scope="col" class="d-w35p">Class</th>
      <th scope="col" class="d-ta-center">Example</th>
      <th scope="col"><span class="d-vi-visible-sr">Exception</span></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="{size, width_height, className, deviceOnly } in sizes">
      <th scope="row">{{ size }}</th>
      <td class="d-ff-mono d-fs-100">{{ width_height }}</td>
      <td class="d-ff-mono d-fs-100">.{{ className }}</td>
      <td class="d-ta-center">
        <inbox-icon :class="className" />
      </td>
      <td class="d-ta-right">
        <span v-if="deviceOnly" class="d-badge d-mr8 d-mb8 d-badge">Device only</span>
      </td>
    </tr>
  </tbody>
</table>

<script setup>
    import IconInfo from '@v7Icons/Info.vue';
    import IconCatalog from "@views/IconCatalog.vue";
    import InboxIcon from '@v7Icons/Inbox.vue';
    import { sizes } from '@data/icon.json';
</script>
