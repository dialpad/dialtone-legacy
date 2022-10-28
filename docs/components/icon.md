---
title: Icon
desc: The Icon component provides a set of glyphs and sizes to provide context your application.
storybook_url: https://vue.dialpad.design/?path=/story/components-icon--default
new: true
---

<code-well-header>
    <inbox-icon class="d-icon--size-800" />
</code-well-header>

## Usage

### SVG

To use SVG icons use the following path: `@dialpad/dialtone/lib/dist/svg/v7/icon-name.svg`

## Variants and examples

### Base Styles

<code-well-header>
    <inbox-icon class="d-icon--size-800"></inbox-icon>
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
    import InboxIcon from '@v7Icons/Inbox.vue';
    import { sizes } from '@data/icon.json';
</script>
