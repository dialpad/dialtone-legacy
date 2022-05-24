---
title: Badge
desc: A badge is a compact UI element that provides brief, descriptive information about an element. It is terse, ideally one word.
storybook_url: https://vue.dialpad.design/?path=/story/components-badge--default
---
<code-well-header>
  <div>
    <span class="d-badge d-mr8 d-mb8 d-badge--black-700">Badge</span>
  </div>
</code-well-header>

## Usage
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Morbi massa ante, tempus vitae lacus id, luctus tristique lorem.
Mauris feugiat massa ex, id aliquet mi tempor non. Curabitur non tristique lectus.
Fusce ut nisl non diam dignissim viverra.
In posuere dui arcu, sed eleifend massa faucibus sed.
Phasellus quis leo vitae erat pellentesque venenatis id vitae lectus.
Suspendisse convallis, metus a congue tincidunt, velit sem tincidunt dui, eget auctor ipsum ipsum in ex.
Nullam lobortis, mauris vel vestibulum rutrum, lorem elit vehicula est, nec viverra ante erat nec dolor.
Proin at placerat tortor.
Nam ullamcorper metus et eros porta, at lacinia leo scelerisque. Curabitur finibus sollicitudin odio tempor finibus.
Donec lobortis metus vitae mollis gravida.

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

## Classes
<component-class-table component-name="badge"></component-class-table>

<script setup>
    import { classes } from '@data/badge.json';
</script>

