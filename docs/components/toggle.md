---
title: Toggle
desc: A toggle (or "switch") is a button control element that allows the user to make a binary (on/off) selection.
storybook_url: https://vue.dialpad.design/?path=/story/components-toggle--default
---

## Classes
<component-class-table component-name="toggle" />

## Examples
### Base Styles
<code-well-header>
  <fieldset class="d-stack8">
    <div class="d-toggle-group d-d-flex d-ai-center">
      <toggle label="Unchecked Toggle"/>
    </div>
    <div class="d-toggle-group d-d-flex d-ai-center">
      <toggle label="Unchecked Disabled" disabled/>
    </div>
    <div class="d-toggle-group d-d-flex d-ai-center">
      <toggle label="Checked Disabled" checked disabled/>
    </div>
    <div class="d-toggle-group d-d-flex d-ai-center">
      <toggle label="Checked Toggle" checked/>
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
        <toggle label="Acorn Test" />
      </div>
      <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
        <toggle label="California Zoo" />
      </div>
      <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
        <toggle label="Montana Centre" />
      </div>
      <div class="row d-d-flex d-ai-center d-jc-space-between d-mb6">
        <toggle label="Wilson Centre" />
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

## Accessibility
The best accessibility is semantic HTML. Most screen readers understand how to parse buttons if they’re correctly formatted. When it comes to toggles, there are a few things to keep in mind:
 
- All toggle buttons should have an `id` attribute.
- Associate toggle labels with their buttons using the `for` attribute. This correlates with the toggle's `id`.
- If you have a group of related toggles, use a `fieldset` to group them and a `legend` to title the group. For further information, please visit Gov.UK’s article, <a class="d-link" href="https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements/">Using the fieldset and legend elements</a>.

<script setup>
  import Toggle from '@components/Toggle.vue';
</script>
