---
title: Badge
desc: A badge is a compact UI element that provides brief, descriptive information about an element. It is terse, ideally one word.
storybook_url: https://vue.dialpad.design/?path=/story/components-badge--default
---
## Classes
<component-class-table component-name="badge"></component-class-table>

## Examples

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
<span class="d-badge d-badge--pink-300">...</span>
<span class="d-badge d-badge--pink-500">...</span>
<span class="d-badge d-badge--pink-600">...</span>
<span class="d-badge d-badge--pink-700">...</span>
<span class="d-badge d-badge--purple-100">...</span>
<span class="d-badge d-badge--purple-300">...</span>
<span class="d-badge d-badge--purple-500">...</span>
<span class="d-badge d-badge--purple-700">...</span>
<span class="d-badge d-badge--red-500">...</span>
<span class="d-badge d-badge--white">...</span>
<span class="d-badge d-badge--yellow-300">...</span>
```

<script setup>
    import { classes } from '@data/badge.json';
</script>
