---
title: Chip
desc: A chip is a compact UI element that provides brief, descriptive information about an element. It is terse, ideally one word.
---

## Classes
<component-class-table component-name="chip" />


## Examples
  
### Base
The base chip should be the go-to chip for most of your needs.
<code-well-header>
  <example-chip label="Chip"/>  
</code-well-header>

```html
<span class="d-chip d-chip--interactive">
  <span>...</span>
  <button class="d-btn d-btn--circle" aria-label="close" type="button" >...</button>
</span>
```

### Without close button
<code-well-header>
  <example-chip label="Chip" hide-close-btn/>
</code-well-header>

```html
<span class="d-chip">...</span>
```

### With icon
<code-well-header> 
  <example-chip label="Chip" with-icon hide-close-btn/>
</code-well-header>

```html
<span class="d-chip d-chip--interactive">
  <span class="d-chip__icon">...</span>
  <span>...</span>
</span>
```

### With icon and close button
<code-well-header>
  <example-chip label="Chip" with-icon/>
</code-well-header>

```html
<span class="d-chip d-chip--interactive">
  <span class="d-chip__icon">...</span>
  <span>...</span>
  <button class="d-btn d-btn--circle" type="button">...</button>
</span>
```

### With Avatar and close button
<code-well-header>
  <example-chip label="Chip" with-avatar/>
</code-well-header>

```html
<span class="d-chip d-chip--interactive">
  <span class="d-avatar">...</span>
  <span>...</span>
  <button class="d-btn d-btn--circle" type="button">...</button>
</span>
```

### Non Interactive
No `.d-chip--interactive` class.

<code-well-header>
  <span class="d-chip" tabindex="0">
    <span>Chip</span>
    <button class="d-btn d-btn--circle js-chip-button" aria-label="close" type="button">
      <span class="d-btn__icon"><icon-close /></span>
    </button>
  </span>
</code-well-header>

```html
<span class="d-chip" tabindex="0">
  <span>...</span>
  <button class="d-btn d-btn--circle" type="button">...</button>
</span>
```

### Truncated
`.d-truncate` is added to text content by default.

<code-well-header>
  <span class="d-chip d-chip--interactive d-w102" tabindex="0">
    <span class="d-truncate">Chip loooooong name</span>
    <button class="d-btn d-btn--circle js-chip-button" aria-label="close" type="button">
      <span class="d-btn__icon"><icon-close /></span>
    </button>
  </span>
</code-well-header>

```html
<span class="d-chip d-w102" tabindex="0">
  <span class="d-truncate">...</span>
  <button class="d-btn d-btn--circle" type="button">...</button>
</span>
```

### Sizes
<code-well-header>
  <span class="d-chip d-chip--xs d-mb4 d-chip--interactive" tabindex="0">
    <span class="d-chip__icon">
      <icon-phone />
    </span>
    Chip
    <button class="d-btn d-btn--circle js-chip-button" aria-label="close" type="button">
      <span class="d-btn__icon"><icon-close /></span>
    </button>
  </span>
  <span class="d-chip d-chip--sm d-mb4 d-chip--interactive" tabindex="0">
    <span class="d-avatar">
      <img src="/assets/images/person.png" alt="" />
    </span>
    <span>Chip</span>
    <button class="d-btn d-btn--circle js-chip-button" aria-label="close" type="button">
      <span class="d-btn__icon"><icon-close /></span>
    </button>
  </span>
  <span class="d-chip d-chip--interactive" tabindex="0">
    <span class="d-chip__icon">
      <icon-phone />
    </span>
    <span>Chip</span>
    <button class="d-btn d-btn--circle js-chip-button" aria-label="close" type="button">
      <span class="d-btn__icon"><icon-close /></span>
    </button>
  </span>
</code-well-header>

```html
<span class="d-chip d-chip--xs d-chip--interactive">...</span>
<span class="d-chip d-chip--sm d-chip--interactive">...</span>
<span class="d-chip d-chip--interactive">...</span>
```

<script setup>
  import ExampleChip from '@exampleComponents/ExampleChip.vue';
</script>
