---
title: Popover
desc: A Popover displays a content overlay when it's anchor element is activated.
storybook_url: https://vue.dialpad.design/?path=/story/components-popover--default
---


## Overview
A Popover contains a dialog that will appear above other content when activated. It will always appear in a location relative to the anchor.
If you are looking for a dialog that does not display relative to the anchor, see <a href="components/modal/" class="d-link">Modal</a>.
Some common examples of popover usage: dropdown list, emoji picker dialog, add comment dialog.
A popover can be modal or non-modal. Below are some guidelines on when to use a modal vs non-modal popover.

Your popover should be modal when:
- It contains scrollable content.
- It contains components that hold user input state (input, checkbox).

Your popover should be non-modal when:
- It is not scrollable.
- It contains only components that do not hold state (link, button).

<div class="xl:d-fd-column xl:d-flow0 xl:d-stack32 d-fl-col2 d-flow32 d-mt32 d-mb32">
  <div class="d-d-block d-px16 d-py24 d-bgc-green-100 d-bar4">
    <h3 class="d-mb16">
      <span class="d-fc-green-600 d-ps-relative d-t6">
        <icon-checkmark />
      </span>
      <span class="d-fw-bold d-fc-green-600">Use for</span>
    </h3>
    <ul class="d-fs14 d-stack8 d-pr24">
      <li>Smaller sized dialogs that trigger on user activation of an anchor element.</li>
      <li>Dialogs that should be positioned relative to the anchor.</li>
      <li>Dialogs that contain interactive components.</li>
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
      <li>Content that is displayed on hover. (use <a href="components/tooltip/" class="d-link">Tooltip</a>)</li>
      <li>Dialogs that should be positioned in the center of the screen.</li>
      <li>Dialogs that are very large.</li>
      <li>Alerts.</li>
    </ul>
  </div>
</div>
  
### Best practices
- Popovers should be fairly small. If you are looking for more of a full size dialog solution see <a href="components/modal/" class="d-link">Modal</a>
- Trigger using an anchor element, such as a button.
- Render the dialog at the body element.
- Focus the first interactive element within the dialog after it is opened.
- Close the dialog when ESC is pressed.
- Close non-modal dialogs if they are scrolled out of visibility.
- Set the z-index of the dialog to var(--zi-modal-element) if modal, var(--zi-popover) if not.

## Classes
Popover must contain an anchor and content element. d-modal--transparent can be used as a sibling before the popover container if you wish to make the popover modal.

<component-class-table component-name="popover" />


## Examples
### Popover - Modal
<code-well-header>
  <popover modal />
</code-well-header>

```html
<div class="d-modal--transparent"></div>
<div class="d-popover">
  <button id="anchor1" class="d-btn d-btn--primary" aria-expanded="false" aria-controls="dialog1" aria-haspopup="dialog">Click Me</button>
  <div id="dialog1" class="d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="anchor1">
    <div class="d-popover__content d-p16">
      This is content rendered within the popover.<br>
      <button class="d-btn d-btn--primary">Button</button>
    </div>
  </div>
</div>
```

### Popover - Non Modal
<code-well-header>
  <popover />
</code-well-header>

```html
<div class="d-popover">
  <button id="anchor2" class="d-btn d-btn--primary" aria-expanded="false" aria-controls="dialog2" aria-haspopup="dialog">Click Me</button>
  <div id="dialog2" class="d-popover__dialog d-ps-relative d-t4 d-w264" role="dialog" aria-modal="false" aria-hidden="true" aria-labelledby="anchor2">
    <div class="d-popover__content d-p16">
      This is content rendered within the popover.<br>
      <button class="d-btn d-btn--primary">Button</button>
    </div>
  </div>
</div>
```

### With Header - Modal
<code-well-header>
  <popover modal header>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.<br>
    </template>
  </popover>
</code-well-header>

```html
<div class="d-modal--transparent"></div>
<div class="d-popover">
  <button id="anchor3" class="d-btn d-btn--primary" aria-expanded="false" aria-controls="dialog3" aria-haspopup="dialog">Click Me</button>
  <div id="dialog3" class="d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264 d-hmx164" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="anchor3">
    <div class="d-popover__header d-px16">
      <div class="d-w100p">
        This is the header
      </div>
    </div>
    <div class="d-popover__content d-p16">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.<br>
      <button class="d-btn d-btn--primary">Button</button>
    </div>
  </div>
</div>
```
### With Footer - Modal
<code-well-header>
  <popover modal footer>
    <template #content>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.<br>
    </template>
  </popover>
</code-well-header>

```html
<div class="d-modal--transparent"></div>
<div class="d-popover">
  <button id="anchor4" class="d-btn d-btn--primary" aria-expanded="false" aria-controls="dialog4" aria-haspopup="dialog">Click Me</button>
  <div id="dialog4" class="d-popover__dialog d-popover__dialog--modal d-ps-relative d-t4 d-w264 d-hmx164" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="anchor4">
    <div class="d-popover__content d-p16">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus distinctio id iure labore, maiores mollitia reprehenderit sunt tempore veritatis. Aliquam delectus earum ex, expedita ipsam nobis obcaecati quibusdam repudiandae.<br>
      <button class="d-btn d-btn--primary">Button</button>
    </div>
    <div class="d-popover__footer d-px16">
      <div class="d-w100p">
        This is the footer
      </div>
    </div>
  </div>
</div>
```

## Accessibility
If your popover is modal, please see the accessibility section of this page regarding "focus trapping": <a href="components/modal/#accessibility" class="d-link">Modal Accessibility</a>. The same rules will apply here if your popover is modal. 

<component-accessible-table component-name="popover"/>

<script setup>
  import Popover from '@components/Popover.vue';
</script>
