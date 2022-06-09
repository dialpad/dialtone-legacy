---
title: Border Colors
desc: Utilities for controlling an element's border color.
prev:
  text: Patterns
  link: /utilities/backgrounds/patterns
---

## Usage

Use `d-bc-{color}` to set an element's border color.

<code-well-header class="d-d-flex d-jc-center d-fd-column d-p32 d-bgc-purple-100 d-bgo50 d-w100p d-hmn102" custom>
  <div class="d-d-flex d-ai-center d-w100p d-h64 d-py8 d-px16 d-bar8 d-ba d-bc-purple-400 d-bgc-white d-bgo50 d-fc-black-700 d-fs18">A bordered element</div>
</code-well-header>

```html

<div class="... d-ba d-bc-purple-400">...</div>
```

## Changing opacities

Use `d-bco{n}` to change the border color opacity value. You can also change the border color opacity value on `:hover`
, `:focus`, `:focus-visible`, or in dark mode by using the respective `h:d-bco{n}`, `f:d-bco{n}`, `fv:d-bco{n}`,
or `d:d-bco{n}` prefixes.

<code-well-header class="d-d-flex d-jc-center d-fd-column d-p24 d-bgc-orange-100 d-bgo50 d-w100p d-hmn102 d-stack8" custom>
  <div class="d-w100p d-p4 d-bb d-bbw2 d-bc-orange-500 d-fs14 d-fw-bold d-ff-mono">100%</div>
  <div class="d-w100p d-p4 d-bb d-bbw2 d-bc-orange-500 d-bco99 d-fs14 d-fw-bold">99%</div>
  <div class="d-w100p d-p4 d-bb d-bbw2 d-bc-orange-500 d-bco95 d-fs14 d-fw-bold">95%</div>
  <div class="d-w100p d-p4 d-bb d-bbw2 d-bc-orange-500 d-bco90 d-fs14 d-fw-bold">90%</div>
  <div class="d-w100p d-p4 d-bb d-bbw2 d-bc-orange-500 d-bco75 d-fs14 d-fw-bold">75%</div>
  <div class="d-w100p d-p4 d-bb d-bbw2 d-bc-orange-500 d-bco50 d-fs14 d-fw-bold">50%</div>
  <div class="d-w100p d-p4 d-bb d-bbw2 d-bc-orange-500 d-bco25 d-fs14 d-fw-bold">25%</div>
  <div class="d-w100p d-p4 d-bb d-bbw2 d-bc-orange-500 d-bco10 d-fs14 d-fw-bold">10%</div>
  <div class="d-w100p d-p4 d-bb d-bbw2 d-bc-orange-500 d-bco0 d-fs14 d-fw-bold">0%</div>
</code-well-header>

```html

<div class="d-bb d-bbw2 d-bc-orange-500">...</div>
<div class="d-bb d-bbw2 d-bc-orange-500 d-bco99">...</div>
<div class="d-bb d-bbw2 d-bc-orange-500 d-bco95">...</div>
<div class="d-bb d-bbw2 d-bc-orange-500 d-bco90">...</div>
<div class="d-bb d-bbw2 d-bc-orange-500 d-bco75">...</div>
<div class="d-bb d-bbw2 d-bc-orange-500 d-bco50">...</div>
<div class="d-bb d-bbw2 d-bc-orange-500 d-bco25">...</div>
<div class="d-bb d-bbw2 d-bc-orange-500 d-bco10">...</div>
<div class="d-bb d-bbw2 d-bc-orange-500 d-bco0">...</div>
```

## Hover

Use `h:d-bc-{color}` to change an element's border color spot on `:hover`.

<code-well-header class="d-fl-center d-p24 d-bgc-green-100 d-bgo50 d-w100p d-hmn102" custom>
  <button class="d-p16 d-bar4 d-fs18 d-fc-green-600 d-ba d-baw2 d-bc-green-200 h:d-bc-green-500 d-bgc-green-100">Hover over me</button>
</code-well-header>

```html

<button class="d-ba d-baw2 d-bc-green-200 h:d-bc-green-500">...</button>
```

## Focus

Use `f:d-bc-{color}` to change an element's border color when in `:focus` or `:focus-within` states.

<code-well-header class="d-fl-center d-p24 d-bgc-red-100 d-bgo50 d-w100p d-hmn102" custom>
  <button class="d-p16 d-bar4 d-fs18 d-fc-white d-bgc-red-400 d-ba d-baw2 d-bc-red-500 f:d-bc-purple-400">Click on me</button>
</code-well-header>

```html

<button class="d-ba d-baw2 d-bc-red-500 f:d-bc-white">...</button>
```

## Focus visible

Use `fv:d-bc-{color}` to change an element's border color when in `:focus-visible` state [only when focused by keyboard]
.

<code-well-header class="d-fl-center d-p24 d-bgc-red-100 d-bgo50 d-w100p d-hmn102" custom>
  <button class="d-p16 d-bar4 d-fs18 d-fc-white d-bgc-red-400 d-ba d-baw2 d-bc-red-500 fv:d-bc-purple-400">Focus on me</button>
</code-well-header>

```html

<button class="d-ba d-baw2 d-bc-red-500 fv:d-bc-purple-400">...</button>
```

<script setup>
  import colors from '@data/colors.json';
</script>

## Classes

<div class="d-h464 d-of-y-scroll d-bb d-bc-black-200">
  <utility-class-table>
    <template #content>
      <tbody>
          <tr>
              <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-bc-transparent</th>
              <td>
                  <div class="d-d-flex d-jc-space-between d-ai-center">
                      <div class="d-fl-grow1 d-ff-mono d-fc-orange d-fs12">
                          border-color: transparent !important;
                      </div>
                      <div class="d-fl-shrink0 d-m4 d-ml16 d-h32 d-w32 d-bar4 d-bc-transparent d-ba"></div>
                  </div>
              </td>
          </tr>
          <tr>
              <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-bc-unset</th>
              <td>
                  <div class="d-d-flex d-jc-space-between d-ai-center">
                      <div class="d-fl-grow1 d-ff-mono d-fc-orange d-fs12">
                          border-color: unset !important;
                      </div>
                      <div class="d-fl-shrink0 d-m4 d-ml16 d-h32 d-w32 d-bar4 d-bc-unset d-ba"></div>
                  </div>
              </td>
          </tr>
          <tr>
              <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-bc-white</th>
              <td>
                  <div class="d-d-flex d-jc-space-between d-ai-center">
                      <div class="d-fl-grow1 d-ff-mono d-fc-orange d-fs12">
                          --bco: 100%;<br/>
                          border-color: hsla(var(--white-h) var(--white-s) var(--white-l) / var(--bco)) !important;
                      </div>
                      <div class="d-fl-shrink0 d-d-flex d-m4 d-p4 d-ml16 d-h32 d-w32 d-bar4 d-bgc-black-700"><div class="d-w100p d-h100p d-bc-white d-ba d-bar4"></div></div>
                  </div>
              </td>
          </tr>
      </tbody>
      <tbody v-for="{color: c, stops} in colors">
          <tr v-for="{ stop, copy } in stops">
              <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-bc-{{ c }}-{{ stop }}</th>
              <td>
                  <div class="d-d-flex d-jc-space-between d-ai-center">
                      <div class="d-fl-grow1 d-ff-mono d-fc-orange d-fs12">
                          --bco: 100%;<br/>
                          border-color: hsla(var(--{{ c }}-{{ stop }}-h) var(--{{ c }}-{{ stop }}-s) var(--{{ c }}-{{ stop }}-l) / var(--bco)) !important;
                      </div>
                      <div
                        class="d-fl-shrink0 d-m4 d-ml16 d-h32 d-w32 d-bar4 d-ba"
                        :class="`d-bc-${c}-${stop}`"
                      >
                      </div>
                  </div>
              </td>
          </tr>
      </tbody>
    </template>
  </utility-class-table>
</div>