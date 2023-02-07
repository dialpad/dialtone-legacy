---
title: Presence
desc: A visual control element indicating the current status of a user.
status: new
thumb: true
storybook: https://vue.dialpad.design/?path=/docs/components-presence--default
figma_url: https://www.figma.com/file/2adf7JhZOncRyjYiy2joil/DT-Core%3A-Components-7?node-id=9628%3A59018&viewport=-1353%2C1919%2C1.91&t=xHutRjwo1o5zMTgT-11
---
<code-well-header>
  <example-presence presence="active"/>
</code-well-header>

## Variants and examples

### Active

<code-well-header>
  <example-presence presence="active"/>
</code-well-header>

```html
<div class="d-presence">
  <div class="d-presence__inner d-presence__inner--active"></div>
</div>
```

### Busy

<code-well-header>
  <example-presence presence="busy"/>
</code-well-header>

```html
<div class="d-presence">
  <div class="d-presence__inner d-presence__inner--busy"></div>
</div>
```

### Away

<code-well-header>
  <example-presence presence="away"/>
</code-well-header>

```html
<div class="d-presence">
  <div class="d-presence__inner d-presence__inner--away"></div>
</div>
```

### Offline

<code-well-header>
  <example-presence presence="offline"/>
</code-well-header>

```html
<div class="d-presence">
  <div class="d-presence__inner d-presence__inner--offline"></div>
</div>
```

## Classes

<component-class-table component-name="presence" />

## Accessibility

You may wish to announce any live changes to this component via the screen reader since this is only a visual indicator.

<script setup>
  import ExamplePresence from '@exampleComponents/ExamplePresence.vue';
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
