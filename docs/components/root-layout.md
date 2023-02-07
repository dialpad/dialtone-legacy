---
title: Root layout
desc: A root layout provides a standardized group of containers to display content at the root level.
status: ready
thumb: true
storybook: https://vue.dialpad.design/?path=/story/components-root-layout--default
---

<code-well-header>
<dt-root-layout
  class="d-w100p"
  style="height: 30vh!important;"
>
  <template
    #header
  >
    <div class="d-h100p d-bgc-purple-100">Header</div>
  </template>
  <template
    #sidebar
  >
    <div class="d-h100p d-bgc-black-100"><div>Sidebar item 1</div><div>Sidebar item 2</div><div>Sidebar item 3</div></div>
  </template>
  <template>
    <div class="d-h100p">Content</div>
  </template>
  <template
    #footer
  >
    <div class="d-h100p d-bgc-gold-100">Footer</div>
  </template>
</dt-root-layout>
</code-well-header>

## Variants and examples

### Header Sticky

<div
  class="d-h332 d-of-scroll"
>
  <dt-root-layout
    header-sticky
  >
    <template
      #header
    >
      <div class="d-h100p d-bgc-purple-100">Header</div>
    </template>
    <template
      #sidebar
    >
      <div class="d-h100p d-bgc-black-100"><div>Sidebar item 1</div><div>Sidebar item 2</div><div>Sidebar item 3</div></div>
    </template>
    <template>
      <div class="d-h100p">Content</div>
    </template>
    <template
      #footer
    >
      <div class="d-h100p d-bgc-gold-100">Footer</div>
    </template>
  </dt-root-layout>
</div>
