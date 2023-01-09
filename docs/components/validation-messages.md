---
title: Validation messages
status: ready
thumb: true
desc: Validation messages are used to convey information to the user about the current state of the input element. These messages can have an error, warning or success type.
storybook_url: https://vue.dialpad.design/?path=/story/components-validation-messages--default
next:
  text: Utilities - Background attachment
  link: /utilities/backgrounds/attachment.html
---

<code-well-header>
  <dt-validation-messages
    id="sample--01"
    :validationMessages='[{"message":"Positive validation message","type":"success"}]'
  />
</code-well-header>

## Variants

### Success / Positive

<code-well-header>
  <dt-validation-messages
    id="sample--02"
    :validationMessages='[{"message":"Positive validation message","type":"success"}]'
  />
</code-well-header>

```vue
<dt-validation-messages
  id="sample--02"
  :validationMessages='[{"message":"Positive validation message","type":"success"}]'
/>
```

### Critical / Error

<code-well-header>
  <dt-validation-messages
    id="sample--03"
    :validationMessages='[{"message":"Critical validation message","type":"error"}]'
  />
</code-well-header>

```vue
<dt-validation-messages
  id="sample--03"
  :validationMessages='[{"message":"Critical validation message","type":"error"}]'
/>
```

### Warning

<code-well-header>
  <dt-validation-messages
    id="sample--04"
    :validationMessages='[{"message":"Critical validation message","type":"warning"}]'
  />
</code-well-header>

```vue
<dt-validation-messages
  id="sample--04"
  :validationMessages='[{"message":"Critical validation message","type":"warning"}]'
/>
```
