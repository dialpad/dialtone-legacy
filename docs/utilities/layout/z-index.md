---
title: Z-Index
desc: Utility classes for setting an element's z-index level.
next:
  text: Breakpoints
  link: /utilities/responsive/breakpoints
---

## Classes
Set an element's z-index by using a class (`.d-zi-{level}`>). These classes match up with the variables names listed above. The table below lists the available z-index levels, class names, and the CSS output.

<utility-class-table>
  <template #content>
    <tbody>
      <tr v-for="{ name, output } in zIndex">
        <th scope="row" class="d-ff-mono d-fc-purple d-fs12 d-fw-normal">.d-zi-{{ name }}</th>
        <td class="d-ff-mono d-fc-orange d-fs12">z-index: {{ output }};</td>
      </tr>
    </tbody>
   </template>
</utility-class-table>

<script setup>
  import zIndex from '@data/z-index.json';
</script>

## Variables
When writing Less, you can set an element's z-index by using a variable (`@zi-{level}`). The table below lists the available variables, output, and a description for when they should be used.

<table class="d-table dialtone-doc-table">
  <thead>
    <tr>
      <th scope="col" class="d-w25p">Variable</th>
      <th scope="col">Output</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="{ name, description, output } in zIndex">
      <th scope="row" class="d-ff-mono d-fc-pink-500 d-fs12 d-fw-normal">@zi-{{ name }}</th>
      <td>{{ output }}</td>
      <td class="dialtone-table--sans">{{ description }}</td>
    </tr>
  </tbody>
</table>
