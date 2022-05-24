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
