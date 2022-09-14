---
title: Font Size
desc: Utilities to change an element's font-size.
---

## Usage

Use `d-{fs|headline}{n}` to change an element's font-size.

<code-well-header class="d-d-flex d-jc-center d-fd-column d-p24 d-bgc-purple-100 d-w100p d-hmn102" custom>
  <div class="d-d-grid d-gg16 d-ai-center" style="grid-template-columns: 10rem 1fr">
    <div class="d-fs-100 d-ff-mono d-fc-purple">.d-fs-200</div>
    <div><p class="d-fs-200 d-fc-orange">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs-100 d-ff-mono d-fc-purple">.d-fs-200</div>
    <div><p class="d-fs-200 d-fc-orange">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs-100 d-ff-mono d-fc-purple">.d-fs-300</div>
    <div><p class="d-fs-300 d-fc-orange">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs-100 d-ff-mono d-fc-purple">.d-fs-400</div>
    <div><p class="d-fs-400 d-fc-orange">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs-100 d-ff-mono d-fc-purple">.d-fs-500</div>
    <div><p class="d-fs-500 d-fc-orange">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs-100 d-ff-mono d-fc-purple">.d-headline36</div>
    <div><p class="d-headline36 d-lh1 d-fc-orange">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs-100 d-ff-mono d-fc-purple">.d-headline48</div>
    <div><p class="d-headline48 d-lh1 d-fc-orange">The quick brown fox jumps over the lazy dog.</p></div>
    <div class="d-fs-100 d-ff-mono d-fc-purple">.d-headline54</div>
    <div><p class="d-headline54 d-lh1 d-fc-orange">The quick brown fox jumps over the lazy dog.</p></div>
  </div>
</code-well-header>

```html
<p class="d-fs-200">...</p>
<p class="d-fs-200">...</p>
<p class="d-fs-300">...</p>
<p class="d-fs-500">...</p>
<p class="d-headline36 d-lh1">...</p>
<p class="d-headline48 d-lh1">...</p>
<p class="d-headline54 d-lh1">...</p>
```

<script setup>
  import { fontSize } from '@data/type.json';
</script>

## Classes

<div class="d-h464 d-of-y-scroll d-bb d-bc-black-200">
  <table class="d-table dialtone-doc-table">
    <thead>
      <tr>
        <th scope="col" class="d-w10p">Size</th>
        <th scope="col" class="d-w20p">Class</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="{ size, output } in fontSize">
        <th scope="row">{{ size }}px</th>
        <td class="d-ff-mono d-fc-purple d-fw-normal d-fs-100">.d-fs{{ size }}</td>
        <td>
          <div class="d-d-flex d-jc-space-between d-ai-center">
            <div class="d-fl1 d-ff-mono d-fc-orange d-fs-100">
              font-size: {{ output }}rem !important;
            </div>
            <div class="d-fl0 d-lh4" :class="`d-fs-${size}`">
              Aa
            </div>
          </div>
        </td>
      </tr>
      <tr v-for="{ size, output, headline } in fontSize">
        <div v-if="headline === 'yes'" style="display: contents">
          <th scope="row">{{ size }}px</th>
          <td class="d-ff-mono d-fc-purple d-fw-normal d-fs-100">.d-headline{{ size }}</td>
          <td>
            <div class="d-d-flex d-jc-space-between d-ai-center">
              <div class="d-fl1 d-ff-mono d-fc-orange d-fs-100">
                font-size: {{ output }}rem !important;<br/>
                font-weight: var(--fw-bold) !important;
              </div>
              <div class="d-fl0 d-lh4" :class="`d-headline${size}`">
                Aa
              </div>
            </div>
          </td>
        </div>
      </tr>
    </tbody>
  </table>
</div>
