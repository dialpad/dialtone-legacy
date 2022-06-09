---
title: Font Weight
desc: Utilities to change an element's font-weight.
---

## Classes
<utility-class-table>
  <template #content>
    <tbody>
      <tr v-for="{ name, output } in weight">
        <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">
          .d-fw-{{ name }}
        </th>
        <td class="d-ff-mono d-fc-orange d-fs12">
          font-weight: var(--fw-{{ name }}) !important;
        </td>
      </tr>
    </tbody>
  </template>
</utility-class-table>

## Usage
Use `d-fw-{n}` to change an element's font-weight.

<code-well-header class="d-d-flex d-jc-center d-fd-column d-p24 d-bgc-purple-100 d-w100p d-hmn102" custom>
  <div class="d-d-grid d-gg16 d-ai-center" style="grid-template-columns: 10rem 1fr">
    <div class="d-fs12 d-ff-mono d-fc-purple">.d-fw-normal</div>
    <div><p class="d-fs24 d-fw-normal d-fc-orange">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-purple">.d-fw-bold</div>
    <div><p class="d-fs24 d-fw-bold d-fc-orange">The quick brown fox jumps over the lazy dog.</p></div>
  </div>
</code-well-header>

```html
<p class="d-fw-normal">...</p>
<p class="d-fw-bold">...</p>
```

<script setup>
  import { weight } from '@data/type.json';
</script>

## Variables
<table class="d-table dialtone-doc-table">
  <thead>
      <tr>
          <th scope="col" class="d-w25p">Variable</th>
          <th scope="col">Output</th>
      </tr>
  </thead>
  <tbody>
    <tr v-for="{ name, output } in weight">
      <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">var(--fw-{{ name }})</th>
      <td class="d-ff-mono d-fc-orange d-fs12">{{ output }}</td>
    </tr>
  </tbody>
</table>
