---
title: Breadcrumbs
desc: Breadcrumbs are links used to provide context for the currently-viewed page and where it is located within the overall site structure.
storybook_url: https://vue.dialpad.design/?path=/story/components-breadcrumbs--default
---
<code-well-header>
  <nav class="d-breadcrumbs" aria-label="breadcrumb">
    <ol>
      <li class="d-breadcrumbs__item">
        <a href="#" class="d-link d-link--muted">Root</a>
      </li>
      <li class="d-breadcrumbs__item">
        <a href="#" class="d-link d-link--muted">Section</a>
      </li>
      <li class="d-breadcrumbs__item">
        <a href="#" class="d-link d-link--muted">Section</a>
      </li>
      <li class="d-breadcrumbs__item">
        <a href="#" class="d-link d-link--muted">Section</a>
      </li>
      <li class="d-breadcrumbs__item d-breadcrumbs__item--selected">
        <a href="#" class="d-link d-link--muted" aria-current="location">Current Page</a>
      </li>
    </ol>
  </nav>
</code-well-header>

<component-combinator component-name="DtBreadcrumbs" />

## Usage

Breadcrumbs show users where they are within a site’s hierarchy. Breadcrumbs help orient the user and allow for navigation to previous page levels. It can be appropriate to use a breadcrumb when:

- The user is many levels of navigation deep
- The current page does not have its own navigation
- The user needs to quickly go back to the previous parent page

Breadcrumbs should be the first page element—placed directly above the page’s title. All pages that appear in the breadcrumb should link to their respective page. The page the user is on should always be the last page listed and not linked.

### When not to use

Breadcrumbs are always treated as secondary and should not entirely replace the primary navigation. They shouldn’t be used for products that have single level navigation because they create unnecessary clutter.

## Variants and Examples

<code-well-header>
    <nav class="d-breadcrumbs" aria-label="breadcrumb">
        <ol>
            <li class="d-breadcrumbs__item">
                <a href="#" class="d-link d-link--muted">Root</a>
            </li>
            <li class="d-breadcrumbs__item">
                <a href="#" class="d-link d-link--muted">Section</a>
            </li>
            <li class="d-breadcrumbs__item">
                <a href="#" class="d-link d-link--muted">Section</a>
            </li>
            <li class="d-breadcrumbs__item">
                <a href="#" class="d-link d-link--muted">Section</a>
            </li>
            <li class="d-breadcrumbs__item d-breadcrumbs__item--selected">
                <a href="#" class="d-link d-link--muted" aria-current="location">Current Page</a>
            </li>
        </ol>
    </nav>
    <nav class="d-breadcrumbs d-breadcrumbs--inverted d-bgc-black-700 d-border-radius--md d-py16 d-px12 d-mxn12" aria-label="breadcrumb">
        <ol>
            <li class="d-breadcrumbs__item">
                <a href="#" class="d-link d-link--inverted">Root</a>
            </li>
            <li class="d-breadcrumbs__item">
                <a href="#" class="d-link d-link--inverted">Section</a>
            </li>
            <li class="d-breadcrumbs__item">
                <a href="#" class="d-link d-link--inverted">Section</a>
            </li>
            <li class="d-breadcrumbs__item">
                <a href="#" class="d-link d-link--inverted">Section</a>
            </li>
            <li class="d-breadcrumbs__item d-breadcrumbs__item--selected">
                <a href="#" class="d-link d-link--inverted" aria-current="location">Current Page</a>
            </li>
        </ol>
    </nav>
</code-well-header>

```html
<nav class="d-breadcrumbs" aria-label="breadcrumb">
  <ol>
    <li class="d-breadcrumbs__item">
      <a href="#" class="d-link d-link--muted">Root</a>
    </li>
    <li class="d-breadcrumbs__item">
      <a href="#" class="d-link d-link--muted">Section</a>
    </li>
    <li class="d-breadcrumbs__item">
      <a href="#" class="d-link d-link--muted">Section</a>
    </li>
    <li class="d-breadcrumbs__item">
      <a href="#" class="d-link d-link--muted">Section</a>
    </li>
    <li class="d-breadcrumbs__item d-breadcrumbs__item--selected">
      <a href="#" class="d-link d-link--muted" aria-current="location">Current Page</a>
    </li>
  </ol>
</nav>
<nav class="d-breadcrumbs d-breadcrumbs--inverted" aria-label="breadcrumb">
  <ol>
    <li class="d-breadcrumbs__item">
      <a href="#" class="d-link d-link--inverted">Root</a>
    </li>
      ...
  </ol>
</nav>
```

## Classes

<component-class-table component-name="breadcrumbs"></component-class-table>

## Accessibility

HTML doesn't provide dedicated semantic elements for breadcrumbs, so we need to add a few ARIA attributes to make them accessible.

<component-accessible-table component-name="breadcrumbs"></component-accessible-table>
