---
title: Checkbox group
desc: Checkbox groups are convenient components for a grouping of related Checkboxes.
status: ready
thumb: true
storybook_url: https://vue.dialpad.design/?path=/story/components-checkbox-group--default
---

<code-well-header>
  <dt-checkbox-group
    name="fruits-checkbox-group"
    legend="Fruits"
    :selectedValues="[]"
  >
    <dt-checkbox value="apple"><span>Apple</span></dt-checkbox>
    <dt-checkbox value="banana"><span>Banana</span></dt-checkbox>
    <dt-checkbox value="other"><span>Other</span></dt-checkbox>
  </dt-checkbox-group>
</code-well-header>

```html
<dt-checkbox-group
  name="fruits-checkbox-group"
  legend="Fruits"
  :selectedValues="[]"
>
  <dt-checkbox value="apple"><span>Apple</span></dt-checkbox>
  <dt-checkbox value="banana"><span>Banana</span></dt-checkbox>
  <dt-checkbox value="other"><span>Other</span></dt-checkbox>
</dt-checkbox-group>
```

## Variants

### Default

<code-well-header>
  <dt-checkbox-group
    name="fruits-checkbox-group"
    legend="Fruits"
    :selectedValues="[]"
  >
    <dt-checkbox value="apple"><span>Apple</span></dt-checkbox>
    <dt-checkbox value="banana"><span>Banana</span></dt-checkbox>
    <dt-checkbox value="other"><span>Other</span></dt-checkbox>
  </dt-checkbox-group>
</code-well-header>

```html
<dt-checkbox-group
  name="fruits-checkbox-group"
  legend="Fruits"
  :selectedValues="[]"
>
  <dt-checkbox value="apple"><span>Apple</span></dt-checkbox>
  <dt-checkbox value="banana"><span>Banana</span></dt-checkbox>
  <dt-checkbox value="other"><span>Other</span></dt-checkbox>
</dt-checkbox-group>
```

### With validation states

<code-well-header>
  <div class="d-stack16">
    <div>
      <dt-checkbox-group
        name="checkbox-group-with-success-message"
        legend="Fruits"
        :messages='[{"message":"Success validation message","type":"success"}]'
      >
        <dt-checkbox value="apple"><span>Apple</span></dt-checkbox>
        <dt-checkbox value="banana"><span>Banana</span></dt-checkbox>
        <dt-checkbox value="other"><span>Other</span></dt-checkbox>
      </dt-checkbox-group>
    </div>
    <div>
      <dt-checkbox-group
        name="checkbox-group-with-warning-message"
        legend="Fruits"
        :messages='[{"message":"Warning validation message","type":"warning"}]'
      >
        <dt-checkbox value="apple"><span>Apple</span></dt-checkbox>
        <dt-checkbox value="banana"><span>Banana</span></dt-checkbox>
        <dt-checkbox value="other"><span>Other</span></dt-checkbox>
      </dt-checkbox-group>
    </div>
    <div>
      <dt-checkbox-group
      name="checkbox-group-with-error-message"
      legend="Fruits"
      :messages='[{"message":"Error validation message","type":"error"}]'
      >
        <dt-checkbox value="apple"><span>Apple</span></dt-checkbox>
        <dt-checkbox value="banana"><span>Banana</span></dt-checkbox>
        <dt-checkbox value="other"><span>Other</span></dt-checkbox>
      </dt-checkbox-group>
    </div>
  </div>
</code-well-header>

## Vue API

<component-vue-table component-name="checkboxgroup" />
