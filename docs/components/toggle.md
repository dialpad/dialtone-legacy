---
title: Toggle
desc: A toggle (or "switch") is a button control element that allows the user to make a binary (on/off) selection.
storybook_url: https://vue.dialpad.design/?path=/story/components-toggle--default
---
<code-well-header>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <example-toggle label="Toggle"/>
  </div>
</code-well-header>

## Usage
The Toggle component acts as a way to allow the User to switch between two mutually exclusive options. While it technically mirrors a [Checkbox](/components/checkbox/) state, its affect on the system is instantaneous.

<div class="xl:d-fd-column xl:d-flow0 xl:d-stack32 d-fl-col2 d-flow32 d-mt32 d-mb32">
  <div class="d-d-block d-px16 d-py24 d-bgc-green-100 d-bar4">
    <h3 class="d-mb16">
      <span class="d-fc-green-600 d-ps-relative d-t6">
        <icon-checkmark />
      </span>
      <span class="d-fw-bold d-fc-green-600">Use for</span>
    </h3>
    <ul class="d-fs14">
      <li>When its action has an instantaneous affect.</li>
    </ul>
  </div>
  <div class="d-d-block d-px16 d-py24 d-bgc-red-100 d-bar4">
    <h3 class="d-mb16">
      <span class="d-fc-red-600 d-ps-relative d-t6">
        <icon-close />
      </span>
      <span class="d-fw-bold d-fc-red-600">Don't use for</span>
    </h3>
    <ul class="d-fs14">
      <li>When its action does not have an immediate affect on the application.</li>
      <li>Selecting between 2 options. Instead utilize a <a href="/components/checkbox/" class="d-link">Checkbox</a>.</li>
      <li>As an alternative to a <a href="/components/checkbox/" class="d-link">Checkbox</a> or <a href="/components/radio/" class="d-link">Radio</a> within a Form.      </li>
    </ul>
  </div>
</div>

### Best practices
- A Toggle component should be used as a control within an application and provide a way to toggle between two states like a household light switch.
- The Indeterminate states is only available prior to a user’s interaction with it, and cannot be manually set to Indeterminate.

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
    <div class="d-toggle-copy d-mr6">
      <label class="d-toggle-label" for="Dialtone-Toggle1">Unchecked Toggle</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle1" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy d-mr6">
      <label class="d-toggle-label" for="Dialtone-Toggle2">Checked Toggle</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle d-toggle--checked" type="button" role="switch" id="Dialtone-Toggle2" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy d-mr6">
      <label class="d-toggle-label" for="Dialtone-Toggle3">Unchecked Disabled</label>
    </div>
    <div class="d-toggle-button">
      <button class="d-toggle" type="button" role="switch" disabled id="Dialtone-Toggle3" >
        <span class="d-toggle__inner" />
      </button>
    </div>
  </div>
  <div class="d-toggle-group d-d-flex d-ai-center">
    <div class="d-toggle-copy d-mr6">
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
    <legend class="d-label d-fs20">DND Settings</legend>
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
  <legend class="d-label d-fs20">DND Settings</legend>
  <div class="d-toggle-wrapper d-d-flex d-fd-column">
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb12">
      <h3>Status</h3>
      <h3 class="d-mr4">DND</h3>
    </div>
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
      <div class="d-toggle-copy d-mr6">
        <label class="d-toggle-label" for="Dialtone-Toggle5">Acorn Tech</label>
      </div>
      <div class="d-toggle-button">
        <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle5" >
          <span class="d-toggle__inner" />
        </button>
      </div>
    </div>
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
      <div class="d-toggle-copy d-mr6">
        <label class="d-toggle-label" for="Dialtone-Toggle5">California Zoo</label>
      </div>
      <div class="d-toggle-button">
        <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle5" >
          <span class="d-toggle__inner" />
        </button>
      </div>
    </div>
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
      <div class="d-toggle-copy d-mr6">
        <label class="d-toggle-label" for="Dialtone-Toggle5">Montana Centre</label>
      </div>
      <div class="d-toggle-button">
        <button class="d-toggle" type="button" role="switch" id="Dialtone-Toggle5" >
          <span class="d-toggle__inner" />
        </button>
      </div>
    </div>
    <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
      <div class="d-toggle-copy d-mr6">
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
- If you have a group of related toggles, use a `fieldset` to group them and a `legend` to title the group. For further information, please visit Gov.UK’s article, <a class="d-link" href="https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements/">Using the fieldset and legend elements</a>.

<script setup>
  import ExampleToggle from '@exampleComponents/ExampleToggle.vue';
</script>
