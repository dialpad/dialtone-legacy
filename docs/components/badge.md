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
<span class="d-badge d-badge--count"><span class="d-badge__label">1</span></span>
```

## Type

<table class="d-table dialtone-doc-table d-mb16">
  <thead>
    <tr>
      <th>Type</th>
      <th class="d-ws-nowrap">Kind: <span class="d-fw-normal">Label</span></th>
      <th class="d-ws-nowrap">Kind: <span class="d-fw-normal">Count</span></th>
      <th>Usage</th>
    </tr>
  </thead>
  <tbody>
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
      <td>To communicate conditions deemed critical, negative, or dangerous. For example, sensitive state (e.g. recording), must be resolved, or something has failed.</td>
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
      <td><abbr class="d-fc-black-400 d-td-none d-fs-100" title="Not applicable">N/A</abbr></td>
      <td>To call out Ai features, e.g. "Ai Transcript," "Ai enabled."</td>
    </tr>
  </tbody>
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
  <span class="d-badge__icon-left">
    <dt-icon name="lightning-bolt" size="200" />
  </span>
  <span class="d-badge__label">Label</span>
  <span class="d-badge__icon-right">
    <dt-icon name="lightning-bolt" size="200" />
  </span>
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
          <dt-icon name="lock" size="200" />
        </span>
        <span class="d-badge__label">Locked</span>
        </span>
      <span class="d-badge">
        <span class="d-badge__icon-left">
          <dt-icon name="message" size="200" />
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
          <dt-icon name="record-filled" size="200" />
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
          <dt-icon name="dialpad-ai" size="200" />
        </span>
        <span class="d-vi-visible-sr">Ai</span>
        <span class="d-badge__label">Notes</span>
      </span>
      <span class="d-badge d-badge--ai">
        <span class="d-badge__icon-left">
          <dt-icon name="dialpad-ai" size="200" />
        </span>
        <span class="d-vi-visible-sr">Ai</span>
        <span class="d-badge__label">Suggestion</span>
      </span>
      <span class="d-badge d-badge--ai">
        <span class="d-badge__icon-left">
          <dt-icon name="dialpad-ai" size="200" />
        </span>
        <span class="d-vi-visible-sr">Ai</span>
        <span class="d-badge__label">enabled</span>
      </span>
      <span class="d-badge d-badge--ai">
        <span class="d-badge__icon-left">
          <dt-icon name="dialpad-ai" size="200" />
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
          <dt-icon name="arrow-up" size="200" />
        </span>
        <span class="d-badge__label">5%</span>
      </span>
    </div>
  </div>
  <div>
    <div class="d-d-flex d-gg8 d-ai-center">
      <span class="d-badge d-badge--count d-badge--critical">
        <span class="d-badge__icon-left">
          <dt-icon name="arrow-down" size="200" />
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
