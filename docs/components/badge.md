---
title: Badge
desc: A badge is a compact UI element providing brief, descriptive information about an element and its surrounding context. It is terse, ideally one word.
storybook_url: https://vue.dialpad.design/?path=/story/components-badge--default
figma_url: https://www.figma.com/file/2adf7JhZOncRyjYiy2joil/DT-Core%3A-Components-7?node-id=8914%3A21227&viewport=656%2C314%2C0.55&t=xHutRjwo1o5zMTgT-11
---

<code-well-header>
  <div class="d-d-flex d-gg8 d-ai-center">
    <span class="d-badge"><span class="d-badge__label">Label</span></span>
    <span class="d-badge d-badge--count"><span class="d-badge__label">1</span></span>
  </div>
</code-well-header>

<!-- <component-combinator component-name="DtBadge" /> -->

## Usage

<dialtone-usage>
<template #do>

- To flag and draw awareness to a specific element or feature of focus. For example, something is unique about that separates it from other like content.
- As a notification system with minimal footprint.
</template>
<template #dont>

- To indicate that interaction by the user is required.
</template>
</dialtone-usage>

### Best practices

- While the color variant used should not be the sole indicator of information, choose color patterns that users can quickly scan and identify its intention.
- Avoid long values, favoring a brief scannable word.

## Accessibility

- Since a Badge may often reflect a value within an implied label, ensure a label is announced. For example, via `aria-label` or `aria-labeledby`.

## Kind

### Label

<code-well-header>
  <span class="d-badge"><span class="d-badge__label">Label</span></span>
</code-well-header>

```html
<span class="d-badge"><span class="d-badge__label">Label</span></span>
```

### Count

<code-well-header>
  <span class="d-badge d-badge--count"><span class="d-badge__label">1</span></span>
</code-well-header>

```html
<span class="d-badge"><span class="d-badge__label">Label</span></span>
```

## Type

<table>
  <tr>
    <th class="d-ta-left">Default</th>
    <td>
      <span class="d-badge">Label</span>
    </td>
    <td>
      <span class="d-badge d-badge--count"><span class="d-badge__label">1</span></span>
    </td>
    <td>Default general purpose callout when no implicit semantic meaning applies.</td>
  </tr>
  <tr>
    <th class="d-ta-left">Info</th>
    <td>
      <span class="d-badge d-badge--info"><span class="d-badge__label">Label</span></span>
    </td>
    <td>
      <span class="d-badge d-badge--count d-badge--info"><span class="d-badge__label">2</span></span>
    </td>
    <td>Used to convey general information that isn’t critical or requires action on the user's part.</td>
  </tr>
  <tr>
    <th class="d-ta-left">Success</th>
    <td>
      <span class="d-badge d-badge--success"><span class="d-badge__label">Label</span></span>
    </td>
    <td>
      <span class="d-badge d-badge--count d-badge--success"><span class="d-badge__label">3</span></span>
    </td>
    <td>Accompanying a successful or otherwise positive action or message</td>
  </tr>
  <tr>
    <th class="d-ta-left">Warning</th>
    <td>
      <span class="d-badge d-badge--warning"><span class="d-badge__label">Label</span></span>
    </td>
    <td>
      <span class="d-badge d-badge--count d-badge--warning"><span class="d-badge__label">4</span></span>
    </td>
    <td>When a users attention is needed, or action may be required.</td>
  </tr>
  <tr>
    <th class="d-ta-left">Critical</th>
    <td>
      <span class="d-badge d-badge--critical"><span class="d-badge__label">Label</span></span>
    </td>
    <td>
      <span class="d-badge d-badge--count d-badge--critical"><span class="d-badge__label">5</span></span>
    </td>
    <td>To communicate problems that must be resolved, something has failed, or otherwise negative label or dangerous condition.</td>
  </tr>
  <tr>
    <th class="d-ta-left">Bulletin</th>
    <td>
      <span class="d-badge d-badge--bulletin"><span class="d-badge__label">Label</span></span>
    </td>
    <td>
      <span class="d-badge d-badge--count d-badge--bulletin"><span class="d-badge__label">6</span></span>
    </td>
    <td>Used to provide temporary feedback to specific items in the interface, like live activity, notifications, and unread counts. </td>
  </tr>
  <tr>
    <th class="d-ta-left">Ai</th>
    <td>
      <span class="d-badge d-badge--ai">
        <span class="d-badge__icon-left">
          <dt-icon name="dialpad-ai" size="200" />
        </span>
        <span class="d-badge__label">Label</span>
      </span>
    </td>
    <td class="d-bgc-black-100 d-ta-center"><abbr class="d-fc-black-400 d-td-none d-fs-100" title="Not applicable">N/A</abbr></td>
    <td>To call out Ai features, e.g. "Ai Transcript," "Ai on."</td>
  </tr>
</table>

```html
<span class="d-badge"><span class="d-badge__label">Label</span></span>
<span class="d-badge d-badge--info"><span class="d-badge__label">Label</span></span>
<span class="d-badge d-badge--success"><span class="d-badge__label">Label</span></span>
<span class="d-badge d-badge--warning"><span class="d-badge__label">Label</span></span>
<span class="d-badge d-badge--critical"><span class="d-badge__label">Label</span></span>
<span class="d-badge d-badge--bulletin"><span class="d-badge__label">Label</span></span>
<span class="d-badge d-badge--ai">
  <span class="d-badge__icon-left">
    <dt-icon name="lightning-bolt" size="200" />
  </span>
  <span class="d-badge__label">Label</span>
</span>

<span class="d-badge d-badge--count"><span class="d-badge__label">1</span></span>
<span class="d-badge d-badge--count d-badge--info"><span class="d-badge__label">2</span></span>
<span class="d-badge d-badge--count d-badge--success"><span class="d-badge__label">3</span></span>
<span class="d-badge d-badge--count d-badge--warning"><span class="d-badge__label">4</span></span>
<span class="d-badge d-badge--count d-badge--critical"><span class="d-badge__label">5</span></span>
<span class="d-badge d-badge--count d-badge--bulletin"><span class="d-badge__label">6</span></span>
```

## Icon
<code-well-header>
  <span class="d-badge">
    <span class="d-badge__icon-left">
      <dt-icon name="lightning-bolt" size="200" />
    </span>
    <span class="d-badge__label">Label</span>
    <span class="d-badge__icon-right">
      <dt-icon name="lightning-bolt" size="200" />
    </span>
  </span>
</code-well-header>

```html
<span class="d-badge">
  <svg class="d-icon d-icon--size-200" ...>...</svg>
  <span class="d-badge__label">Label</span>
  <svg class="d-icon d-icon--size-200" ...>...</svg>
</span>
```

## Examples

### Label

<code-well-header>
  <div>
    <div class="d-d-flex d-gg8 d-ai-center">
      <span class="d-badge">Co-host</span>
      <span class="d-badge">Customer</span>
      <span class="d-badge">
        <span class="d-badge__icon-left">
          <svg aria-hidden="true" data-name="Lock" class="d-icon d-icon--lock d-icon--size-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" data-v-68a9d516=""><g clip-path="url(#a)" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.5 6a.5.5 0 0 0-.5.5V10a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V6.5a.5.5 0 0 0-.5-.5h-7ZM1 6.5A1.5 1.5 0 0 1 2.5 5h7A1.5 1.5 0 0 1 11 6.5V10a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 1 10V6.5Z"></path><path d="M6 1.5a2 2 0 0 0-2 2v2a.5.5 0 1 1-1 0v-2a3 3 0 1 1 6 0v2a.5.5 0 1 1-1 0v-2a2 2 0 0 0-2-2Z"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h12v12H0z"></path></clipPath></defs></svg>
        </span>
        <span class="d-badge__label">Locked</span>
        </span>
      <span class="d-badge">
        <span class="d-badge__icon-left">
          <svg aria-hidden="true" data-name="Message" class="d-icon d-icon--message d-icon--size-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12" data-v-68a9d516=""><path fill="currentColor" fill-rule="evenodd" d="M3 2a.5.5 0 0 0-.5.5v6.793l1.146-1.147A.5.5 0 0 1 4 8h6a.5.5 0 0 0 .5-.5v-5A.5.5 0 0 0 10 2H3Zm-1.06-.56A1.5 1.5 0 0 1 3 1h7a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 10 9H4.207l-1.853 1.854A.5.5 0 0 1 1.5 10.5v-8c0-.398.158-.78.44-1.06Z" clip-rule="evenodd"></path></svg>
        </span>
        <span class="d-badge__label">Chat log</span>
      </span>
    </div>
  </div>
  <div>
    <div class="d-d-flex d-gg8 d-ai-center">
      <span class="d-badge d-badge--info"><span class="d-badge__label">In progress</span></span>
      <span class="d-badge d-badge--info"><span class="d-badge__label">Beta</span></span>
      <span class="d-badge d-badge--info"><span class="d-badge__label">Draft</span></span>
    </div>
  </div>
  <div>
    <div class="d-d-flex d-gg8 d-ai-center">
      <span class="d-badge d-badge--warning"><span class="d-badge__label">Overdue</span></span>
    </div>
  </div>
  <div>
    <div class="d-d-flex d-gg8 d-ai-center">
      <span class="d-badge d-badge--success"><span class="d-badge__label">Resolved</span></span>
    </div>
  </div>
  <div>
    <div class="d-d-flex d-gg8 d-ai-center">
      <span class="d-badge d-badge--critical">
        <span class="d-badge__icon-left">
          <svg aria-hidden="true" data-name="Record Filled" class="d-icon d-icon--recordFilled d-icon--size-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" data-v-68a9d516=""><path fill="currentColor" fill-rule="evenodd" d="M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Z" clip-rule="evenodd"></path><path fill="currentColor" d="M8.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path fill="currentColor" fill-rule="evenodd" d="M6 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 6a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" clip-rule="evenodd"></path></svg>
        </span>
        <span class="d-badge__label">Recording</span>
      </span>
    </div>
  </div>
  <div>
    <div class="d-d-flex d-gg8 d-ai-center">
      <span class="d-badge d-badge--bulletin"><span class="d-badge__label">Live</span></span>
      <span class="d-badge d-badge--bulletin"><span class="d-badge__label">Presenter</span></span>
    </div>
  </div>
  <div>
    <div class="d-d-flex d-gg8 d-ai-center">
      <span class="d-badge d-badge--ai">
        <span class="d-badge__icon-left">
          <svg aria-hidden="true" data-name="Dialpad Ai" class="d-icon d-icon--dialpadAi d-icon--size-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" data-v-68a9d516=""><path fill="currentColor" fill-rule="evenodd" d="M10.25 2a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm-5.722.5c-.415 0-.886.352-1.108 1.058v.001L1.476 9.652a.5.5 0 1 1-.952-.304l1.943-6.09c0-.001 0 0 0 0C2.765 2.308 3.518 1.5 4.528 1.5s1.761.806 2.06 1.753l1.498 4.692C8.308 8.65 8.777 9 9.193 9c.735 0 1.307-.576 1.307-1.257V4.53a.5.5 0 0 1 1 0v3.212C11.5 9.003 10.454 10 9.193 10c-1.009 0-1.761-.806-2.06-1.753l-1.497-4.69v-.002C5.412 2.85 4.943 2.5 4.527 2.5Z" clip-rule="evenodd"></path></svg>
        </span>
        <span class="d-vi-visible-sr">Ai</span>
        <span class="d-badge__label">Notes</span>
      </span>
      <span class="d-badge d-badge--ai">
        <span class="d-badge__icon-left">
          <svg aria-hidden="true" data-name="Dialpad Ai" class="d-icon d-icon--dialpadAi d-icon--size-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" data-v-68a9d516=""><path fill="currentColor" fill-rule="evenodd" d="M10.25 2a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm-5.722.5c-.415 0-.886.352-1.108 1.058v.001L1.476 9.652a.5.5 0 1 1-.952-.304l1.943-6.09c0-.001 0 0 0 0C2.765 2.308 3.518 1.5 4.528 1.5s1.761.806 2.06 1.753l1.498 4.692C8.308 8.65 8.777 9 9.193 9c.735 0 1.307-.576 1.307-1.257V4.53a.5.5 0 0 1 1 0v3.212C11.5 9.003 10.454 10 9.193 10c-1.009 0-1.761-.806-2.06-1.753l-1.497-4.69v-.002C5.412 2.85 4.943 2.5 4.527 2.5Z" clip-rule="evenodd"></path></svg>
        </span>
        <span class="d-vi-visible-sr">Ai</span>
        <span class="d-badge__label">Suggestion</span>
      </span>
      <span class="d-badge d-badge--ai">
        <span class="d-badge__icon-left">
          <svg aria-hidden="true" data-name="Dialpad Ai" class="d-icon d-icon--dialpadAi d-icon--size-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" data-v-68a9d516=""><path fill="currentColor" fill-rule="evenodd" d="M10.25 2a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm-5.722.5c-.415 0-.886.352-1.108 1.058v.001L1.476 9.652a.5.5 0 1 1-.952-.304l1.943-6.09c0-.001 0 0 0 0C2.765 2.308 3.518 1.5 4.528 1.5s1.761.806 2.06 1.753l1.498 4.692C8.308 8.65 8.777 9 9.193 9c.735 0 1.307-.576 1.307-1.257V4.53a.5.5 0 0 1 1 0v3.212C11.5 9.003 10.454 10 9.193 10c-1.009 0-1.761-.806-2.06-1.753l-1.497-4.69v-.002C5.412 2.85 4.943 2.5 4.527 2.5Z" clip-rule="evenodd"></path></svg>
        </span>
        <span class="d-vi-visible-sr">Ai</span>
        <span class="d-badge__label">on</span>
      </span>
      <span class="d-badge d-badge--ai">
        <span class="d-badge__icon-left">
          <svg aria-hidden="true" data-name="Dialpad Ai" class="d-icon d-icon--dialpadAi d-icon--size-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" data-v-68a9d516=""><path fill="currentColor" fill-rule="evenodd" d="M10.25 2a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm-5.722.5c-.415 0-.886.352-1.108 1.058v.001L1.476 9.652a.5.5 0 1 1-.952-.304l1.943-6.09c0-.001 0 0 0 0C2.765 2.308 3.518 1.5 4.528 1.5s1.761.806 2.06 1.753l1.498 4.692C8.308 8.65 8.777 9 9.193 9c.735 0 1.307-.576 1.307-1.257V4.53a.5.5 0 0 1 1 0v3.212C11.5 9.003 10.454 10 9.193 10c-1.009 0-1.761-.806-2.06-1.753l-1.497-4.69v-.002C5.412 2.85 4.943 2.5 4.527 2.5Z" clip-rule="evenodd"></path></svg>
        </span>
        <span class="d-vi-visible-sr">Ai</span>
        <span class="d-badge__label">Transcript</span>
      </span>
    </div>
  </div>
</code-well-header>

### Count

<code-well-header>
  <div>
    <div class="d-d-flex d-gg8 d-ai-center">
      <span class="d-badge d-badge--count d-badge--success">
        <span class="d-badge__icon-left">
          <svg aria-hidden="true" data-name="Arrow Up" class="d-icon d-icon--arrowUp d-icon--size-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" data-v-68a9d516=""><path fill="currentColor" fill-rule="evenodd" d="M5.646 2.146a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1-.708.708L6.5 3.707V9.5a.5.5 0 0 1-1 0V3.707L2.854 6.354a.5.5 0 1 1-.708-.708l3.5-3.5Z" clip-rule="evenodd"></path></svg>
        </span>
        <span class="d-badge__label">5%</span>
      </span>
    </div>
  </div>
  <div>
    <div class="d-d-flex d-gg8 d-ai-center">
      <span class="d-badge d-badge--count d-badge--critical">
        <span class="d-badge__icon-left">
          <svg aria-hidden="true" data-name="Arrow Down" class="d-icon d-icon--arrowDown d-icon--size-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" data-v-68a9d516=""><path fill="currentColor" fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .5.5v5.793l2.646-2.647a.5.5 0 1 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L5.5 8.293V2.5A.5.5 0 0 1 6 2Z" clip-rule="evenodd"></path></svg>
        </span>
        <span class="d-badge__label">-12%</span>
      </span>
    </div>
  </div>
  <div>
    <div class="d-d-flex d-gg8 d-ai-center">
      <span class="d-badge d-badge--count d-badge--bulletin"><span class="d-badge__label">1</span></span>
      <span class="d-badge d-badge--count d-badge--bulletin"><span class="d-badge__label">18</span></span>
      <span class="d-badge d-badge--count d-badge--bulletin"><span class="d-badge__label">99+</span></span>
    </div>
  </div>
</code-well-header>

## Classes

<component-class-table component-name="badge"></component-class-table>

<script setup>
  import { classes } from '@data/badge.json';
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
