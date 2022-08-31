---
title: Card
desc: A card contains summary content and actions about a single subject. It can be used by itself or within a list, and is generally interactive.
storybook_url: https://vue.dialpad.design/?path=/story/components-card--default
prev:
text: Utilities - Word break
link: /utilities/typography/word-break
---
<code-well-header>
  <div class="d-card">
      <div class="d-card__content">
        <div class="d-h12 d-w84 d-bgc-black-400 d-mb8" />
        <div class="d-h12 d-w216 d-bgc-black-400 d-mb8" />
        <div class="d-h12 d-w164 d-bgc-black-400" />
      </div>
  </div>
</code-well-header>

[//]: # (## Usage)
[//]: # (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa ante, tempus vitae lacus id, luctus tristique lorem. Mauris feugiat massa ex, id aliquet mi tempor non. Curabitur non tristique lectus. Fusce ut nisl non diam dignissim viverra. In posuere dui arcu, sed eleifend massa faucibus sed. Phasellus quis leo vitae erat pellentesque venenatis id vitae lectus. Suspendisse convallis, metus a congue tincidunt, velit sem tincidunt dui, eget auctor ipsum ipsum in ex. Nullam lobortis, mauris vel vestibulum rutrum, lorem elit vehicula est, nec viverra ante erat nec dolor. Proin at placerat tortor. Nam ullamcorper metus et eros porta, at lacinia leo scelerisque. Curabitur finibus sollicitudin odio tempor finibus. Donec lobortis metus vitae mollis gravida.)

## Variants and Examples

### With Header

<code-well-header>
    <div class="d-card">
      <div class="d-card__header">
        <p>Header</p>
        <button href="#" class="d-btn d-btn--xs d-fc-black-400" aria-label="Menu"><IconMenuVertical /></button>
      </div>
      <div class="d-card__content">
        <div class="d-h12 d-w84 d-bgc-black-400 d-mb8" />
        <div class="d-h12 d-w216 d-bgc-black-400 d-mb8" />
        <div class="d-h12 d-w164 d-bgc-black-400" />
      </div>
    </div>
</code-well-header>

```html
<div class="d-card">
  <div class="d-card__header">
    <p>Header</p>
    <button href="#" class="d-btn d-btn--xs d-fc-black-400" aria-label="Menu"><IconMenuVertical /></button>
  </div>
  <div class="d-card__content">
    <div class="d-h12 d-w84 d-bgc-black-400 d-mb8" />
    <div class="d-h12 d-w216 d-bgc-black-400 d-mb8" />
    <div class="d-h12 d-w164 d-bgc-black-400" />
  </div>
</div>
```

### With Footer

<code-well-header>
    <div class="d-card">
      <div class="d-card__content">
        <div class="d-h12 d-w84 d-bgc-black-400 d-mb8" />
        <div class="d-h12 d-w216 d-bgc-black-400 d-mb8" />
        <div class="d-h12 d-w164 d-bgc-black-400" />
      </div>
      <div class="d-card__footer">
        <button href="#" class="d-btn d-btn--sm d-fc-black-400" aria-label="Menu">Button 1</button>
        <button href="#" class="d-btn d-btn--sm d-fc-black-400" aria-label="Menu">Button 2</button>
      </div>  
    </div>
</code-well-header>

```html
<div class="d-card">
  <div class="d-card__content">
    <div class="d-h12 d-w84 d-bgc-black-400 d-mb8" />
    <div class="d-h12 d-w216 d-bgc-black-400 d-mb8" />
    <div class="d-h12 d-w164 d-bgc-black-400" />
  </div>
  <div class="d-card__footer">
    <button href="#" class="d-btn d-btn--sm d-fc-black-400" aria-label="Menu">Button 1</button>
    <button href="#" class="d-btn d-btn--sm d-fc-black-400" aria-label="Menu">Button 2</button>
  </div>
</div>
```

### With Header, Footer and scrollable content

<code-well-header>
    <div class="d-card">
      <div class="d-card__header">
        <p>Header</p>
        <button href="#" class="d-btn d-btn--xs d-fc-black-400" aria-label="Menu"><IconMenuVertical /></button>
      </div>
      <div class="d-card__content d-h72">
        <div class="d-h12 d-w84 d-bgc-black-400 d-mb8" />
        <div class="d-h12 d-w216 d-bgc-black-400 d-mb8" />
        <div class="d-h12 d-w164 d-bgc-black-400" />
      </div>
      <div class="d-card__footer">
        <button href="#" class="d-btn d-btn--sm d-fc-black-400" aria-label="Menu">Button 1</button>
        <button href="#" class="d-btn d-btn--sm d-fc-black-400" aria-label="Menu">Button 2</button>
      </div>  
    </div>
</code-well-header>

```html
<div class="d-card">
  <div class="d-card__header">
    <p>Header</p>
    <button href="#" class="d-btn d-btn--xs d-fc-black-400" aria-label="Menu"><IconMenuVertical /></button>
  </div>
  <div class="d-card__content d-h72">
    <div class="d-h12 d-w84 d-bgc-black-400 d-mb8" />
    <div class="d-h12 d-w216 d-bgc-black-400 d-mb8" />
    <div class="d-h12 d-w164 d-bgc-black-400" />
  </div>
  <div class="d-card__footer">
    <button href="#" class="d-btn d-btn--sm d-fc-black-400" aria-label="Menu">Button 1</button>
    <button href="#" class="d-btn d-btn--sm d-fc-black-400" aria-label="Menu">Button 2</button>
  </div>
</div>
```

## Classes

At minimum, card contains body of content. It could also have header with buttons, and footer with buttons/text.

<component-class-table component-name="card"></component-class-table>

<script setup>
  import IconMenuVertical from '@svgIcons/IconMenuVertical.vue';
</script>
