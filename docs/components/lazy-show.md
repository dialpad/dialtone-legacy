---
title: Lazy show
desc: Lazy show is a utility component that prevents its children from being rendered until the first time it is shown.
status: ready
thumb: true
storybook_url: https://vue.dialpad.design/?path=/story/utilities-lazy-show--default
---

<code-well-header>
  <dt-lazy-show
    :transition="transition"
    :show="open"
  >
    I'm Lazy!
  </dt-lazy-show>
</code-well-header>
