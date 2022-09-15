---
title: Size
desc: Utilities for controlling an SVG's size.
prev:
  text: Padding
  link: /utilities/spacing/padding
next:
  text: Color
  link: /utilities/typography/color
---

## Usage

Use `d-svg--size{n}` to control the size of an SVG.

<code-well-header>
  <icon-phone class="d-svg--size14" />
  <icon-phone class="d-svg--size16" />
  <icon-phone class="d-svg--size18" />
  <icon-phone class="d-svg--size20" />
  <icon-phone class="d-svg--size24" />
  <icon-phone class="d-svg--size32" />
  <icon-phone class="d-svg--size48" />
  <icon-phone class="d-svg--size64" />
</code-well-header>

```html
<svg class="d-svg d-svg--system d-svg--size14">...</svg>
<svg class="d-svg d-svg--system d-svg--size16">...</svg>
<svg class="d-svg d-svg--system d-svg--size18">...</svg>
<svg class="d-svg d-svg--system d-svg--size20">...</svg>
<svg class="d-svg d-svg--system d-svg--size24">...</svg>
<svg class="d-svg d-svg--system d-svg--size32">...</svg>
<svg class="d-svg d-svg--system d-svg--size48">...</svg>
<svg class="d-svg d-svg--system d-svg--size64">...</svg>
```

Use `d-svg--size100p` to set the size of an SVG to the size of the containing element.

<code-well-header>
  <div class="d-w32 d-h32">
    <icon-phone class="d-svg--size100p" />
  </div>
</code-well-header>

```html
<div class="d-w32 d-h32">
  <svg class="d-svg d-svg--system d-svg--size100p">...</svg>
</div>
```

<script setup>
  import iconSizes from '@data/icons-sizes.json';
</script>

## Classes

<utility-class-table>
  <template #content>
    <tbody>
      <tr v-for="size in iconSizes">
        <th scope="row" class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100">{{ size.class }}</th>
          <td class="d-ff-mono d-fs-100">
            <span v-if="size.sizeRem">
              width: {{ size.sizeRem }} !important;
              height: {{ size.sizeRem }} !important;
            </span>
            <span v-else-if="size.class === 'd-svg--size100p'">
              width: 100% !important;
              height: auto !important;
            </span>
          </td>
      </tr>
    </tbody>
  </template>
</utility-class-table>
