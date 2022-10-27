---
title: Icon
desc: The Icon component provides a set of glyphs and sizes to provide context your application.
storybook_url: https://vue.dialpad.design/?path=/story/components-icon--default
new: true
---

<code-well-header>
  <inbox-icon class="d-icon--size-800" />
</code-well-header>

```html
<svg
  aria-hidden="true"
  focusable="false"
  data-name="[ICON_NAME]"
  class="
    d-icon
    d-icon--[SIZE]
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
      <th scope="col">
        Size
      </th>
      <th scope="col">
        Width and height
      </th>
      <th scope="col" class="d-w35p">
        Class
      </th>
      <th scope="col" class="d-ta-center">
        Example
      </th>
      <th scope="col"><span class="d-vi-visible-sr">Exception</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">100</th>
      <td class="d-ff-mono d-fs-100">12px (1.2rem)</td>
      <td class="d-ff-mono d-fs-100">
        .d-icon--100
      </td>
      <td class="d-ta-center">
        <inbox-icon class="d-icon--size-100" />
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">200</th>
      <td class="d-ff-mono d-fs-100">14px (1.4rem)</td>
      <td class="d-ff-mono d-fs-100">
        .d-icon--200
      </td>
      <td class="d-ta-center">
        <inbox-icon class="d-icon--size-200" />
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">300</th>
      <td class="d-ff-mono d-fs-100">18px (1.8rem)</td>
      <td class="d-ff-mono d-fs-100">
        .d-icon--300
      </td>
      <td class="d-ta-center">
        <inbox-icon class="d-icon--size-300" />
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">400</th>
      <td class="d-ff-mono d-fs-100">20px (2.0rem)</td>
      <td class="d-ff-mono d-fs-100">
        .d-icon--400
      </td>
      <td class="d-ta-center">
        <inbox-icon class="d-icon--size-400" />
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">500</th>
      <td class="d-ff-mono d-fs-100">24px (2.4rem)</td>
      <td class="d-ff-mono d-fs-100">
        .d-icon--500
      </td>
      <td class="d-ta-center">
        <inbox-icon class="d-icon--size-500" />
      </td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">600</th>
      <td class="d-ff-mono d-fs-100">32px (3.2rem)</td>
      <td class="d-ff-mono d-fs-100">
        .d-icon--600
      </td>
      <td class="d-ta-center">
        <inbox-icon class="d-icon--size-600" />
      </td>
      <td class="d-ta-right">
        <span class="d-badge d-mr8 d-mb8 d-badge">Device only</span>
      </td>
    </tr>
    <tr>
      <th scope="row">700</th>
      <td class="d-ff-mono d-fs-100">38px (3.8rem)</td>
      <td class="d-ff-mono d-fs-100">
        .d-icon--700
      </td>
      <td class="d-ta-center">
        <inbox-icon class="d-icon--size-700" />
      </td>
      <td class="d-ta-right">
        <span class="d-badge d-mr8 d-mb8 d-badge">Device only</span>
      </td>
    </tr>
    <tr>
      <th scope="row">800</th>
      <td class="d-ff-mono d-fs-100">48px (4.8rem)</td>
      <td class="d-ff-mono d-fs-100">
        .d-icon--800
      </td>
      <td class="d-ta-center">
        <inbox-icon class="d-icon--size-800" />
      </td>
      <td class="d-ta-right">
        <span class="d-badge d-mr8 d-mb8 d-badge">Device only</span>
      </td>
    </tr>
  </tbody>
</table>

<script setup>
    import InboxIcon from '@v7Icons/general/Inbox.vue';
</script>
