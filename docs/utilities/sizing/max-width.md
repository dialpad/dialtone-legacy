---
title: Max-width
desc: Utilities to control an element's maximum width.
---

## Percentages
Use `d-wmx{n}p` to set a minimum width percentage for an element. This can be combined with `d-w{n}p` and `d-wmn{n}` to have an element fill a certain height range.

<code-well-header class="d-d-flex d-jc-center d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-flow16" custom>
  <div class="d-fl-center d-py16 d-px8 d-w100p d-wmx50p d-bgc-purple-300 d-bar4 d-fs24 d-fw-bold d-ta-center">1</div>
</code-well-header>

```html
<div class="d-w100p d-wmx50p">1</div>
```

## Fixed
Use `d-wmx{n}` to set a fixed minimum width for an element. This can be combined with `d-w{n}p` and `d-wmn{n}` to have an element fill a certain height range.

<code-well-header class="d-d-flex d-jc-center d-p24 d-bgc-pink-100 d-bgo50 d-w100p d-flow16 d-of-y-scroll" custom>
  <div class="d-fl-center d-py16 d-px8 d-w100p d-h64 d-wmx64 d-bgc-pink-300 d-bar4 d-fs24 d-fw-bold d-ta-center">1</div>
  <div class="d-fl-center d-py16 d-px8 d-w100p d-h64 d-wmx96 d-bgc-pink-300 d-bar4 d-fs24 d-fw-bold d-ta-center">2</div>
  <div class="d-fl-center d-py16 d-px8 d-w100p d-h64 d-wmx332 d-bgc-pink-300 d-bar4 d-fs24 d-fw-bold d-ta-center">3</div>
</code-well-header>

```html
<div class="d-w100p d-wmx64">1</div>
<div class="d-w100p d-wmx96">2</div>
<div class="d-w100p d-wmx332">3</div>
```

<script setup>
  import { percentage, fixed, other } from '@data/width-height.json';
</script>

## Classes
<div class="d-h464 d-of-y-scroll d-bb d-bc-black-200">
  <table class="d-table dialtone-doc-table">
    <thead>
      <tr>
        <th scope="col" class="d-w30p">Class</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in percentage">
        <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-wmx{{ i }}p</th>
        <td class="d-ff-mono d-fc-orange-500 d-fs12">max-width: {{ i }}% !important;</td>
      </tr>
    </tbody>
    <tbody>
      <tr v-for="i in fixed">
        <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-wmx{{ i }}</th>
        <td class="d-ff-mono d-fc-orange-500 d-fs12">max-width: {{ i }}px !important;</td>
      </tr>
    </tbody>
    <tbody>
      <tr v-for="i in other">
        <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-wmx-{{ i }}</th>
        <td class="d-ff-mono d-fc-orange-500 d-fs12">max-width: {{ i }} !important;</td>
      </tr>
    </tbody>
  </table>
</div>
