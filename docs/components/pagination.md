---
title: Pagination
desc: Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.
status: ready
thumb: true
storybook_url: https://vue.dialpad.design/?path=/story/components-pagination--default
---

<code-well-header>
  <dt-pagination
    :total-pages="25"
    aria-label="Pagination"
    prev-aria-label="Previous page"
    next-aria-label="Next page"
    :page-number-aria-label="() => {}"
  />
</code-well-header>

## Vue API

<component-vue-table component-name="pagination" />
