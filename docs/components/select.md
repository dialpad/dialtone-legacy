---
title: Select Menu
desc: A select menu is an input control that allows users to choose one option from a list.
storybook_url: https://vue.dialpad.design/?path=/story/components-select-menu--default
---
<code-well-header>
  <div class="d-w100p">
    <div class="d-label">
      <label for="Dialtone--SelectExample1">Label</label>
    </div>
    <div class="d-select">
      <select class="d-select__input" id="Dialtone--SelectExample1">
        <option value="" selected>Please select one</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  </div>
</code-well-header>

<component-combinator component-name="DtSelectMenu" />

## Usage

<div class="dialtone-usage">
  <div class="dialtone-usage__item dialtone-usage__item--do">
    <h3 class="dialtone-usage__hd dialtone-usage__hd--do"><icon-checkmark /> Use for</h3>
    <div class="dialtone-usage__bd">
<Markdown>
- Use sparingly — only when a user needs to choose from about seven to 15 possible options and you have limited space to display the options.
</Markdown>
    </div>
  </div>
  <div class="dialtone-usage__item dialtone-usage__item--dont">
    <h3 class="dialtone-usage__hd dialtone-usage__hd--dont"><icon-close /> Don't use for</h3>
    <div class="dialtone-usage__bd">
<Markdown>
- For site navigation.
- If the list of options is very short. Use [Radio](/components/radio/) instead.
- If the list of options is very long. Let users type the same information into an [Input](/components/input/) that suggests possible options instead (aka Combobox).
- Avoid using the `multiple` attribute. Users often don’t understand how to select multiple items from the select element (e.g. by holding down a modifier key).
- For selecting an action that takes immediate effect. A `select` is for selecting a choice that is only confirmed by a separate submit action (much like a [Checkbox](/components/checkbox/)). For immediate actions consider the [Dropdown](https://vue.dialpad.design/?path=/story/components-dropdown--default) component.
</Markdown>
    </div>
  </div>
</div>

### Best practices

- Selects should be considered the “UI of last resort,” as users often find them confusing and difficult to use. Consider testing thoroughly with members of your target audience.
- Avoid making options in one dropdown menu change based on the input to another. Users often don’t understand how selecting an item in one impacts another.
- When most users will (or should) pick a particular option, make it the default selection.
- Avoid auto-submission. Be wary of UI implications of automatically submitting upon selection or applying its value. Users may often change their choices multiple times, particularly if interacting with a form solely with keyboard. Auto-submission is also less accessible. For auto-submission consider the <a href="https://vue.dialpad.design/?path=/story/components-dropdown--default">Dropdown</a> component.

## Variants and Examples

### Base Styles

A select is normally paired with a label, but there are times when it can be used without a label. Don't rely on the placeholder text as a label.

<code-well-header>
  <div class="d-stack24 d-w100p">
    <div>
      <div class="d-label">
        <label for="Dialtone--SelectExample1">Label</label>
      </div>
      <div class="d-select">
        <select class="d-select__input" id="Dialtone--SelectExample1">
          <option value="" selected>Please select one</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
    <div>
      <div class="d-label">
        <label for="Dialtone--SelectExample2">Label</label>
      </div>
      <div class="d-select d-select--disabled">
        <select class="d-select__input" id="Dialtone--SelectExample2" disabled>
          <option value="" selected>Please select one</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  </div>
</code-well-header>

```html
<div>
  <div class="d-label">
    <label for="Dialtone--SelectExample1">...</label>
  </div>
  <div class="d-select">
    <select class="d-select__input" id="Dialtone--SelectExample1">
      <option value="" selected>...</option>
      <option value="...">...</option>
      <option value="...">...</option>
      <option value="...">...</option>
    </select>
  </div>
</div>
<div>
  <div class="d-label">
    <label for="Dialtone--SelectExample2">...</label>
  </div>
  <div class="d-select d-select--disabled">
    <select class="d-select__input" id="Dialtone--SelectExample2" disabled>
      <option value="" selected>...</option>
      <option value="...">...</option>
      <option value="...">...</option>
      <option value="...">...</option>
    </select>
  </div>
</div>
```

### With Description Text

<code-well-header>
  <div class="d-w100p">
    <div class="d-label">
      <label for="Dialtone--SelectExample3">Label</label>
    </div>
    <div class="d-description">
        <span>Optional description text</span>
    </div>
    <div class="d-select">
      <select class="d-select__input" id="Dialtone--SelectExample3">
        <option value="" selected>Please select one</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  </div>
</code-well-header>

```html
<div class="d-label">...</div>
<div class="d-description">...</div>
<div class="d-select">
  <select class="d-select__input" id="Dialtone--SelectExample3">...</select>
</div>
```

### With Validation States

Provides feedback to the user based on their interaction, or lack thereof, with a select.

<code-well-header>
  <div class="d-stack24 d-w100p">
    <div>
      <div class="d-label">
        <label for="Dialtone--SelectExample4">Label</label>
      </div>
      <div class="d-select">
        <select class="d-select__input d-select__input--error" id="Dialtone--SelectExample4">
          <option value="" selected>Please select one</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div class="d-validation-message d-validation-message--error">
        <span>Error validation message</span>
      </div>
    </div>
    <div>
      <div class="d-label">
        <label for="Dialtone--SelectExample5">Label</label>
      </div>
      <div class="d-select">
        <select class="d-select__input d-select__input--success" id="Dialtone--SelectExample5">
          <option value="" selected>Please select one</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div class="d-validation-message d-validation-message--success">
        <span>Success validation message</span>
      </div>
    </div>
    <div>
      <div class="d-label">
        <label for="Dialtone--SelectExample6">Label</label>
      </div>
      <div class="d-select">
        <select class="d-select__input d-select__input--warning" id="Dialtone--SelectExample6">
          <option value="" selected>Please select one</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <div class="d-validation-message d-validation-message--warning">
        <span>Warning validation message</span>
      </div>
    </div>
  </div>
</code-well-header>

```html
<div>
  <div class="d-label">...</div>
  <div class="d-select">
    <select class="d-select__input d-select__input--error">...</select>
  </div>
  <div class="d-validation-message d-validation-message--error">...</div>
</div>
<div>
  <div class="d-label">...</div>
  <div class="d-select">
    <select class="d-select__input d-select__input--success">...</select>
  </div>
  <div class="d-validation-message d-validation-message--success">...</div>
</div>
<div>
  <div class="d-label">...</div>
  <div class="d-select">
    <select class="d-select__input d-select__input--warning">...</select>
  </div>
  <div class="d-validation-message d-validation-message--warning">...</div>
</div>
```

### Sizes

We offer different sizes for instances in which the interface requires a smaller or larger select. In general, though, use the base (medium) size select as much as possible, especially in forms.

<code-well-header>
  <div class="d-stack24 d-w100p">
    <div>
      <div class="d-label d-label--xs">
        <label for="Dialtone--SelectExample7">Label</label>
      </div>
      <div class="d-select d-select--xs">
        <select class="d-select__input" id="Dialtone--SelectExample7">
          <option value="" selected>Please select one</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
    <div>
      <div class="d-label d-label--sm">
        <label for="Dialtone--SelectExample8">Label</label>
      </div>
      <div class="d-select d-select--sm">
        <select class="d-select__input" id="Dialtone--SelectExample8">
          <option value="" selected>Please select one</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
    <div>
      <div class="d-label">
        <label for="Dialtone--SelectExample9">Label</label>
      </div>
      <div class="d-select">
        <select class="d-select__input" id="Dialtone--SelectExample9">
          <option value="" selected>Please select one</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
    <div>
      <div class="d-label d-label--lg">
        <label for="Dialtone--SelectExample10">Label</label>
      </div>
      <div class="d-select d-select--lg">
        <select class="d-select__input" id="Dialtone--SelectExample10">
          <option value="" selected>Please select one</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
    <div>
      <div class="d-label d-label--xl">
        <label for="Dialtone--SelectExample11">Label</label>
      </div>
      <div class="d-select d-select--xl">
        <select class="d-select__input" id="Dialtone--SelectExample11">
          <option value="" selected>Please select one</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  </div>
</code-well-header>

```html
<div>
  <div class="d-label d-label--xs">...</div>
  <div class="d-select d-select--xs">
    <select class="d-select__input">...</select>
  </div>
</div>
<div>
  <div class="d-label d-label--sm">...</div>
  <div class="d-select d-select--sm">
    <select class="d-select__input">...</select>
  </div>
</div>
<div>
  <div class="d-label">...</div>
  <div class="d-select">
    <select class="d-select__input">...</select>
  </div>
</div>
<div>
  <div class="d-label d-label--lg">...</div>
  <div class="d-select d-select--lg">
    <select class="d-select__input">...</select>
  </div>
</div>
<div>
  <div class="d-label d-label--xl">...</div>
  <div class="d-select d-select--xl">
    <select class="d-select__input">...</select>
  </div>
</div>
```

## Classes

<component-class-table component-name="select" />

## Accessibility

- Make sure the `label` `for` attribute match the select `id`.
- Avoiding removing `labels`. Labelled selects are user-friendly.
- Avoid relying on placeholder text as a substitute for a label.
- Avoid customizing the placeholder text.
- If the select is a required field, use the `aria-required` property and use the validation message for input errors.
- Select with validation errors should have `aria-describedby` with the `id` of the validation message.

<script setup>
  import Markdown from "@baseComponents/Markdown.vue";
</script>
