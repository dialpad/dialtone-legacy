---
title: Presence
desc: A visual control element indicating the current status of a user
---
<code-well-header>
  <example-presence presence="active"/>
</code-well-header>

## Usage

### Best practices

- Presence should be used to visually indicate the current status of a user.
- The following set of CSS classes can be set to set their status:
  - `d-presence__inner--active`
  - `d-presence__inner--busy`
  - `d-presence__inner--away`
  - `d-presence__inner--offline`

## Variants and examples

### Active

<code-well-header>
  <example-presence presence="active"/>
</code-well-header>

```html
<div class="d-presence">
  <div
    class="d-presence__inner d-presence__inner--active"
  />
</div>
```

### Busy

<code-well-header>
  <example-presence presence="busy"/>
</code-well-header>

```html
<div class="d-presence">
  <div class="d-presence__inner d-presence__inner--busy" />
</div>
```

### Away

<code-well-header>
  <example-presence presence="away"/>
</code-well-header>

```html
<div class="d-presence">
  <div class="d-presence__inner d-presence__inner--away" />
</div>
```

### Offline

<code-well-header>
  <example-presence presence="offline"/>
</code-well-header>

```html
<div class="d-presence">
  <div class="d-presence__inner d-presence__inner--offline" />
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