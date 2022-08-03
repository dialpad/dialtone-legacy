---
title: Colors
desc: Utilities to change an element's font-color.
prev:
  text: Size
  link: /utilities/svg/size
---

All font colors pass the WCAG 2.1 Level AA contrast ratio requirements (ratio >= 4.5:1) and most pass WCAG 2.1 Level AAA requirements (ratio >= 7:1).
The contrast ratio value is noted with the colors below.
Please use **only** these colors or variations of these colors which pass WCAG 2.1 Level AA contrast ratio requirements.

## Usage

Use `d-fc-{color}` to change an element's text color.

<code-well-header class="d-d-flex d-jc-center d-fd-column d-p24 d-bgc-black-050 d-w100p d-hmn102" custom>
  <p class="d-fs18 d-fc-purple">The quick brown fox jumps over the lazy dog.</p>
</code-well-header>

```html
<p class="d-fc-purple">...</p>
```

## Changing opacity

Use `d-fco{n}` to change an element's text color opacity. You can also change font color opacity on `:hover`, `:focus`, `:focus-visible`, or in dark mode by using the respective `h:d-fco{n}`, `f:d-fco{n}`, `fv:d-fco{n}`, or `d:d-fco{n}` prefixes.

<code-well-header class="d-d-flex d-jc-center d-fd-column d-p24 d-bgc-black-050 d-w100p d-hmn102 d-stack8" custom>
  <p class="d-fs18 d-fc-purple">The quick brown fox jumps over the lazy dog.</p>
  <p class="d-fs18 d-fc-purple d-fco99">The quick brown fox jumps over the lazy dog.</p>
  <p class="d-fs18 d-fc-purple d-fco95">The quick brown fox jumps over the lazy dog.</p>
  <p class="d-fs18 d-fc-purple d-fco90">The quick brown fox jumps over the lazy dog.</p>
  <p class="d-fs18 d-fc-purple d-fco75">The quick brown fox jumps over the lazy dog.</p>
  <p class="d-fs18 d-fc-purple d-fco50">The quick brown fox jumps over the lazy dog.</p>
  <p class="d-fs18 d-fc-purple d-fco25">The quick brown fox jumps over the lazy dog.</p>
  <p class="d-fs18 d-fc-purple d-fco10">The quick brown fox jumps over the lazy dog.</p>
  <p class="d-fs18 d-fc-purple d-fco0">The quick brown fox jumps over the lazy dog.</p>
</code-well-header>

```html
<p class="d-fc-purple">...</p>
<p class="d-fc-purple d-fco99">...</p>
<p class="d-fc-purple d-fco95">...</p>
<p class="d-fc-purple d-fco90">...</p>
<p class="d-fc-purple d-fco75">...</p>
<p class="d-fc-purple d-fco50">...</p>
<p class="d-fc-purple d-fco25">...</p>
<p class="d-fc-purple d-fco10">...</p>
<p class="d-fc-purple d-fco0">...</p>
```

## Hover

Use `h:d-fc-{color}` to change an element's text color `:hover` state.

<code-well-header class="d-fl-center d-p24 d-bgc-black-050 d-w100p d-hmn102" custom>
  <button class="d-p16 d-bar4 d-fs18 d-fc-purple h:d-fc-white d-bgc-transparent h:d-bgc-purple-500 d-ba d-bc-transparent">Hover over me</button>
</code-well-header>

```html
<button class="d-fc-purple h:d-fc-white">...</button>
```

## Focus

Use `f:d-fc-{color}` to change an element's text color `:focus` and `:focus-within` state.

<code-well-header class="d-fl-center d-p24 d-bgc-black-050 d-w100p d-hmn102" custom>
  <button class="d-p16 d-bar4 d-fs18 d-fc-pink f:d-fc-white d-bgc-transparent f:d-bgc-pink-600 d-ba d-bc-transparent">Click on me</button>
</code-well-header>

```html
<button class="d-fc-pink f:d-fc-white d-bgc-transparent f:d-bgc-pink-600">...</button>
```

## Focus visible

Use `fv:d-fc-{color}` to change an element's text color on `:focus-visible` state [only when focused by keyboard].

<code-well-header class="d-fl-center d-p24 d-bgc-black-050 d-w100p d-hmn102" custom>
  <button class="d-p16 d-bar4 d-fs18 d-fc-pink fv:d-fc-white d-bgc-transparent fv:d-bgc-pink-600 d-ba d-bc-transparent">Focus on me</button>
</code-well-header>

```html
<button class="d-fc-pink fv:d-fc-white d-bgc-transparent fv:d-bgc-pink-600">...</button>
```

<!--
## Dark Mode
Use `d:d-fc-{color}` to set a different text color when the user prefers dark mode.

<code-well-header class="d-fl-center d-fd-column d-p24 d-bgc-black-050 d-w100p d-hmn102 d-stack16">
  <button type="button" class="d-p16 d-bar4 d-fs18 d-fc-purple d-bgc-pink-100 d:d-fc-yellow d:d-bgc-yellow-200 d-ba d-bc-transparent js-theme-switcher">Click on me toggle dark mode</button>
</code-well-header>

```html
<button class="d-fc-purple d:d-fc-yellow">...</button>
```
 -->

<script setup>
  import { fontColorVars } from '@data/type.json';
  import colors from '@data/colors.json';
</script>

## CSS Variables

Dialtone provides a few abstracted colors CSS variables based on our [color stops](/design/colors/color-palette/).

<div class="d-h464 d-of-y-scroll d-bb d-bc-black-200">
  <table class="d-table dialtone-doc-table">
    <thead>
      <tr>
        <th scope="col" class="d-w30p">Variable</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ var: varName, output } in fontColorVars">
        <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">var(--fc-{{ varName }})</th>
        <td>
          <div class="d-d-flex d-jc-space-between d-ai-center">
            <div class="d-fl1 d-ff-mono d-fc-orange d-fs12">
              var(--{{ output }});
            </div>
            <div class="d-fl0 d-fs16 d-lh4" :class="`d-fc-${varName}`">
              Aa
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Classes

<div class="d-h464 d-of-y-scroll d-bb d-bc-black-200">
  <utility-class-table>
    <template #content>
      <tbody>
        <!-- Current Color -->
        <tr>
          <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-fc-current</th>
          <td>
            <div class="d-d-flex d-jc-space-between d-ai-center">
              <div class="d-fl1 d-ff-mono d-fc-orange d-fs12">
                color: currentColor !important;
              </div>
              <div class="d-fl0 d-fc-current d-fs16 d-lh4">
                Aa
              </div>
            </div>
          </td>
        </tr>
        <!-- Transparent -->
        <tr>
          <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-fc-transparent</th>
          <td>
            <div class="d-d-flex d-jc-space-between d-ai-center">
              <div class="d-fl1 d-ff-mono d-fc-orange d-fs12">
                color: transparent !important;
              </div>
              <div class="d-fl0 d-fc-transparent d-fs16 d-lh4">
                Aa
              </div>
            </div>
          </td>
        </tr>
        <!-- Unset Color -->
        <tr>
          <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-fc-unset</th>
          <td>
            <div class="d-d-flex d-jc-space-between d-ai-center">
              <div class="d-fl1 d-ff-mono d-fc-orange d-fs12">
                color: unset !important;
              </div>
              <div class="d-fl0 d-fc-unset d-fs16 d-lh4">
                Aa
              </div>
            </div>
          </td>
        </tr>
        <!-- White Color -->
        <tr>
          <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-fc-white</th>
          <td>
            <div class="d-d-flex d-jc-space-between d-ai-center">
              <div class="d-fl1 d-ff-mono d-fc-orange d-fs12">
                --fco: 100%;<br/>
                color: hsla(var(--white-h) var(--white-s) var(--white-l) / var(--fco)) !important;
              </div>
              <div class="d-fl0 d-bgc-black-700 d-ml16 d-p4 d-bar4 d-fc-white d-fs16 d-lh4">
                Aa
              </div>
            </div>
          </td>
        </tr>
        <!-- Colors -->
        <tr v-for="{ var: color, output } in fontColorVars">
          <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-fc-{{ color }}</th>
          <td>
            <div class="d-d-flex d-jc-space-between d-ai-center">
              <div class="d-fl1 d-ff-mono d-fc-orange d-fs12">
                --fco: 100%;<br/>
                color: hsla(var(--{{ output }}-h) var(--{{ output }}-s) var(--{{ output }}-l) / var(--fco)) !important;
              </div>
              <div class="d-fl0 d-ml16 d-p4 d-fs16 d-lh4" :class="`d-fc-${color}`">
                Aa
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      <tbody v-for="{ color, stops } in colors">
        <tr v-for="{ stop } in stops.reverse()">
          <th scope="row" class="d-ff-mono d-fc-purple d-fw-normal d-fs12">.d-fc-{{ color }}-{{ stop }}</th>
          <td>
            <div class="d-d-flex d-jc-space-between d-ai-center">
              <div class="d-fl1 d-ff-mono d-fc-orange d-fs12">
                  --fco: 100%;<br/>
                  color: hsla(var(--{{ color }}-{{ stop }}-h) var(--{{ color }}-{{ stop }}-s) var(--{{ color }}-{{ stop }}-l) / var(--fco)) !important;
              </div>
              <div class="d-fl0 d-ml16 d-p4 d-fs16 d-lh4" :class="`d-fc-${color}-${stop}`">
                  Aa
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </template>
  </utility-class-table>
</div>
