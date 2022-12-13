---
title: Link
desc: A link is a navigational element that can be found on its own, within other text, or directly following content.
status: ready
thumb: true
storybook_url: https://vue.dialpad.design/?path=/story/components-link--default
figma_url: https://www.figma.com/file/2adf7JhZOncRyjYiy2joil/DT-Core%3A-Components-7?node-id=8919%3A21226&viewport=-746%2C-197%2C1.41&t=xHutRjwo1o5zMTgT-11
---
<code-well-header>
  <a href="#" class="d-link">Base link</a>
</code-well-header>

<!-- <component-combinator component-name="DtLink" /> -->

## Usage

`button` and link (`<a>`) HTML elements each describe a specific intent. Understanding the distinction is important: if it goes somewhere, use a Link. If an action occurs, use a [Button](button.md).

<dialtone-usage>
<template #do>

- Navigating between destinations.
</template>
<template #dont>

- Actions, instead use a [Button](button.md).
</template>
</dialtone-usage>

### Best practices

- Use useful, actionable, and descriptive text clearly conveying the hyperlink’s destination. For example, a generic label like "click here" doesn’t convey its target content.
- Too many links can be overwhelming. Be selective about the number of links in a context.
- Clearly identify links that target an external source.

## Accessibility

- Allow keyboard navigation. Users must be able to navigate between links, i.e. keypress of tab, and activate it by pressing ‘Enter’.
- Users must be able to identify links without relying on color alone.
- Users must be able to activate hover and focus states with both a mouse and a keyboard.

## Variants and examples

<code-well-header>
  <a href="#" class="d-link">Base link</a>
  <a href="#" class="d-link d-link--danger">Danger link</a>
  <a href="#" class="d-link d-link--muted">Muted link</a>
  <a href="#" class="d-link d-link--success">Success link</a>
  <a href="#" class="d-link d-link--warning">Warning link</a>
</code-well-header>

```html
<a href="#" class="d-link">...</a>
<a href="#" class="d-link d-link--danger">...</a>
<a href="#" class="d-link d-link--muted">...</a>
<a href="#" class="d-link d-link--success">...</a>
<a href="#" class="d-link d-link--warning">...</a>
```

<code-well-header bgclass="d-bgc-black-800">
  <a href="#" class="d-link d-link--inverted">Inverted base link</a>
</code-well-header>

```html
<a href="#" class="d-link d-link--inverted">...</a>
```

## Classes

<component-class-table component-name="link"></component-class-table>

<script setup>
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
