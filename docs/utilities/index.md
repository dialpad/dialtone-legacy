---
title: CSS utilities
desc: A utility-first CSS framework for building user interfaces.
---

## Introduction

Utilities – also known as “trumps,” “helper classes,” or “alterations” – are high-specificity selectors for making very targeted alterations to existing elements or components.

Each utility is a small, <a href="https://css-tricks.com/lets-define-exactly-atomic-css/" target="_blank">atomic style</a> declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!

Most utilities comes with responsive options, enabling alterations at targeted screen size ranges. For example, “small padding on smaller screens, larger padding on bigger screens.”

While an atomic CSS approach comes with many advantages, we recognize it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.

## Examples

### Border

`d-ba` applies a border (`b`) to all (`a`) sides.

<code-well-header>
  <div class="d-ba">Box</div>
</code-well-header>

```html
<div class="d-ba">Box</div>
```

### Border right

`d-br` applies a border (`b`) to the right (`r`) side.

<code-well-header>
  <div class="d-br">Box</div>
</code-well-header>

```html
<div class="d-br">Box</div>
```

## Tutorial

A basic example styling a container by combining Dialtone's CSS utilities. Follow each step with this [Codepen template.](https://codepen.io/pen?template=dyKvvZB)

### 1. Begin with an unstyled container

<code-well-header>
  <div>Box</div>
</code-well-header>

```html
<div>Box</div>
```

### 2. Apply a dark background color

Add `d-bgc-black-900` from the list of [background color utility classes](/utilities/backgrounds/color/).

<code-well-header>
  <div class="d-bgc-black-900">Box</div>
</code-well-header>

```html
<div class="d-bgc-black-900">Box</div>
```

### 3. Apply color to the foreground text

Since this is primary content on a dark background, let's use `d-fc-primary-inverted` from the [font color utilities](/utilities/typography/color/).

<code-well-header>
  <div class="d-bgc-black-600 d-fc-primary-inverted">Box</div>
</code-well-header>

```html
<div class="d-bgc-black-600 d-fc-primary-inverted">Box</div>
```

### 4. Apply some padding

Let's use `d-px16` for horizontal padding (right and left), and `d-py8` for vertical padding (top and bottom), from the list of [padding utility classes](/utilities/spacing/padding/).

<code-well-header>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box</div>
</code-well-header>

```html
<div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box</div>
```

### 5. List a bunch of boxes

Let's wrap a repeating set of boxes in a new container.

<code-well-header>
  <div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box 1</div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box the 2nd</div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box third</div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box IV</div>
  </div>
</code-well-header>

```html
<div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box 1</div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box the 2nd</div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box third</div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box IV</div>
</div>
```

### 6. Render them horizontally

Convert it to a `flex` container by adding `class="d-d-flex"`.

<code-well-header>
  <div class="d-d-flex">
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box 1</div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box the 2nd</div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box third</div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box IV</div>
  </div>
</code-well-header>

```html
<div class="d-d-flex">
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box 1</div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box the 2nd</div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box third</div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box IV</div>
</div>
```

### 7. Add borders to segment each.

Add a border to each box by applying `d-divide-x` (horizontal borders) to the surrounding container from the list of [devide width classes](/utilities/borders/divide-width.html).

<code-well-header>
  <div class="d-d-flex d-divide-x">
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box 1</div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box the 2nd</div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box third</div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box IV</div>
  </div>
</code-well-header>

```html
<div class="d-d-flex d-divide-x">
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box 1</div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box the 2nd</div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box third</div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box IV</div>
</div>
```

### 8. And change the border color

Since the border color of `d-divide-x` inherits the color of the parent's foreground (implicitly `currentColor`), let's soften it with `d-divide-black-400`, from the list of [devide color classes](/utilities/borders/divide-color.html).

<code-well-header>
  <div class="d-d-flex d-divide-x d-divide-black-400">
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box 1</div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box the 2nd</div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box third</div>
    <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box IV</div>
  </div>
</code-well-header>

```html
<div class="d-d-flex d-divide-x d-divide-black-400">
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box 1</div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box the 2nd</div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box third</div>
  <div class="d-bgc-black-600 d-fc-primary-inverted d-px16 d-py8">Box IV</div>
</div>
```

### Keep exploring

You can see the final result in this [Codepen template](https://codepen.io/pen?template=XWYMMRY). Continue to explore using the variety of CSS utilities listed here.
