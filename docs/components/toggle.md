---
title: Toggle
desc: A toggle (or "switch") is a button control element that allows the user to make a binary (on/off) selection.
storybook_url: https://vue.dialpad.design/?path=/story/components-toggle--default
---
<code-well-header>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <example-toggle label="Label"/>
  </div>
</code-well-header>

<div class="d-fl-center d-mt12 d-mb12 d-bgc-black-100 d-p32">
  <button id="Dialtone-Preview-Toggle1" class="d-toggle d-mr8" aria-checked="false" type="button" role="switch">
    <span class="d-toggle__inner"></span>
  </button>
  <button id="Dialtone-Preview-Toggle2" class="d-toggle d-toggle--checked d-mr8" aria-checked="true" type="button" role="switch">
    <span class="d-toggle__inner"></span>
  </button>
  <button id="Dialtone-Preview-Toggle3" class="d-toggle d-toggle--indeterminate d-mr8" aria-checked="false" type="button" role="switch">
    <span class="d-toggle__inner"></span>
  </button>
  <button id="Dialtone-Preview-Toggle4" class="d-toggle d-toggle--small d-mr8" aria-checked="false" type="button" role="switch">
    <span class="d-toggle__inner"></span>
  </button>
  <button id="Dialtone-Preview-Toggle5" class="d-toggle d-toggle--checked d-toggle--small d-mr8" aria-checked="true" type="button" role="switch">
    <span class="d-toggle__inner"></span>
  </button>
  <button id="Dialtone-Preview-Toggle6" class="d-toggle d-toggle--small d-toggle--indeterminate" aria-checked="false" type="button" role="switch">
    <span class="d-toggle__inner"></span>
  </button>
</div>

## Usage

The Toggle component acts as a way to allow the User to switch between two mutually exclusive options. While it technically mirrors a [Checkbox](checkbox.md) state, its effect on the system is immediate&mdash;much like a light switch immediately turns on or off the lights. In contrast, the checked state of a [Checkbox](checkbox.md) won't be applied until a separate action to confirm the selection is taken.

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

- A Toggle component should be used as a control within an application and provide a way to toggle between two states like a household light switch.
- An `indeterminate` Toggle convey a "mixed" state that neither qualifies as toggled or not toggled. An example use case is when a Toggle acts as a "parent" of a collection of child Toggle components:
  - Toggled: all children are toggled.
  - Not toggled: all children are not toggled.
  - `indeterminate`: children are a mix of toggled and not toggled.

## Variants and Examples

### Base Styles

<code-well-header>
  <fieldset class="d-stack8">
    <div class="d-toggle-group d-d-flex d-ai-center">
      <example-toggle label="Unchecked Toggle"/>
    </div>
    <div class="d-toggle-group d-d-flex d-ai-center">
      <example-toggle label="Checked Toggle" checked/>
    </div>
    <div class="d-toggle-group d-d-flex d-ai-center">
      <example-toggle label="Unchecked Disabled" disabled/>
    </div>
    <div class="d-toggle-group d-d-flex d-ai-center">
      <example-toggle label="Checked Disabled" checked disabled/>
    </div>
  </fieldset>
</code-well-header>

```html
<fieldset class="d-stack8">
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy">
      <label class="d-toggle-label" for="Dialtone-Toggle1">Unchecked Toggle</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle1" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy">
      <label class="d-toggle-label" for="Dialtone-Toggle2">Checked Toggle</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle d-toggle--checked" type="button" role="switch" id="Dialtone-Toggle2" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy">
      <label class="d-toggle-label" for="Dialtone-Toggle3">Unchecked Disabled</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle" type="button" role="switch" disabled id="Dialtone-Toggle3" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy">
      <label class="d-toggle-label" for="Dialtone-Toggle4">Checked Disabled</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle d-toggle--checked" type="button" role="switch" disabled id="Dialtone-Toggle4" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
</fieldset>
```

### Stacked Group

<code-well-header>
  <fieldset class="d-stack8 d-w50p">
    <legend class="d-label d-fs-300">DND Settings</legend>
    <div class="d-toggle-wrapper d-d-flex d-fd-column">
      <div class="row d-d-flex d-ai-center d-jc-space-between d-mb12">
        <h3>Status</h3>
        <h3 class="d-mr4">DND</h3>
      </div>
      <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
        <example-toggle label="Acorn Test" />
      </div>
      <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
        <example-toggle label="California Zoo" />
      </div>
      <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
        <example-toggle label="Montana Centre" />
      </div>
      <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
        <example-toggle label="Wilson Centre" />
      </div>
    </div>
  </fieldset>
</code-well-header>

```html
<fieldset class="d-stack8 d-w50p">
  <legend class="d-label d-fs-300">DND Settings</legend>
  <div class="d-toggle-wrapper d-d-flex d-fd-column">
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb12">
      <h3>Status</h3>
      <h3 class="d-mr4">DND</h3>
    </div>
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
      <div class="d-toggle-copy">
        <label class="d-toggle-label" for="Dialtone-Toggle5">Acorn Tech</label>
      </div>
      <div class="d-toggle-button">
        <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle5" >
          <span class="d-toggle__inner" />
        </button>
      </div>
    </div>
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
      <div class="d-toggle-copy">
        <label class="d-toggle-label" for="Dialtone-Toggle5">California Zoo</label>
      </div>
      <div class="d-toggle-button">
        <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle5" >
          <span class="d-toggle__inner" />
        </button>
      </div>
    </div>
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
      <div class="d-toggle-copy">
        <label class="d-toggle-label" for="Dialtone-Toggle5">Montana Centre</label>
      </div>
      <div class="d-toggle-button">
        <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle5" >
          <span class="d-toggle__inner" />
        </button>
      </div>
    </div>
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
      <div class="d-toggle-copy">
        <label class="d-toggle-label" for="Dialtone-Toggle5">Wilson Centre</label>
      </div>
      <div class="d-toggle-button">
        <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle5" >
          <span class="d-toggle__inner" />
        </button>
      </div>
    </div>
  </div>
</fieldset>
```

## Classes

<component-class-table component-name="toggle" />

## Accessibility

The best accessibility is semantic HTML. Most screen readers understand how to parse buttons if they’re correctly formatted. When it comes to toggles, there are a few things to keep in mind:

- All toggle buttons should have an `id` attribute.
- Associate toggle labels with their buttons using the `for` attribute. This correlates with the toggle's `id`.
- If you have a group of related toggles, use a `fieldset` to group them and a `legend` to title the group. For further information, please visit Gov.UK’s article, ["Using the fieldset and legend elements"](https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements).

<script setup>
  import ExampleToggle from '@exampleComponents/ExampleToggle.vue';
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
