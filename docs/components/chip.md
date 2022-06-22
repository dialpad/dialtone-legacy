---
title: Chip
desc: A Chip is a compact UI element that provides brief, descriptive information about an element. It is terse, ideally one word.
storybook_url: https://vue.dialpad.design/?path=/story/components-chip--default
---

<code-well-header>
  <example-chip label="Chip" with-avatar/>
</code-well-header>

[//]: # (## Usage)
[//]: # (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa ante, tempus vitae lacus id, luctus tristique lorem. Mauris feugiat massa ex, id aliquet mi tempor non. Curabitur non tristique lectus. Fusce ut nisl non diam dignissim viverra. In posuere dui arcu, sed eleifend massa faucibus sed. Phasellus quis leo vitae erat pellentesque venenatis id vitae lectus. Suspendisse convallis, metus a congue tincidunt, velit sem tincidunt dui, eget auctor ipsum ipsum in ex. Nullam lobortis, mauris vel vestibulum rutrum, lorem elit vehicula est, nec viverra ante erat nec dolor. Proin at placerat tortor. Nam ullamcorper metus et eros porta, at lacinia leo scelerisque. Curabitur finibus sollicitudin odio tempor finibus. Donec lobortis metus vitae mollis gravida.)

## Variants and Examples

### Base
The base chip should be the go-to chip for most of your needs.
<code-well-header>
  <example-chip label="Chip"/>
</code-well-header>

```html
<span class="d-chip d-chip--interactive" tabindex="0">
  <span>...</span>
  <button class="d-btn d-btn--circle" aria-label="close" type="button" >...</button>
</span>
```

### Without close button
<code-well-header>
  <example-chip label="Chip" hide-close-btn/>
</code-well-header>

```html
<span class="d-chip d-chip--interactive" tabindex="0">...</span>
```

### With icon
<code-well-header>
  <example-chip label="Chip" with-icon hide-close-btn/>
</code-well-header>

```html
<span class="d-chip d-chip--interactive" tabindex="0">
  <span class="d-chip__icon">...</span>
  <span>...</span>
</span>
```

### With icon and close button
<code-well-header>
  <example-chip label="Chip" with-icon/>
</code-well-header>

```html
<span class="d-chip d-chip--interactive" tabindex="0">
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
<span class="d-chip d-chip--interactive" tabindex="0">
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
<span class="d-chip" tabindex="-1">
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
<span class="d-chip d-chip--interactive d-w102" tabindex="0">
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
<span class="d-chip d-chip--xs d-chip--interactive" tabindex="0">...</span>
<span class="d-chip d-chip--sm d-chip--interactive" tabindex="0">...</span>
<span class="d-chip d-chip--interactive" tabindex="0">...</span>
```

<script setup>
  import ExampleChip from '@exampleComponents/ExampleChip.vue';
</script>

## Classes
<component-class-table component-name="chip" />

[//]: # (## Accessibility)
[//]: # (Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa ante, tempus vitae lacus id, luctus tristique lorem. Mauris feugiat massa ex, id aliquet mi tempor non. Curabitur non tristique lectus. Fusce ut nisl non diam dignissim viverra. In posuere dui arcu, sed eleifend massa faucibus sed. Phasellus quis leo vitae erat pellentesque venenatis id vitae lectus. Suspendisse convallis, metus a congue tincidunt, velit sem tincidunt dui, eget auctor ipsum ipsum in ex. Nullam lobortis, mauris vel vestibulum rutrum, lorem elit vehicula est, nec viverra ante erat nec dolor. Proin at placerat tortor. Nam ullamcorper metus et eros porta, at lacinia leo scelerisque. Curabitur finibus sollicitudin odio tempor finibus. Donec lobortis metus vitae mollis gravida.)
