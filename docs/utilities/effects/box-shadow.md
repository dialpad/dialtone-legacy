---
title: Box Shadows
desc: Utilities for controlling an element's box shadows.
prev:
  text: Divide Width
  link: /utilities/borders/divide-width
---

## Outer shadow

Use `d-bs-{n}` to add an outer box shadow to an element.

<code-well-header class="d-fl-col4 d-flg16 d-fw-wrap d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102" custom>
  <div v-for="{ className } in boxSize" class="d-fl-center d-p16 d-bar8 d-bgc-white d-fs18 d-fw-bold" :class="`d-bs-${className}`">.d-bs-{{ className }}</div>
</code-well-header>

```html

<div class="d-bs-sm">...</div>
<div class="d-bs-md">...</div>
<div class="d-bs-lg">...</div>
<div class="d-bs-xl">...</div>
<div class="d-bs-card">...</div>
```

## No shadow

Use `d-bs-none` to remove a box shadow to an element.

<code-well-header class="d-fl-center d-p24 d-bgc-pink-100 d-bgo50 d-w100p d-hmn102" custom>
  <div class="d-fl-center d-p16 d-bar8 d-bgc-white d-fs18 d-fw-bold d-bs-none">.d-bs-none</div>
</code-well-header>

```html

<div class="d-bs-none">...</div>
```

## Hover

Use `h:d-bs-{n}` to change an element's `:hover` state box shadow.

<code-well-header class="d-fl-center d-p24 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102" custom>
  <div class="d-fl-center d-p16 d-bar8 d-bgc-white d-fs18 d-fw-bold d-bs-none h:d-bs-lg">Hover over me</div>
</code-well-header>

```html

<div class="d-bs-none h:d-bs-lg">Hover over me</div>
```

## Focus

Use `f:d-bs-{n}` to change an element's `:focus` and `:focus-within` state box shadow.

<code-well-header class="d-fl-center d-p24 d-bgc-pink-100 d-bgo50 d-w100p d-hmn102" custom>
  <div tabindex="0" class="d-fl-center d-p16 d-bar8 d-bgc-white d-fs18 d-fw-bold d-bs-none f:d-bs-lg">Click on me</div>
</code-well-header>

```html

<div tabindex="0" class="d-bs-none f:d-bs-lg">Click on me</div>
```

## Focus visible

Use `fv:d-bs-{n}` to change an element's `:focus-visible` state box shadow [only when focused by keyboard].

<code-well-header class="d-fl-center d-p24 d-bgc-pink-100 d-bgo50 d-w100p d-hmn102" custom>
  <div tabindex="0" class="d-fl-center d-p16 d-bar8 d-bgc-white d-fs18 d-fw-bold d-bs-none fv:d-bs-lg">Focus on me</div>
</code-well-header>

```html

<div tabindex="0" class="d-bs-none fv:d-bs-lg">Click on me</div>
```

<script setup>
  const boxSize = [
    {className: "sm", size: 4, opacity: 15},
    {className: "md", size: 8, opacity: 25},
    {className: "lg", size: 12, opacity: 30},
    {className: "xl", size: 16, opacity: 30},
    {className: "card", size: 4, opacity: 30},
  ];
</script>

## Variables

<table class="d-table dialtone-doc-table">
  <thead>
    <tr>
      <th scope="col" class="d-w25p">CSS Variable</th>
      <th scope="col">Output</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="{className, size, opacity} in boxSize">
      <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">var(--bs-{{ className }})</th>
      <td class="d-ff-mono d-fc-orange d-fs12">
        <span v-if="className !== 'card'">
          0 var(--su2) var(--su{{size}}) 0 hsla(var(--black-900-h) var(--black-900-s) var(--black-900-l) / {{opacity}}%);
        </span>
        <span v-else>
          0 var(--su2) var(--su16) 0 hsla(var(--black-900-h) var(--black-900-s) var(--black-900-l) / 8%),<br/>
          0 var(--su2) var(--su4) 0 hsla(var(--black-900-h) var(--black-900-s) var(--black-900-l) / 4%),<br/>
          0 var(--su1) var(--su2) 0 hsla(var(--black-900-h) var(--black-900-s) var(--black-900-l) / 3%);
        </span>
      </td>
    </tr>
  </tbody>
</table>

## Classes

<utility-class-table>
  <template #content>
    <tbody>
      <tr v-for="{ className } in boxSize">
        <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-bs-{{ className }}</th>
        <td class="d-ff-mono d-fc-orange d-fs12">box-shadow: var(--br-{{ className }}) !important;</td>
      </tr>
      <tr>
        <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-bs-none</th>
        <td class="d-ff-mono d-fc-orange d-fs12">box-shadow: none !important;</td>
      </tr>
      <tr>
        <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-bs-unset</th>
        <td class="d-ff-mono d-fc-orange d-fs12">box-shadow: unset !important;</td>
      </tr>
    </tbody>
  </template>
</utility-class-table>
