---
title: List Item
desc: A list item is an element that can be used to represent individual items in a list.
status: ready
thumb: true
storybook_url: https://vue.dialpad.design/?path=/story/components-list-item--default
---

<code-well-header class="d-d-block">
  <ul>
    <dt-list-item navigationType="tab">
      <template #left>
        <dt-icon name="check" />
      </template>
      <span />
      <template #subtitle>
        <span />{subtitle}
      </template>
      <template #bottom>
        {bottom}
      </template>
      <template #right>
        <dt-icon name="external-link" />
      </template>
    </dt-list-item>
  </ul>
</code-well-header>

## Vue API

<component-vue-table component-name="listitem" />
