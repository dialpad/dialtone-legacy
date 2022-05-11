---
title: Line Height
desc: Utilities to change an element's line-height.
---

## CSS Variables
<div class="d-h464 d-of-y-scroll d-bb d-bc-black-200">
  <table class="d-table">
    <thead>
      <tr>
        <th scope="col" class="d-w25p">Variable</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ class: className, output } in lineHeight.slice(0, -1)">
        <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">
          var(--lh{{ className }})
        </th>
        <td class="d-ff-mono d-fc-orange d-fs12">{{ output }}</td>
      </tr>
    </tbody>
  </table>
</div>

## Classes
<div class="d-h464 d-of-y-scroll d-bb d-bc-black-200">
  <utility-class-table>
    <template #content>
      <tbody>
        <tr v-for="{ class: className, output } in lineHeight.slice(0, -1)">
          <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">
            .d-lh{{ className }}
          </th>
          <td class="d-ff-mono d-fc-orange d-fs12">
            line-height: var(--lh{{ className }}) !important;
          </td>
        </tr>
      </tbody>
    </template>
  </utility-class-table>
</div>

## Relative line-heights
Use `d-lh-{n}` to change an element's line-height relatively. This means no unit is set with the line-height. Instead the line-height value is a multiple of the font-size.

<code-well-header class="d-d-flex d-jc-center d-fd-column d-p24 d-bgc-purple-100 d-w100p d-hmn102" custom>
  <div class="d-d-grid d-gg16 d-ai-center" style="grid-template-columns: 10rem 1fr">
    <div class="d-fs12 d-ff-mono d-fc-purple d-fco75">.d-lh-tighter</div>
    <div><p class="d-fs24 d-lh-tighter d-fc-orange d-bgc-purple-200 d-bgo25">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-purple d-fco75">.d-lh-tight</div>
    <div><p class="d-fs24 d-lh-tight d-fc-orange d-bgc-purple-200 d-bgo25">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-purple d-fco75">.d-lh-normal</div>
    <div><p class="d-fs24 d-lh-normal d-fc-orange d-bgc-purple-200 d-bgo25">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-purple d-fco75">.d-lh-loose</div>
    <div><p class="d-fs24 d-lh-loose d-fc-orange d-bgc-purple-200 d-bgo25">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-purple d-fco75">.d-lh-looser</div>
    <div><p class="d-fs24 d-lh-looser d-fc-orange d-bgc-purple-200 d-bgo25">The quick brown fox jumps over the lazy dog.</p></div>
  </div>
</code-well-header>

```html
<p class="d-lh-tighter">...</p>
<p class="d-lh-tight">...</p>
<p class="d-lh-normal">...</p>
<p class="d-lh-loose">...</p>
<p class="d-lh-looser">...</p>
```

## Fixed line-heights
Use `d-lh{n}` to fix an element's line-height. This allows you to target a specific line-height based on the font-size. For example if a target 20px line-height is desired and the current font-size is 14px, apply `.d-lh6` to achieve this target (14px font-size + 6px = 20px target line-height).

<code-well-header class="d-d-flex d-jc-center d-fd-column d-p24 d-bgc-yellow-100 d-w100p d-hmn102" custom>
  <div class="d-d-grid d-gg16 d-ai-center" style="grid-template-columns: 10rem 1fr">
    <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh0</div>
    <div><p class="d-fs24 d-lh0 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh1</div>
    <div><p class="d-fs24 d-lh1 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh2</div>
    <div><p class="d-fs24 d-lh2 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh4</div>
    <div><p class="d-fs24 d-lh4 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh6</div>
    <div><p class="d-fs24 d-lh6 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh8</div>
    <div><p class="d-fs24 d-lh8 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh12</div>
    <div><p class="d-fs24 d-lh12 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh16</div>
    <div><p class="d-fs24 d-lh16 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh20</div>
    <div><p class="d-fs24 d-lh20 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs12 d-ff-mono d-fc-yellow-500">.d-lh24</div>
    <div><p class="d-fs24 d-lh24 d-fc-yellow-600 d-bgc-yellow-200 d-bgo50">The quick brown fox jumps over the lazy dog.</p></div>
  </div>
</code-well-header>

```html
<p class="d-lh0">...</p>
<p class="d-lh1">...</p>
<p class="d-lh2">...</p>
<p class="d-lh4">...</p>
<p class="d-lh6">...</p>
<p class="d-lh8">...</p>
<p class="d-lh12">...</p>
<p class="d-lh16">...</p>
<p class="d-lh20">...</p>
<p class="d-lh24">...</p>
```

<script setup>
  import { lineHeight } from '@data/type.json';
</script>
