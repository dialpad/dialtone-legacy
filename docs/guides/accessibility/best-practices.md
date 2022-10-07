---
title: Best Practices
---

## Color contrast ratio

Dialpad strives to maintain  **WCAG 2.1 AA** compliance in our digital products, including color contrast. [WCAG guidelines](https://www.w3.org/TR/WCAG21/#contrast-minimum) require a minimum of 4:51 ratio for all content in regular-weight fonts.

For easy reference, our color references are displayed alongside a contrast rating. Note that these are calculated using either a white or black background, and contrast between type and background should always be verified when using different background colors.

To check color contrast combination, try one of these tools:

- Colorable
- WebAim
- Figma plugin: Stark

## Semantics

One of the simplest things we can do to make more accessible sites is to build with semantic HTML. Creating semantic HTML, or “semantic markup” is the practice of using the appropriate HTML element to convey information about the meaning and context of each element. For example, for a paragraph or bulleted list, you would use `p`  or `ul` tags, respectively. In places where there is no HTML element which has a matching semantic meaning for what you are creating, you will want to employ the use of an inline `span`, or division element `div`.

Semantic markup also maintains the separation between the semantics and the visual presentation. For example, it’s common to choose which heading element to use based on its style, but that would be incorrect. The proper way would be [choosing the semantic heading level](#headings) and then applying CSS to style it, thus not using your mark-up as a means to style.

Inversely, there may be times when you want a `button`, `select`, etc. element, but also want it to have just slightly different behavior or non-native styling. In these cases, we generally choose to use a `div` or less semantic implementation. Be so careful when you decide to do this. We forget how much native functionality is built in a `button`, `link`, `select`, etc. and re-creating that exact implementation so a screen reader user or keyboard-only user can still interact with the element appropriately can be complex and time consuming.

As an example, to recreate a `button` with a `div`, you would need to add in multiple ARIA attributes, manage focus, and then also add additional JavaScript to allow you to click it, or use the spacebar and enter key to activate it. You can learn more by watching [“Just Use a Button,”](https://www.youtube.com/watch?v=CZGqnp06DnI) as explained by Rob Dodson from the Google Chrome Team.

### Structural semantics and landmarks

The following HTML elements should be used to identify common elements of our products.

```html
<header>
<nav>
<main>
<article>, <aside>
<form>
<footer>
```

#### Source

- [MDN - Developer Guides - Good Semantics](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#good_semantics)
- [W3C - HTML Sectioning Elements: ARIA Landmarks Example](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html)

## Headings

There are two easy rules that only apply to heading elements that we should adhere to for the best accessibility practices:

The first: use one `h1` per page. The `h1` is typically the page title and use of more than one `h1` can confuse browsers and assistive technology.

The second: when employing multiple heading levels, do not skip heading levels in a section. For example, if you’re writing an article, you could do:

```html
<h1>
<h2>
<h3>
<h2>
<h3>
<h4>
```

But you should never do:

```html
<h1>
<h2>
<h4> // This is problematic since you skipped the <h3> in the same section
<h2>
<h3>
<h4>
```

Headings taken out of context, such as accumulated together in a list for a screen reader, should logically represent the page content for users who choose this option as a way to browse.

## Lists

Do not underestimate the power of list elements. When there are more than two or three similar items next to one another on the page, consider putting them in either an order list `ol` or unordered list `ul` for screen readers.

By using a list element, a screen reader user knows how many items they can expect to go through, and where they are in the list. A screen reader will announce, “1 of 3 list items,” which is helpful context that allows a user to orient themselves and have a better expectation of what will come next.

## Tab order

Like the name suggests, tab order is the order in which elements receive focus when a user is navigating with a keyboard. The tab order should match the visual order, so users are able to logically navigate through content. This is important. The default keyboard navigation order must be logical and intuitive, which generally means that it follows the page’s visual flow: left to right, top to bottom -- header first, then main navigation, then page navigation (if applicable), and finally the footer.

Ideally, the visual tab flow will match the flow of the code. There are cases when something must be coded in an illogical order. In these cases, we can use `tabindex` to override the default order. By applying a `tabindex` value to each element in the flow, we can control the element order.

For example:

```html
<a href=”#” tabindex=”2”>First Element</a>
<a href=”#” tabindex=”1”>Second Element</a>
```

Because “Second Element” has a lower tabindex, keyboard users will focus it before “First Element.”

Though it sounds convenient, `tabindex` should be used only in cases where there is no other option.

By default, users can only navigate to links, buttons, and form controls with a keyboard. These natively-accessible elements should be used whenever possible, although there are times when HTML falls short and custom “widgets” are necessary. Complex menus, sliders, dialogs, tab panels, etc. must all be built to support keyboard accessibility.

`Tabindex=”0”` can be used to add non-interactive elements into the tab flow. This is useful when coding custom elements that are not natively focused.

## Visible focus

It is often difficult for keyboard users to tell where they are on the page. We must take care to ensure that it is easy to tell which item on the page currently has keyboard focus. All browsers by default display a visible outline around the element that currently has focus. Some browsers (i.e. Chrome and Safari) show an easy-to-see blue outline as their visible focus. However, other browsers show a thin, dotted line, which can be very difficult to see.

Dialtone provides visible focus on all components. However, we cannot anticipate the various contexts in which each component will be inserted. Be sure to remember that focus indication can occur on different colored backgrounds and a minimum contrast ratio of 3:1 is required.

## Skip navigation links

A site or product’s main content is not usually the first thing on the page. Keyboard users generally must navigate a long list of navigation links, dropdowns, logos, search inputs, and other elements before ever arriving at the main content. This is particularly difficult for users with some forms of motor disabilities. Without some sort of system, for bypassing the long list of links at the top, some users are at a huge disadvantage. Consider users with no arm movement, who use computers by tapping their heads on a switch or that use a stick in their mouth to press keyboard keys. Requiring users to perform any action perhaps 100s of times before reaching the main content is simply unacceptable.

The “skip navigation” idea was invented to give keyboard users the same capability as sighted mouse users to go directly to the main content. The idea is simple: provide a link at the top of the page which jumps the users down to an anchor or target at the beginning of the main content.

Often developers hide the skip navigation link so it is available for screen reader users only. Ensure that the link is visible, or becomes visible when the keyboard user tabs to it.

### Source

- [WebAim - “Skip Navigation Links”](https://webaim.org/techniques/skipnav/)

## Form best practices

Forms can be difficult, high-friction points for sighted and able users, which means if not done correctly, they can be simply unusable for users reliant on keyboard navigation or assistive technology. Users should be able to fill in forms, press buttons, use range sliders, select options, and operate controls with ease. Forms that use JavaScript to manipulate form data, set focus, change form elements, or submit forms can often create interactions that only work with a mouse. Ensure your forms can be understood and operated with the keyboard alone.

Labeling is also important. Input labels describe the function of a form control (i.e. checkbox, radio button, etc.) and generally appear adjacent to it. While sighted users make the connection visually, users reliant on a screen reader or other assistive technology may not. The `label` element programmatically associates a text label to its form control, creating a connection that doesn’t rely on vision.

Groups of form controls, such as checkboxes and radio buttons, sometimes require a higher-level label. This information can be associated with the group of form controls using `fieldset` and `legend`. The `fieldset` defines the group and the `legend` contains the description. Screen readers announce the `legend` when users navigate into the group.

List-based inputs, such as `select`, comboboxes, or custom dropdown menus can be tricky for keyboard navigation. Users should be able to navigate through the options using their arrows, not their tab key.

### Source

- [WebAim - “Creating Accessible Forms.”](https://webaim.org/techniques/forms/controls)

## Focus vs Focus-visible

User agents can choose their own heuristics for when to match :focus-visible; however, the following (non-normative) suggestions can be used as a starting point:

- If a user has expressed a preference (such as via a system preference or a browser setting) to always see a visible focus indicator, the user agent should honor this by having :focus-visible always match on the active element, regardless of any other factors. (Another option may be for the user agent to show its own focus indicator regardless of author styles.)
- Any element which supports keyboard input (such as an input element, or any other element which may trigger a virtual keyboard to be shown on focus if a physical keyboard is not present) should always match :focus-visible when focused.
- If the user interacts with the page via the keyboard, the currently focused element should match :focus-visible (i.e. keyboard usage may change whether this pseudo-class matches even if it doesn’t affect :focus).
- If the user interacts with the page via a pointing device, such that the focus is moved to a new element which does not support user input, the newly focused element should not match :focus-visible.
- If the active element matches :focus-visible, and a script causes focus to move elsewhere, the newly focused element should match :focus-visible.
- Conversely, if the active element does not match :focus-visible, and a script causes focus to move elsewhere, the newly focused element should not match :focus-visible.

User agents should also use :focus-visible to specify the default focus style, so that authors using :focus-visible will not also need to disable the default :focus style.

In general, a rule of thumb is that: if an element is going to need the keyboard (ex. inputs) that element should use **focus**, otherwise, it should use **focus-visible**. Here is a list of elements that use focus vs focus-visible:

### Focus

- Input
- Select menu

### Focus visible

- Button
- Link
- Checkbox
- Radio
- Dropdown menu
- List item
- Tab

#### Source

- [The Focus-Indicated Pseudo-class: :focus-visible.](https://www.w3.org/TR/selectors-4/#the-focus-visible-pseudo)
- [Understanding Success Criterion 2.4.7: Focus Visible.](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)
