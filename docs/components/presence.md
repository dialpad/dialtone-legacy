---
title: Presence
desc: A visual control element indicating the current status of a user
---
<code-well-header>
  <div class="d-d-flex d-ai-center">
    <example-presence presence="active"/>
  </div>
</code-well-header>

## Usage

The Presence component renders a circle indicating the current status of a user.

<dialtone-usage>
<template #do>

- When its action has an instantaneous effect.
</template>
<template #dont>

- When its action does not have an immediate effect on the application.
- Selecting between 2 options. Instead, utilize a [Checkbox](checkbox.md).
- As an alternative to a [Checkbox](checkbox.md) or [Radio](radio.md) within a Form.
</template>
</dialtone-usage>

### Best practices

- A Presence component should be used as a way to show the current status of a user.
- A `presence` prop can be used to determine the status of the user, with the following valid statuses: `away`, `busy`, `active`, `offline`

## Variants and examples

### Base Styles

<code-well-header>
  <fieldset class="d-stack8">
    <div class="d-d-flex d-ai-center">
      <example-presence presence="active"/>
    </div>
    <div class="d-toggle-group d-d-flex d-ai-center">
      <example-presence presence="busy"/>
    </div>
    <div class="d-toggle-group d-d-flex d-ai-center">
      <example-presence presence="away"/>
    </div>
    <div class="d-toggle-group d-d-flex d-ai-center">
      <example-presence presence="active"/>
    </div>
  </fieldset>
</code-well-header>

```html
<fieldset class="d-stack8">
  <div class="d-d-flex d-ai-center">
    <example-presence presence="active"/>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <example-presence presence="busy"/>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <example-presence presence="away"/>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <example-presence presence="active"/>
  </div>
</fieldset>
```

## Classes

<component-class-table component-name="presence" />

## Accessibility

The best accessibility is semantic HTML. Most screen readers understand how to parse buttons if they’re correctly formatted.

<script setup>
  import ExamplePresence from '@exampleComponents/ExamplePresence.vue';
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
