---
title: Badge
desc: A badge is a compact UI element providing brief, descriptive information about an element and its surrounding context. It is terse, ideally one word.
storybook_url: https://vue.dialpad.design/?path=/story/components-badge--default
figma_url: https://www.figma.com/file/2adf7JhZOncRyjYiy2joil/DT-Core%3A-Components-7?node-id=8914%3A21227&viewport=656%2C314%2C0.55&t=xHutRjwo1o5zMTgT-11
---

<div class="d-p64 d-ba d-bc-black-300 d-mb32">
  <div class="d-mb4"><strong>Kind</strong>: Default (implicitly “label”)</div>
  <div class="d-fl-center d-mb16" style="justify-content: flex-start; gap: 8px">
    <span class="d-badge">Label</span>
    <!-- <span class="d-badge">
      <svg aria-hidden="true" focusable="false" data-name="Lightning Bolt" class="d-icon d-icon--lightningBolt d-icon--size-200" viewBox="0 0 12 12" data-qa="dt-icon"><path fill="currentColor" fill-rule="evenodd" d="M6.7.541a.5.5 0 0 1 .296.521L6.566 4.5H10.5a.5.5 0 0 1 .384.82l-5 6a.5.5 0 0 1-.88-.382l.43-3.438H1.5a.5.5 0 0 1-.384-.82l5-6a.5.5 0 0 1 .583-.14ZM2.567 6.5H6a.5.5 0 0 1 .496.562L6.208 9.37 9.432 5.5H6a.5.5 0 0 1-.496-.562l.288-2.308L2.568 6.5Z" clip-rule="evenodd"></path></svg>
      Label
    </span> -->
  </div>
  <div class="d-mb4"><strong>Kind</strong>: Count (effectively “quantifiable”)</div>
  <div class="d-fl-center d-mb16" style="justify-content: flex-start; gap: 8px">
    <span class="d-badge d-badge--count">1</span>
    <span class="d-badge d-badge--count">3</span>
    <span class="d-badge d-badge--count">86</span>
    <span class="d-badge d-badge--count">99+</span>
  </div>
  <div class="d-mb4"><strong>Types</strong> (style variants)</div>
  <div class="d-fl-center d-mb8" style="justify-content: flex-start; gap: 8px">
    <div class="d-badge">Default</div>
    <div class="d-badge d-badge--info">Info</div>
    <div class="d-badge d-badge--success">Success</div>
    <div class="d-badge d-badge--warning">Warning</div>
    <div class="d-badge d-badge--critical">Critical</div>
    <div class="d-badge d-badge--feature">Feature</div>
  </div>
  <div class="d-fl-center d-mb8" style="justify-content: flex-start; gap: 8px">
    <div class="d-badge d-badge--count">9</div>
    <div class="d-badge d-badge--count d-badge--info">9</div>
    <div class="d-badge d-badge--count d-badge--success">9</div>
    <div class="d-badge d-badge--count d-badge--warning">9</div>
    <div class="d-badge d-badge--count d-badge--critical">9</div>
    <div class="d-badge d-badge--count d-badge--feature">9</div>
  </div>
  <div class="d-fl-center d-mb8" style="justify-content: flex-start; gap: 8px">
    <div class="d-badge d-badge--count">99+</div>
    <div class="d-badge d-badge--count d-badge--info">99+</div>
    <div class="d-badge d-badge--count d-badge--success">99+</div>
    <div class="d-badge d-badge--count d-badge--warning">99+</div>
    <div class="d-badge d-badge--count d-badge--critical">99+</div>
    <div class="d-badge d-badge--count d-badge--feature">99+</div>
  </div>
</div>

<code-well-header>
  <div>
    <span class="d-badge">Badge</span>
  </div>
</code-well-header>

<!-- <component-combinator component-name="DtBadge" /> -->

## Usage

<dialtone-usage>
<template #do>

- To flag and draw awareness to a specific element or feature of focus. For example, something is unique about that separates it from other like content.
- As a notification system with minimal footprint.
</template>
<template #dont>

- To indicate that interaction by the user is required.
</template>
</dialtone-usage>

### Best practices

- While the color variant used should not be the sole indicator of information, choose color patterns that users can quickly scan and identify its intention.
- Avoid long values, favoring a brief scannable word.

## Accessibility

- Since a Badge may often reflect a value within an implied label, ensure a label is announced. For example, via `aria-label` or `aria-labeledby`.

## Variants and examples

<code-well-header>
  <div>
    <span v-for="i in classes" class="d-badge d-mr8 d-mb8" :class="i.class">Badge</span>
  </div>
</code-well-header>

```html
<span class="d-badge">...</span>
<span class="d-badge">...</span>
<span class="d-badge d-badge--green-400">...</span>
<span class="d-badge d-badge--orange-400">...</span>
<span class="d-badge d-badge--magenta-100">...</span>
<span class="d-badge d-badge--magenta-300">...</span>
<span class="d-badge d-badge--magenta-400">...</span>
<span class="d-badge d-badge--magenta-500">...</span>
<span class="d-badge d-badge--purple-100">...</span>
<span class="d-badge d-badge--purple-300">...</span>
<span class="d-badge d-badge--purple-400">...</span>
<span class="d-badge d-badge--purple-500">...</span>
<span class="d-badge d-badge--red-300">...</span>
<span class="d-badge d-badge--white">...</span>
<span class="d-badge d-badge--gold-200">...</span>
```

## Classes

<component-class-table component-name="badge"></component-class-table>

<script setup>
  import { classes } from '@data/badge.json';
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
