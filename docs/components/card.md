---
title: Card
desc: A card contains summary content and actions about a single subject. It can be used by itself or within a list, and is generally interactive.
storybook_url: https://vue.dialpad.design/?path=/story/components-card--default

---
<code-well-header>
  <div class="d-card d-w264">
      <div class="d-card__content">
        <p class="d-fs14 d-fw-bold d-fc-black-800">Lorem ipsum</p>
        <p class="d-fs12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
      </div>
  </div>
</code-well-header>

## Usage

Cards are surfaces that display content and actions on a single topic.
They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.

<dialtone-usage>
<template #do>

- To display content and actions on a single topic.
</template>
<template #dont>

- Add too many call-to-action elements to the same card. A card should only contain a single primary action.
- Inform users about important changes.
</template>
</dialtone-usage>

### Best Practices

- It should only contain a single idea that may feature a call-to-action, or the option to navigate to more detailed content.
- The content of a card should be concise and offer only a preview of detailed content.
- The headings should set clear expectations about the card’s purpose.

## Variants and Examples

### With Header

<code-well-header>
    <div class="d-card d-w264">
      <div class="d-card__header">
        <p>Header</p>
        <button href="#" class="d-btn d-btn--xs d-fc-black-400"><IconMenuVertical /></button>
      </div>
      <div class="d-card__content">
        <p class="d-fs14 d-fw-bold d-fc-black-800">Lorem ipsum</p>
        <p class="d-fs12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
      </div>
    </div>
</code-well-header>

```html
<div class="d-card d-w264">
  <div class="d-card__header">
    <p>Header</p>
    <button href="#" class="d-btn d-btn--xs d-fc-black-400"><IconMenuVertical /></button>
  </div>
  <div class="d-card__content">
    <p class="d-fs14 d-fw-bold d-fc-black-800">Lorem ipsum</p>
    <p class="d-fs12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
  </div>
</div>
```

### With Footer

<code-well-header>
    <div class="d-card d-w264">
      <div class="d-card__content">
        <p class="d-fs14 d-fw-bold d-fc-black-800">Lorem ipsum</p>
        <p class="d-fs12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
      </div>
      <div class="d-card__footer">
        <button href="#" class="d-btn d-btn--sm d-fc-black-400">Button 1</button>
        <button href="#" class="d-btn d-btn--sm d-fc-black-400">Button 2</button>
      </div>  
    </div>
</code-well-header>

```html
<div class="d-card d-w264">
  <div class="d-card__content">
    <p class="d-fs14 d-fw-bold d-fc-black-800">Lorem ipsum</p>
    <p class="d-fs12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum molestie semper. Morbi finibus nulla turpis, nec molestie mi rutrum.</p>
  </div>
  <div class="d-card__footer">
    <button href="#" class="d-btn d-btn--sm d-fc-black-400">Button 1</button>
    <button href="#" class="d-btn d-btn--sm d-fc-black-400">Button 2</button>
  </div>
</div>
```

### With Header, Footer and scrollable content

<code-well-header>
    <div class="d-card d-w264">
      <div class="d-card__header">
        <p>Header</p>
        <button href="#" class="d-btn d-btn--xs d-fc-black-400"><IconMenuVertical /></button>
      </div>
      <div class="d-card__content d-h84">
        <p class="d-fs14 d-fw-bold d-fc-black-800">Lorem ipsum</p>
        <p class="d-fs12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="d-card__footer">
        <button href="#" class="d-btn d-btn--sm d-fc-black-400">Button 1</button>
        <button href="#" class="d-btn d-btn--sm d-fc-black-400">Button 2</button>
      </div>  
    </div>
</code-well-header>

```html
<div class="d-card d-w264">
  <div class="d-card__header">
    <p>Header</p>
    <button href="#" class="d-btn d-btn--xs d-fc-black-400"><IconMenuVertical /></button>
  </div>
  <div class="d-card__content d-h84">
    <p class="d-fs14 d-fw-bold d-fc-black-800">Lorem ipsum</p>
    <p class="d-fs12">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="d-card__footer">
    <button href="#" class="d-btn d-btn--sm d-fc-black-400">Button 1</button>
    <button href="#" class="d-btn d-btn--sm d-fc-black-400">Button 2</button>
  </div>
</div>
```

## Classes

At minimum, card contains body of content. It could also have header with buttons, and footer with buttons/text.

<component-class-table component-name="card"></component-class-table>

<script setup>
  import IconMenuVertical from '@svgIcons/IconMenuVertical.vue';
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
