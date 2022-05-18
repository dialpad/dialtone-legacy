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
  <example-chip label="Chip" :interactive="false"/>  
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
  <example-chip label="Chip loooooong name" truncate/>
</code-well-header>

```html
<span class="d-chip d-w102" tabindex="0">
  <span class="d-truncate">...</span>
  <button class="d-btn d-btn--circle" type="button">...</button>
</span>
```

### Sizes
<code-well-header>
  <example-chip label="Chip" with-icon size="xs"/>
  <example-chip label="Chip" with-avatar size="sm"/>
  <example-chip label="Chip" with-icon/>
</code-well-header>

```html
<span class="d-chip d-chip--xs d-chip--interactive">...</span>
<span class="d-chip d-chip--sm d-chip--interactive">...</span>
<span class="d-chip d-chip--interactive">...</span>
```

<script setup>
  import ExampleChip from '@exampleComponents/ExampleChip.vue';
</script>
