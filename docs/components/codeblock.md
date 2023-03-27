---
title: Codeblock
description: A codeblock is a UI element intended to display a piece of code in a separate and self-contained block.
status: ready
thumb: true
image: assets/images/components/codeblock.png
storybook: https://vue.dialpad.design/?path=/story/components-codeblock--default
---

<code-well-header>
  <pre>
  <code class="d-codeblock">function twoSum(numA, numB) {
  return numA + numB;
}
</code>
  </pre>
</code-well-header>

<!-- <component-combinator component-name="DtChip" /> -->

## Example

<code-well-header>
  <pre><code class="d-codeblock">const userIds = userArray.map((user) => user.id);</code></pre>
</code-well-header>

```html
<pre><code class="d-codeblock">const userIds = userArray.map((user) => user.id);</code></pre>
```

## Vue API

<component-vue-api component-name="codeblock" />

## Classes

<component-class-table component-name="codeblock" />
