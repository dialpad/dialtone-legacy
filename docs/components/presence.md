---
title: Presence
desc: A visual control element indicating the current status of a user
---
<code-well-header bgclass='d-bgc-white'>
  <div class="d-d-flex d-ai-center">
    <example-presence presence="active"/>
  </div>
</code-well-header>

### Best practices

- A Presence component should be used as a way to show the current status of a user.
- A `presence` prop can be used to determine the status of the user, with the following valid statuses: `away`, `busy`, `active`, `offline`

## Variants and examples

### Active

<code-well-header bgclass='d-bgc-white'>
  <div class="d-d-flex d-ai-center">
    <example-presence presence="active"/>
  </div>
</code-well-header>

```html
<div class="d-presence">
  <div
    class="d-presence__inner d-presence__inner--active"
  />
</div>
```

### Busy

<code-well-header bgclass='d-bgc-white'>
  <div class="d-d-flex d-ai-center">
    <example-presence presence="busy"/>
  </div>
</code-well-header>

```html
<div class="d-presence">
  <div
    class="d-presence__inner d-presence__inner--busy"
  />
</div>
```

### Away

<code-well-header bgclass='d-bgc-white'>
  <div class="d-d-flex d-ai-center">
    <example-presence presence="away"/>
  </div>
</code-well-header>

```html
<div class="d-presence">
  <div
    class="d-presence__inner d-presence__inner--away"
  />
</div>
```

### Offline

<code-well-header bgclass='d-bgc-white'>
  <div class="d-d-flex d-ai-center">
    <example-presence presence="offline"/>
  </div>
</code-well-header>

```html
<div class="d-presence">
  <div
    class="d-presence__inner d-presence__inner--offline"
  />
</div>
```

## Classes

<component-class-table component-name="presence" />

## Accessibility

The best accessibility is semantic HTML. Most screen readers understand how to parse buttons if they’re correctly formatted.

<script setup>
  import ExamplePresence from '@exampleComponents/ExamplePresence.vue';
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
