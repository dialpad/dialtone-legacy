---
title: Modal
desc: A modal focuses the user’s attention on a single task or message.
storybook_url: https://vue.dialpad.design/?path=/story/components-modal--default
---
<code-well-header>
  <div class="d-d-grid d-gg16 d-g-cols4 d-w100p d-fs14">
    <figure class="d-m0 d-stack4 d-w100p">
      <img class="d-bar4" alt="Modal screen: Base" :src="$withBase('/assets/images/screen-modal--base.png')">
      <figcaption><a href="#base-style">Base Style</a></figcaption>
      <!-- <example-modal kind="base" /> -->
    </figure>
    <figure class="d-m0 d-stack4 d-w100p">
      <img class="d-bar4" alt="Modal screen: Fixed header and footer" :src="$withBase('/assets/images/screen-modal--fixed-header-and-footer.png')">
      <figcaption><a href="#fixed-header-and-footer">Fixed header and footer</a></figcaption>
      <!-- <example-modal kind="fixed" /> -->
    </figure>
    <figure class="d-m0 d-stack4 d-w100p">
      <img class="d-bar4" alt="Modal screen: Danger" :src="$withBase('/assets/images/screen-modal--danger.png')">
      <figcaption><a href="#danger">Danger</a></figcaption>
      <!-- <example-modal kind="danger" /> -->
    </figure>
    <figure class="d-m0 d-stack4 d-w100p">
      <img class="d-bar4" alt="Modal screen: Full Screen" :src="$withBase('/assets/images/screen-modal--fullscreen.png')">
      <figcaption><a href="#full-screen">Full Screen</a></figcaption>
      <!-- <example-modal kind="full-screen" /> -->
    </figure>
  </div>
</code-well-header>

## Usage
Modals disabled underlying content and are used to present a short-term task the user needs to perform without losing the context of the underlying page. Users won't be able to interact with the page until they close the modal.

Although highly versatile, this doesn't mean modal dialogs are fit for all purposes. Modals are purposefully disruptive and should be used thoughtfully and sparingly, specifically in moments where focus is required or an action must be taken.

<div class="dialtone-usage">
  <div class="dialtone-usage__item dialtone-usage__item--do">
    <h3 class="dialtone-usage__hd dialtone-usage__hd--do"><icon-checkmark /> Use for</h3>
    <div class="dialtone-usage__bd">
<Markdown>
- To complete a simple task or decision that requires their full attention outside of the main workflow.
- Confirming a destructive action that is about to happen
- Entering the name and description of a new Call Center.
- Ask for a user’s consent for an action.
</Markdown>
    </div>
  </div>
  <div class="dialtone-usage__item dialtone-usage__item--dont">
    <h3 class="dialtone-usage__hd dialtone-usage__hd--dont"><icon-close /> Don't use for</h3>
    <div class="dialtone-usage__bd">
<Markdown>
- When its content or features can be part of the page without complicating the page’s intent.
- When the content or message requires interaction with other parts of the application or screen.
- Form-related error, success, or warning messages. Keep feedback in context to forms.
- Confirming an action took place (instead: use a Toast)
- Revealing more information (instead: place content inline)
- Displaying complex forms or large amounts of information (instead: place content inline)
- Displaying content unrelated to current task (instead: place content inline as link or banner)
</Markdown>
    </div>
  </div>
</div>

### Best practices
- Ideally, users trigger the modal, not the system, and should not be a surprise. Its appearance should reflect user intent to invoke it.  Uninvited modals may surprise the user and result in a quick dismissal of the window.
- Treat modals as a last resort. Consider whether there’s another component or UI that might be  less disruptive for the user.
- Limit the number of interactions in a modal. Remove anything that does not support the task.
- Avoid multiple steps that require navigation within the modal dialog.
- Avoid complex decision making that requires additional sources of information unavailable in the modal.
- User clear header and action labels. Label links and buttons with a verb that avoids ambiguity and clearly indicates what happens when it’s selected. The primary action’s label should complement the modal title.
- Avoid lengthy contents that require scrolling.

## Accessibility

- Opened modals “trap focus,” meaning keyboard navigation controls are constrained to elements within the modal. Tabbing to the modal's last focusable element, and then pressing tab again would loop the focus back to the first element on the page. Focus doesn't return to the underlying page until the user explicitly dismisses the modal, in which case it would return to the place it was before the dialog opened.
- To ensure maximum compatibility, all `a` tags must have an `href`attribute. Also any elements which you don't want to be focusable (but might be focusable by default) must have their `tabindex` set to `-1`.
- Focus should always begin on the first actionable element within the dialog. This could be an OK button, or the first field in the form. An X button in the top right corner should be last in the tab order even though it may be visually above the other elements.
- Check out the "Focus management" section of the following <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role#focus_management" target="_blank">MDN Dialog document</a> if you'd like to know more.
- Use `aria-labelledby` on its root element to associate a title to the modal to announce its to accessible technology. The value of aria-labelledby is to the `id` value of its heading element (e.g. `h2`).
- Dismissing Modal returns focus to the originating element that spawned the modal’s display.

<component-accessible-table component-name="modal"></component-accessible-table>

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

<script setup>
  import IconCheckmark from '@svgIcons/IconCheckmark.vue';
  import IconClose from '@svgIcons/IconClose.vue';
  import ExampleModal from '@exampleComponents/ExampleModal.vue';
  import Markdown from "@baseComponents/Markdown.vue";
</script>