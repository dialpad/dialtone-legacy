---
title: Modal
desc: A modal is an interstitial over page content that focuses the user’s attention exclusively on one task or piece of information.
storybook_url: https://vue.dialpad.design/?path=/story/components-modal--default
---
<code-well-header>
  <example-modal kind="base" />
</code-well-header>

## Usage
Modals are used to present a short-term task the user needs to perform without losing the context of the underlying page. Users won't be able to interact with the page until they close the modal.
Although highly versatile, this doesn't mean modal dialogs are fit for all purposes. Modals are purposefully disruptive and should be used thoughtfully and sparingly, specifically in moments where focus is required or an action must be taken.

<div class="xl:d-fd-column xl:d-flow0 xl:d-stack32 d-fl-col2 d-flow32 d-mt32 d-mb32">
  <div class="d-d-block d-px16 d-py24 d-bgc-green-100 d-bar4">
    <h3 class="d-mb16">
      <span class="d-fc-green-600 d-ps-relative d-t6">
        <icon-checkmark />
      </span>
      <span class="d-fw-bold d-fc-green-600">Use for</span>
    </h3>
    <ul class="d-fs14 d-stack8 d-pr24">
      <li>Confirming a destructive action that is about to happen</li>
      <li>Entering the name and description of a new Call Center</li>
      <li>Ask for a user’s consent for an action</li>
    </ul>
  </div>
  <div class="d-d-block d-px16 d-py24 d-bgc-red-100 d-bar4">
    <h3 class="d-mb16">
      <span class="d-fc-red-600 d-ps-relative d-t6">
        <icon-close />
      </span>
      <span class="d-fw-bold d-fc-red-600">Don't use for</span>
    </h3>
    <ul class="d-fs14 d-stack8 d-pr24">
      <li>Confirming an action took place (instead: use a Toast)</li>
      <li>Revealing more information (instead: place content inline)</li>
      <li>Displaying complex forms or large amounts of information (instead: place content inline)</li>
      <li>Displaying content unrelated to current task (instead: place content inline as link or banner)</li>
    </ul>
  </div>
</div>

### Best practices
- Limit the number of interactions in a modal. Remove anything that does not support the task.
- Avoid multiple steps that require navigation within the modal dialog.
- Avoid complex decision making that requires additional sources of information unavailable in the modal.
- Label links and buttons with a verb that indicates what happens when it’s selected.
- The primary button should reflect the modal title.
- Don’t surprise users by popping up a modal. Let a user’s action, such as a button click, trigger the modal. Uninvited modals may surprise the user and result in a quick dismissal of the window.

## Variants and Examples
### Base Style
<code-well-header>
  <example-modal kind="base" />
</code-well-header>

```html
<aside class="d-modal" id="modal-base" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true">
  <div class="d-modal__dialog" role="document">
    <h2 class="d-modal__header" id="modal-title">…</h2>
    <p class="d-modal__content" id="modal-description">…</p>
    <footer class="d-modal__footer">
      <button class="d-btn" type="button">…</button>
      <button class="d-btn d-btn--primary" type="button">…</button>
    </footer>
    <button href="#" class="d-modal__close d-btn d-btn--circle d-btn--lg" aria-label="Close"><IconClose /></button>
  </div>
</aside>
```

### Fixed header and footer
<code-well-header>
  <example-modal kind="fixed" />
</code-well-header>

```html
<aside class="d-modal" id="modal-base" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true">
  <div class="d-modal__dialog d-modal__dialog--scrollable" role="document">
    <h2 class="d-modal__header" id="modal-title">…</h2>
    <p class="d-modal__content" id="modal-description">…</p>
    <footer class="d-modal__footer">
      <button class="d-btn" type="button">…</button>
      <button class="d-btn d-btn--primary" type="button">…</button>
    </footer>
    <button href="#" class="d-modal__close d-btn d-btn--circle d-btn--lg" aria-label="Close"><IconClose /></button>
  </div>
</aside>
```

### Danger
<code-well-header>
  <example-modal kind="danger" />
</code-well-header>

```html
<aside class="d-modal d-modal--danger" id="modal-base" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true">
  <div class="d-modal__dialog" role="document">
    <h2 class="d-modal__header" id="modal-title">…</h2>
    <p class="d-modal__content" id="modal-description">…</p>
    <footer class="d-modal__footer">
      <button class="d-btn d-btn--danger" type="button">…</button>
      <button class="d-btn d-btn--danger d-btn--primary" type="button">…</button>
    </footer>
    <button href="#" class="d-modal__close d-btn d-btn--circle d-btn--lg" aria-label="Close"><IconClose \></button>
  </div>
</aside>
```

### Full Screen
<code-well-header>
  <example-modal kind="full-screen" />
</code-well-header>

```html
<aside class="d-modal d-modal--full" id="modal-base" tabindex="-1" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description" aria-hidden="true">
  <div class="d-modal__dialog" role="document">
    <h2 class="d-modal__header" id="modal-title">…</h2>
    <p class="d-modal__content" id="modal-description">…</p>
    <footer class="d-modal__footer">
      <button class="d-btn" type="button">…</button>
      <button class="d-btn d-btn--primary" type="button">…</button>
    </footer>
    <button href="#" class="d-modal__close d-btn d-btn--circle d-btn--lg" aria-label="Close"><IconClose \></button>
  </div>
</aside>
```

## Classes
At minimum, modals contain a title and one button. They could also contain body text, brand illustrations, product wireframes, or multiple buttons.

<component-class-table component-name="modal"></component-class-table>

## Accessibility
Opened modals “trap focus,” meaning keyboard navigation controls are constrained to elements within the modal. Tabbing to the modal's last focusable element, and then pressing tab again would loop the focus back to the first element on the page. Focus doesn't return to the underlying page until the user explicitly dismisses the modal, in which case it would return to the place it was before the dialog opened.

To ensure maximum compatibility, all `a` tags must have an `href`attribute. Also any elements which you don't want to be focusable (but might be focusable by default) must have their `tabindex` set to `-1`.

Focus should always begin on the first element within the dialog. This could be an OK button, or the first field in the form. An X button in the top right corner should be last in the tab order even though it may be visually above the other elements.

Check out the "Focus management" section of the following <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role#focus_management" target="_blank">MDN Dialog document</a> if you'd like to know more.

<component-accessible-table component-name="modal"></component-accessible-table>

<script setup>
  import IconCheckmark from '@svgIcons/IconCheckmark.vue';
  import IconClose from '@svgIcons/IconClose.vue';
  import ExampleModal from '@exampleComponents/ExampleModal.vue';
</script>
