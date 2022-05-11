---
title: Usage
desc: A general overview of Dialtone's utility classes, CSS components, and Vue components.
---

## Utility-First
Dialtone's CSS library offers a framework of utility-first classes. Each class is a small, <a href="https://css-tricks.com/lets-define-exactly-atomic-css/" class="d-link" target="_blank">atomic style</a> declaration that, when chained together, should mitigate most situations in which custom CSS must be written. Just write these classes right in your mark-up and you're all set!

<code-well-header>
  <div class="d-p16 d-bgc-black-600 d-fc-white">Box</div>
</code-well-header>

```html
<div class="d-p16 d-bgc-black-600 d-fc-white">Box</div>
```

In the above example, we used:

- Our <a href="http://dialpad.design/utilities/spacing/padding/" class="d-link">padding utility class</a> `.d-p16` to add 16px of padding 
- Our <a href="http://dialpad.design/utilities/backgrounds/color/" class="d-link">background color utility class</a> `.d-bgc-black-600` to add a purple background 
- Our <a href="http://dialpad.design/utilities/typography/color/" class="d-link">font color utility class</a> `.d-fc-white` to change the font color to white 

Though an atomic CSS approach comes with many advantages, we know it also offers a notable disadvantage: reducing the CSS cascade. This is especially true for repeated UI elements, which can end up creating redundant mark-up. For these instances, Dialtone offers components.

## Components
There are two methods to implement Dialtone components: Vue (recommended) and CSS. Vue is the preferred method as it's more robust and readily accessible out-of-the-box. <a href="https://vue.dialpad.design/" class="d-link" target="_blank">Get started with Vue components.</a>
In the event Dialtone Vue doesn't suit your needs, Dialtone's CSS library offers the same set of components. These may require more work to implement and make accessible, but will work in a pinch.

<code-well-header>
  <button class="d-btn d-btn--primary">Primary Button</button>
</code-well-header>

```html
<button class="d-btn d-btn--primary">Primary Button</button>
```

## Writing CSS 
In the event you need to write CSS, use <a href="http://getbem.com/" class="d-link" target="_blank">BEM (Block Element Modifier)</a>. This is a simple, common naming convention that helps make our CSS easier to read and understand. If you aren't familiar with the approach, here's a <a href="http://getbem.com/introduction/" class="d-link" target="_blank">quick synposis</a>:

-  **Block:** A parent entity that is meaningful on its own. For example: `.d-input` 
-  **Element:** A child that is meaningful only in relation to its parent. For example: `.d-input__label` 
-  **Modifier:** A modifying flag on a Block or Element that changes appearance or behavior. For example: `.d-input--lg` 

## Backbone 
For internal Dialpad projects, using Dialtone in Backbone should be rare, since most front end changes are now being implemented using Vue. Regardless, if you find yourself needing to use Dialtone in Backbone, there are a few steps:

1. Create a `.less` file for your feature, if one does not yet exist. 
2. Import this `.less` file into the relevant base less file e.g. `single.less`, `web.less` etc. 
3. Import Dialtone into your `.less` file and compose your styles like shown in the example above. 

## Polyfills 
In order to make Dialtone work across our supported browsers you need to manually install **focus-visible** polyfill and **postcss-focus-visible** plugin.

1. Focus-visible adds a listener to every element that should be keyboard-focused only and when the element is focused, it adds the .focus-visible class to it, follow the [focus-visible](https://github.com/WICG/focus-visible#installation) installation instructions.
2. Postcss focus-visible plugin adds a .focus-visible class for every :focus-visible class found in your css, follow the [postcss-focus-visible](https://www.npmjs.com/package/postcss-focus-visible) installation instructions.

## Box-Sizing
All Dialtone components are implemented with `box-sizing: border-box;` applied. To understand why we prefer `border-box` over `content-box`, please visit this [Stack Overflow Teams question](https://stackoverflow.com/c/dialpad/questions/121).

In `Vue`, we apply `border-box` globally at the `VueView` level, ensuring all child elements use this style. As such, Dialtone styles will work correctly in Vue with respect to element sizing.

In `Backbone` we are not using `border-box` by default. Because Dialtone expects this, anytime we wish to use Dialtone styles in Backbone we must ensure to apply the `border-box` style to all affected elements.


<!-- <div class="d-stack16">
    <h2 id="uberconference" class="dialtone-title__section">Using Dialtone in UberConference</h2>
    <p class="dialtone-copy__normal">Coming soon.</p>
</div> -->
