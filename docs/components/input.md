---
title: Input
desc: An input field is an input control that allows users to enter alphanumeric information. It can have a range of options and supports single line and multi-line lengths, as well as varying formats, including numbers, masked passwords, etc.
status: ready
thumb: true
storybook_url: https://vue.dialpad.design/?path=/story/components-input--default
figma_url: https://www.figma.com/file/2adf7JhZOncRyjYiy2joil/DT-Core%3A-Components-7?node-id=8923%3A21866&viewport=-983%2C83%2C0.16&t=xHutRjwo1o5zMTgT-11
---

<code-well-header>
  <div class="d-w100p">
    <label class="d-label" for="Dialtone--InputExample1a">Label</label>
    <input class="d-input" id="Dialtone--InputExample1a" type="text" placeholder="Placeholder" />
  </div>
</code-well-header>

<!-- <component-combinator component-name="DtInput" /> -->

## Usage

This component combines both the `input` and `textarea` elements as options within a single component. Its default presentation includes a paired text `label`.

<dialtone-usage>
<template #do>

- If you can’t reasonably predict a user’s answer to a prompt and there might be wide variability in users’ answers.
- When using another type of input will make answering more difficult. For example, birthdays and other known dates are easier to type in than they are to select from a calendar picker.
- When users want to be able to paste in a response.
</template>
<template #dont>

- When users are choosing from a specific set of options. Consider [Select](select-menu.md), [Radio](radio.md), or [Checkbox](checkbox.md).
</template>
</dialtone-usage>

### Best practices

- The length of the text input provides a hint to users as to how much text to enter.
- Only show error validation messages or stylings after a user has interacted with a particular field.
- Do not use placeholder text (i.e. `placeholder` attribute) in place of an accessible `label`.
- Consider the type of content a user may enter to aid mobile device entry; mobile devices typically surface a keyboard UI attuned to the type. For example, type="tel" will surface a [phone keyboard](http://html5doctor.com/html5-forms-input-types/#input-tel).

## Variants and examples

### Base Styles

An input is normally paired with a label, but there are times when it can be used without a label.  Placeholder text should primarily be used as a content prompt and only provided when needed.

<code-well-header>
  <div class="d-stack24 d-w100p">
    <div>
      <label class="d-label" for="Dialtone--InputExample1a">Label</label>
      <input class="d-input" id="Dialtone--InputExample1a" type="text" placeholder="Placeholder" />
    </div>
    <div>
      <label class="d-label" for="Dialtone--InputExample1c">Label</label>
      <input class="d-input" id="Dialtone--InputExample1c" type="text" value="Value" />
    </div>
    <div>
      <label class="d-label" for="Dialtone--InputExample1b">Label</label>
      <input class="d-input" id="Dialtone--InputExample1b" type="text" placeholder="Placeholder" disabled />
    </div>
  </div>
</code-well-header>

```html
<div>
  <label class="d-label" for="Dialtone--InputExample1a">...</label>
  <input class="d-input" id="Dialtone--InputExample1a" type="text" placeholder="..." />
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample1c">Label</label>
  <input class="d-input" id="Dialtone--InputExample1c" type="text" value="Value" />
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample1b">...</label>
  <input class="d-input" id="Dialtone--InputExample1b" type="text" placeholder="..." disabled />
</div>
```

<code-well-header>
  <div class="d-stack24 d-w100p">
    <div>
      <label class="d-label" for="Dialtone--TextareaExample1a">Label</label>
      <textarea class="d-textarea" id="Dialtone--TextareaExample1a" type="text" placeholder="Placeholder"></textarea>
    </div>
    <div>
      <label class="d-label" for="Dialtone--TextareaExample1c">Label</label>
      <textarea class="d-textarea" id="Dialtone--TextareaExample1c" type="text">Value</textarea>
    </div>
    <div>
      <label class="d-label" for="Dialtone--TextareaExample1b">Label</label>
      <textarea class="d-textarea" id="Dialtone--TextareaExample1b" type="text" placeholder="Placeholder" disabled></textarea>
    </div>
  </div>
</code-well-header>

```html
<div>
  <label class="d-label" for="Dialtone--TextareaExample1a">...</label>
  <textarea class="d-textarea" id="Dialtone--TextareaExample1a" type="text" placeholder="..."></textarea>
</div>
<div>
  <label class="d-label" for="Dialtone--TextareaExample1c">Label</label>
  <textarea class="d-textarea" id="Dialtone--TextareaExample1c" type="text">Value</textarea>
</div>
<div>
  <label class="d-label" for="Dialtone--TextareaExample1b">...</label>
  <textarea class="d-textarea" id="Dialtone--TextareaExample1b" type="text" placeholder="..." disabled></textarea>
</div>
```

### With Description Text

<code-well-header>
  <div class="d-w100p">
    <div>
      <label class="d-label" for="Dialtone--InputExample2">Label</label>
      <span class="d-description">Helpful description text.</span>
    </div>
    <input class="d-input" id="Dialtone--InputExample2" type="text" placeholder="Placeholder" />
  </div>
</code-well-header>

```html
<label class="d-label" for="Dialtone--InputExample2">...</label>
<span class="d-description">...</span>
<input class="d-input" id="Dialtone--InputExample2" type="text" placeholder="..." />
```

<code-well-header>
  <div class="d-w100p">
    <div>
      <label class="d-label" for="Dialtone--TextareaExample2">Label</label>
      <span class="d-description">Helpful description text.</span>
    </div>
    <textarea class="d-textarea" id="Dialtone--TextareaExample2" type="text" placeholder="Placeholder"></textarea>
  </div>
</code-well-header>

```html
<label class="d-label" for="Dialtone--TextareaExample">...</label>
<span class="d-description">...</span>
<textarea class="d-textarea" id="Dialtone--TextareaExample" type="text" placeholder="..."></textarea>
```

### With Validation States

Provides feedback to the user based on their interaction, or lack thereof, with an input.

<code-well-header>
  <div class="d-stack24 d-w100p">
    <div>
      <label class="d-label" for="Dialtone--InputExample3">Label</label>
      <input class="d-input d-input--error" id="Dialtone--InputExample3" type="email" placeholder="" value="Value" />
      <span class="d-validation-message d-validation-message--error">Error validation message</span>
    </div>
    <div>
      <label class="d-label" for="Dialtone--InputExample4">Label</label>
      <input class="d-input d-input--success" id="Dialtone--InputExample4" type="email" placeholder="" value="Value" />
      <span class="d-validation-message d-validation-message--success">Success validation message</span>
    </div>
    <div>
      <label class="d-label" for="Dialtone--InputExample5">Label</label>
      <input class="d-input d-input--warning" id="Dialtone--InputExample5" type="email" placeholder="" value="Value" />
      <span class="d-validation-message d-validation-message--warning">Warning validation message</span>
    </div>
  </div>
</code-well-header>

```html
<div>
  <label class="d-label" for="Dialtone--InputExample3">...</label>
  <input class="d-input d-input--error" id="Dialtone--InputExample3" type="email" placeholder="..." value="..." />
  <span class="d-validation-message d-validation-message--error">...</span>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample4">...</label>
  <input class="d-input d-input--success" id="Dialtone--InputExample4" type="email" placeholder="..." value="..." />
  <span class="d-validation-message d-validation-message--success">...</span>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample5">...</label>
  <input class="d-input d-input--warning" id="Dialtone--InputExample5" type="email" placeholder="..." value="..." />
  <span class="d-validation-message d-validation-message--warning">...</span>
</div>
```

<code-well-header>
  <div class="d-stack24 d-w100p">
    <div>
      <label class="d-label" for="Dialtone--TextareaExample3">Label</label>
      <textarea class="d-textarea d-textarea--error" id="Dialtone--TextareaExample3" type="email" placeholder="" value="Value"></textarea>
      <span class="d-validation-message d-validation-message--error">Error validation message</span>
    </div>
    <div>
      <label class="d-label" for="Dialtone--TextareaExample4">Label</label>
      <textarea class="d-textarea d-textarea--success" id="Dialtone--TextareaExample4" type="email" placeholder="" value="Value"></textarea>
      <span class="d-validation-message d-validation-message--success">Success validation message</span>
    </div>
    <div>
      <label class="d-label" for="Dialtone--TextareaExample5">Label</label>
      <textarea class="d-textarea d-textarea--warning" id="Dialtone--TextareaExample5" type="email" placeholder="" value="Value"></textarea>
      <span class="d-validation-message d-validation-message--warning">Warning validation message</span>
    </div>
  </div>
</code-well-header>

```html
<div>
  <label class="d-label" for="Dialtone--TextareaExample3">...</label>
  <textarea class="d-textarea d-textarea--error" id="Dialtone--TextareaExample3" type="email" placeholder="..." value="..."></textarea>
  <span class="d-validation-message d-validation-message--error">...</span>
</div>
<div>
  <label class="d-label" for="Dialtone--TextareaExample4">...</label>
  <textarea class="d-textarea d-textarea--success" id="Dialtone--TextareaExample4" type="email" placeholder="..." value="..."></textarea>
  <span class="d-validation-message d-validation-message--success">...</span>
</div>
<div>
  <label class="d-label" for="Dialtone--TextareaExample5">...</label>
  <textarea class="d-textarea d-textarea--warning" id="Dialtone--TextareaExample5" type="email" placeholder="..." value="..."></textarea>
  <span class="d-validation-message d-validation-message--warning">...</span>
</div>
```

### With Icons

<code-well-header>
  <div class="d-stack24 d-w100p">
    <div class="d-w100p">
      <div>
        <label class="d-label" for="Dialtone--InputExample--IconLeft">Label</label>
      </div>
      <div class="d-input__wrapper">
        <span class="d-input-icon d-input-icon--left"><icon-send /></span>
        <input class="d-input d-input-icon--left" id="Dialtone--InputExample--IconLeft" type="text" placeholder="Placeholder" />
      </div>
    </div>
    <div class="d-w100p">
      <div>
        <label class="d-label" for="Dialtone--InputExample--IconRight">Label</label>
      </div>
      <div class="d-input__wrapper">
        <input class="d-input d-input-icon--right" id="Dialtone--InputExample--IconRight" type="text" placeholder="Placeholder" />
         <span class="d-input-icon d-input-icon--right"><icon-lock /></span>
      </div>
    </div>
  </div>
</code-well-header>

```html
<div>
  <label class="d-label" for="Dialtone--InputExample--IconLeft">...</label>
  <div class="d-input__wrapper">
    <span class="d-input-icon d-input-icon--left">...</span>
    <input class="d-input d-input-icon--left" id="Dialtone--InputExample--IconLeft" type="text" placeholder="..." />
  </div>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--IconRight">...</label>
  <div class="d-input__wrapper">
    <input class="d-input d-input-icon--right" id="Dialtone--InputExample--IconRight" type="text" placeholder="..." />
     <span class="d-input-icon d-input-icon--right">...</span>
  </div>
</div>
```

<code-well-header>
  <div class="d-stack24 d-w100p">
    <div class="d-w100p">
      <div>
        <label class="d-label" for="Dialtone--InputExample--IconLeft">Label</label>
      </div>
      <div class="d-input__wrapper">
        <span class="d-input-icon d-input-icon--left"><icon-send /></span>
        <textarea class="d-textarea d-input-icon--left" id="Dialtone--InputExample--IconLeft" type="text" placeholder="Placeholder"></textarea>
      </div>
    </div>
  </div>
</code-well-header>

```html
<div>
  <label class="d-label" for="Dialtone--InputExample--IconLeft">...</label>
  <div class="d-input__wrapper">
    <span class="d-input-icon d-input-icon--left">...</span>
    <textarea class="d-textarea d-input-icon--left" id="Dialtone--InputExample--IconLeft" type="text" placeholder="..."></textarea>
  </div>
</div>
```

### Input Sizes

We offer different sizes for instances in which the interface requires a smaller or larger input. In general, though, use the base (medium) size input as much as possible, especially in forms.

<code-well-header>
  <div class="d-stack24 d-w100p">
    <div>
      <label class="d-label" for="Dialtone--InputExample--ExtraSmall">Label</label>
      <input class="d-input d-input--xs" id="Dialtone--InputExample--ExtraSmall" type="text" placeholder="Placeholder" />
    </div>
    <div>
      <label class="d-label" for="Dialtone--InputExample--Small">Label</label>
      <input class="d-input d-input--sm" id="Dialtone--InputExample--Small" type="text" placeholder="Placeholder" />
    </div>
    <div>
      <label class="d-label" for="Dialtone--InputExample--Base">Label</label>
      <input class="d-input" id="Dialtone--InputExample--Base" type="text" placeholder="Placeholder" />
    </div>
    <div>
      <label class="d-label" for="Dialtone--InputExample--Large">Label</label>
      <input class="d-input d-input--lg" id="Dialtone--InputExample--Large" type="text" placeholder="Placeholder" />
    </div>
    <div>
      <label class="d-label" for="Dialtone--InputExample--ExtraLarge">Label</label>
      <input class="d-input d-input--xl" id="Dialtone--InputExample--ExtraLarge" type="text" placeholder="Placeholder" />
    </div>
  </div>
</code-well-header>

```html
<div>
  <label class="d-label" for="Dialtone--InputExample--ExtraSmall">...</label>
  <input class="d-input d-input--xs" id="Dialtone--InputExample--ExtraSmall" type="text" placeholder="..." />
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--Small">...</label>
  <input class="d-input d-input--sm" id="Dialtone--InputExample--Small" type="text" placeholder="..." />
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--Base">...</label>
  <input class="d-input" id="Dialtone--InputExample--Base" type="text" placeholder="..." />
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--Large">...</label>
  <input class="d-input d-input--lg" id="Dialtone--InputExample--Large" type="text" placeholder="..." />
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--ExtraLarge">...</label>
  <input class="d-input d-input--xl" id="Dialtone--InputExample--ExtraLarge" type="text" placeholder="..." />
</div>
```

<code-well-header>
  <div class="d-stack24 d-w100p">
    <div>
      <label class="d-label" for="Dialtone--InputExample--ExtraSmall">Label</label>
      <textarea class="d-textarea d-textarea--xs" id="Dialtone--InputExample--ExtraSmall" type="text" placeholder="Placeholder"></textarea>
    </div>
    <div>
      <label class="d-label" for="Dialtone--InputExample--Small">Label</label>
      <textarea class="d-textarea d-textarea--sm" id="Dialtone--InputExample--ExtraSmall" type="text" placeholder="Placeholder"></textarea>
    </div>
    <div>
      <label class="d-label" for="Dialtone--InputExample--Base">Label</label>
      <textarea class="d-textarea" id="Dialtone--InputExample--Base" type="text" placeholder="Placeholder"></textarea>
    </div>
    <div>
      <label class="d-label" for="Dialtone--InputExample--Large">Label</label>
      <textarea class="d-textarea d-textarea--lg" id="Dialtone--InputExample--Large" type="text" placeholder="Placeholder"></textarea>
    </div>
    <div>
      <label class="d-label" for="Dialtone--InputExample--ExtraLarge">Label</label>
      <textarea class="d-textarea d-textarea--xl" id="Dialtone--InputExample--ExtraLarge" type="text" placeholder="Placeholder"></textarea>
    </div>
  </div>
</code-well-header>

```html
<div>
  <label class="d-label" for="Dialtone--InputExample--ExtraSmall">...</label>
  <textarea class="d-textarea d-textarea--xs" id="Dialtone--InputExample--ExtraSmall" type="text" placeholder="..."></textarea>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--Small">...</label>
  <textarea class="d-textarea d-textarea--sm" id="Dialtone--InputExample--Small" type="text" placeholder="..."></textarea>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--Base">...</label>
  <textarea class="d-textarea" id="Dialtone--InputExample--Base" type="text" placeholder="..."></textarea>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--Large">...</label>
  <textarea class="d-textarea d-textarea--lg" id="Dialtone--InputExample--Large" type="text" placeholder="..."></textarea>
</div>
<div>
  <label class="d-label" for="Dialtone--InputExample--ExtraLarge">...</label>
  <textarea class="d-textarea d-textarea--xl" id="Dialtone--InputExample--ExtraLarge" type="text" placeholder="..."></textarea>
</div>
```

### Icon Sizes

You may use different icon sizes in different sized inputs

<code-well-header>
  <div class="d-stack24 d-w100p">
    <div class="d-w100p">
      <div>
        <label class="d-label" for="Dialtone--InputExample--IconLeft">Input:sm Icon:lg</label>
      </div>
      <div class="d-input__wrapper">
        <span class="d-input-icon d-input-icon--left d-input--sm d-input-icon--lg"><icon-send /></span>
        <input class="d-input d-input-icon--left d-input--sm" id="Dialtone--InputExample--IconLeft-sm-lg" type="text" placeholder="Placeholder" />
      </div>
    </div>
    <div class="d-w100p">
      <div>
        <label class="d-label" for="Dialtone--InputExample--IconLeft">Input:md(default), Icon:xl</label>
      </div>
      <div class="d-input__wrapper">
        <span class="d-input-icon d-input-icon--left d-input-icon--xl"><icon-send /></span>
        <input class="d-input d-input-icon--left" id="Dialtone--InputExample--IconLeft-md-xl" type="text" placeholder="Placeholder" />
      </div>
    </div>
    <div class="d-w100p">
      <div>
        <label class="d-label" for="Dialtone--InputExample--IconLeft">Input:xl Icon:md(default)</label>
      </div>
      <div class="d-input__wrapper">
        <span class="d-input-icon d-input-icon--left d-input--xl"><icon-send /></span>
        <input class="d-input d-input-icon--left d-input--xl" id="Dialtone--InputExample--IconLeft-xl-md" type="text" placeholder="Placeholder" />
      </div>
    </div>
    <div class="d-w100p">
      <div>
        <label class="d-label" for="Dialtone--InputExample--IconLeft">Textarea:lg Icon:md(default)</label>
      </div>
      <div class="d-input__wrapper">
        <span class="d-input-icon d-input-icon--left d-input--lg"><icon-send /></span>
        <textarea class="d-textarea d-input-icon--left d-textarea--lg" id="Dialtone--TextareaExample--IconLeft-lg-md" type="text" placeholder="Placeholder"></textarea>
      </div>
    </div>
  </div>
</code-well-header>

```html
<label class="d-label" for="Dialtone--InputExample--IconLeft">Input:sm Icon:lg</label>
<div class="d-input__wrapper">
  <!-- note you must put the d-input--sm class on the icon element as well as the input -->
  <span class="d-input-icon d-input-icon--left d-input--sm d-input-icon--lg"><icon-send /></span>
  <input class="d-input d-input-icon--left d-input--sm" id="Dialtone--InputExample--IconLeft-sm-lg" type="text" placeholder="Placeholder" />
</div>
<label class="d-label" for="Dialtone--InputExample--IconLeft">Input:md(default), Icon:xl</label>
<div class="d-input__wrapper">
  <span class="d-input-icon d-input-icon--left d-input-icon--xl"><icon-send /></span>
  <input class="d-input d-input-icon--left" id="Dialtone--InputExample--IconLeft-md-xl" type="text" placeholder="Placeholder" />
</div>
<label class="d-label" for="Dialtone--InputExample--IconLeft">Input:xl Icon:md(default)</label>
<div class="d-input__wrapper">
  <span class="d-input-icon d-input-icon--left d-input--xl"><icon-send /></span>
  <input class="d-input d-input-icon--left d-input--xl" id="Dialtone--InputExample--IconLeft-xl-md" type="text" placeholder="Placeholder" />
</div>
<label class="d-label" for="Dialtone--InputExample--IconLeft">Textarea:lg Icon:md(default)</label>
<div class="d-input__wrapper">
  <span class="d-input-icon d-input-icon--left d-input--lg"><icon-send /></span>
  <textarea class="d-textarea d-input-icon--left d-textarea--lg" id="Dialtone--TextareaExample--IconLeft-lg-md" type="text" placeholder="Placeholder"></textarea>
</div>
```

## Classes

<component-class-table component-name="input"></component-class-table>

## Accessibility

- Make sure the `label` `for` attribute match the input `id`.
- Avoiding removing `labels`. Labelled inputs are user-friendly.
- Avoid relying on placeholder text as a substitute for a `label`.
- If the input is a required field, use the `aria-required` property and use the validation message for input errors.
- Input with validation errors should have `aria-describedby` with the `id` of the validation message.
- Placeholder text should not include critical information. Use description text for any information that helps the user successfully interact with the input.

<script setup>
  import IconSend from '@svgIcons/IconSend.vue';
  import IconLock from '@svgIcons/IconLock.vue';
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
