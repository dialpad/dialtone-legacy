---
title: Badge
desc: A badge is a compact UI element providing brief, descriptive information about an element and its surrounding context. It is terse, ideally one word.
storybook_url: https://vue.dialpad.design/?path=/story/components-badge--default
---
<code-well-header>
  <div>
    <span class="d-badge d-mr8 d-mb8 d-badge--black-700">Badge</span>
  </div>
</code-well-header>

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

## Variants and Examples

<code-well-header>
  <div>
    <span v-for="i in classes" class="d-badge d-mr8 d-mb8" :class="i.class">Badge</span>
  </div>
</code-well-header>

```html
<span class="d-badge">...</span>
<span class="d-badge d-badge--black-700">...</span>
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
