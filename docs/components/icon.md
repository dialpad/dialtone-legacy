---
title: Icon
desc: The Icon component provides a set of glyphs and sizes to provide context your application.
new: true
no_preview: true
---

<aside class="d-notice d-notice--info d-mt24 d-wmx100p" role="status" aria-hidden="false">
  <div class="d-notice__icon">
    <svg aria-hidden="true" focusable="false" data-name="Info" class="d-icon d-icon--info" viewBox="0 0 12 12"><g clip-path="url(#a)"><path fill="currentColor" fill-rule="evenodd" d="M6 1.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM.5 6a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm5-2a.5.5 0 0 1 .5-.5h.005a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5ZM6 5.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h12v12H0z"/></clipPath></defs></svg>
  </div>
  <div class="d-notice__content d-stack4">
    <h2 class="d-notice__title">Looking for the previous icon set?</h2>
    <p class="d-notice__message">
      <router-link class="d-link" to="/design/icons/system.html">Documentation for the deprecated icon set</router-link> will remain available until this new icon is more fully adopted.
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
    import IconCatalog from "@views/IconCatalog.vue";
    import InboxIcon from '@v7Icons/Inbox.vue';
    import { sizes } from '@data/icon.json';
</script>
