---
title: Pagination
desc: Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.
status: ready
thumb: true
storybook_url: https://vue.dialpad.design/?path=/story/components-pagination--default
---

<code-well-header>
  <dt-pagination
    :total-pages="totalPages"
    :active-page="activePage"
    :max-visible="maxVisible"
    :aria-label="ariaLabel"
    :prev-aria-label="prevAriaLabel"
    :next-aria-label="nextAriaLabel"
    :page-number-aria-label="getPageNumberAriaLabel"
    @change="onChange"
  />
</code-well-header>
