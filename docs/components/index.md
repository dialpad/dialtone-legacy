---
title: Components
desc: Reusable components solving common UI needs, designed and built to be assembled in countless combinations.
no_preview: true
---

<!--

  Presumably store in each item's front matter (e.g. `avatar.md`):
  * {frontmatter.title}
  * {frontmatter.thumb}
  * {frontmatter.desc}
  * {frontmatter.status} badge (eventually); e.g. "New", "Ready", etc.

  <router-link class="dialtone-wall__item" to="/components/avatar.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/{frontmatter.thumb}.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">{frontmatter.title}</span>
        <span class="d-badge d-badge d-bgc-green-100">{frontmatter.status}</span>
      </div>
      <div class="dialtone-wall__description">{frontmatter.desc}</div>
    </div>
  </router-link>

-->

<div class="dialtone-wall">
  <router-link class="dialtone-wall__item" to="/components/avatar.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/avatar.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Avatar</span>
        <!-- <span class="d-badge d-badge d-bgc-green-100">Ready</span> -->
        <!-- <span class="d-badge d-badge--purple-500">New</span> -->
      </div>
      <div class="dialtone-wall__description">An avatar is a visual representation of a user or object.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/badge.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/badge.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Badge</span>
      </div>
      <div class="dialtone-wall__description">A badge is a compact UI element providing brief, descriptive information about an element and its surrounding context.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/banner.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/banner.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Banner</span>
      </div>
      <div class="dialtone-wall__description">A banner is a type of Notice, delivering system and engagement messaging.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/breadcrumbs.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/breadcrumbs.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Breadcrumbs</span>
      </div>
      <div class="dialtone-wall__description">Breadcrumbs are links used to provide context for the currently-viewed page and where it is located within the overall site structure.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/button.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/button.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Button</span>
      </div>
      <div class="dialtone-wall__description">A button is an UI element which signals key actions to take an action throughout an app.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/button_group.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/button-group.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Button group</span>
      </div>
      <div class="dialtone-wall__description">Button groups are used to group buttons that have a relationship or similar actions.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/card.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/card.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Card</span>
      </div>
      <div class="dialtone-wall__description">A card contains summary content and actions about a single subject.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/checkbox.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/checkbox.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Checkbox</span>
      </div>
      <div class="dialtone-wall__description">A checkbox is an input control that allows users to select zero, one, or more options from a number of choices.
    </div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/checkbox_group.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/checkbox-group.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Checkbox group</span>
      </div>
      <div class="dialtone-wall__description">Checkbox groups are convenience components for a grouping of related Checkboxes.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/chip.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/chip.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Chip</span>
      </div>
      <div class="dialtone-wall__description">A Chip is a compact UI element that provides brief, descriptive information about an element.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/collapsible.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/collapsible.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Collapsible</span>
      </div>
      <div class="dialtone-wall__description">A collapsible is a component consisting of an interactive anchor that toggled the expandable/collapsible element.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/combobox.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/combobox.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Combobox</span>
      </div>
      <div class="dialtone-wall__description">A combobox is a semantic component that displays an input element combined with a listbox, which enables the user to select items from the list.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/dropdown.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/dropdown.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Dropdown</span>
      </div>
      <div class="dialtone-wall__description">A Dropdown presents a list of options or actions.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/emoji.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/emoji.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Emoji</span>
      </div>
      <div class="dialtone-wall__description">Renders an emoji from a shortcode such as :smile: or unicode character such as 😄.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/emoji_text_wrapper.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/emoji-text-wrapper.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Emoji text wrapper</span>
      </div>
      <div class="dialtone-wall__description">Wrapper to find and replace shortcodes like :smile: or unicode chars such as 😄 with our custom Emojis implementation.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/icon.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/icon.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Icon</span>
      </div>
      <div class="dialtone-wall__description">The Icon component provides a set of glyphs and sizes to provide context your application.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/input.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/input.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Input</span>
      </div>
      <div class="dialtone-wall__description">An input field is an input control that allows users to enter alphanumeric information.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/keyboard_shortcut.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/keyboard-shortcut.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Keyboard shortcut</span>
      </div>
      <div class="dialtone-wall__description">This component displays a visual representation of a keyboard shortcut to the user.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/lazy_show.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/lazy-show.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Lazy show</span>
      </div>
      <div class="dialtone-wall__description">Lazy show is a utility component that prevents its children from being rendered until the first time it is shown.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/link.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/link.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Link</span>
      </div>
      <div class="dialtone-wall__description">A link is a navigational element that can be found on its own, within other text, or directly following content.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/list_item.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/list-item.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">List Item</span>
      </div>
      <div class="dialtone-wall__description">A list item is an element that can be used to represent individual items in a list.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/modal.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/modal.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Modal</span>
      </div>
      <div class="dialtone-wall__description">A modal focuses the user’s attention on a single task or message.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/notice.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/notice.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Notice</span>
      </div>
      <div class="dialtone-wall__description">A notice is an informational and assistive message that appears inline with content.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/pagination.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/pagination.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Pagination</span>
      </div>
      <div class="dialtone-wall__description">Pagination allows you to divide large amounts of content into smaller chunks across multiple pages.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/popover.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/popover.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Popover</span>
      </div>
      <div class="dialtone-wall__description">A Popover displays a content overlay when its anchor element is activated.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/presence.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/presence.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Presence</span>
      </div>
      <div class="dialtone-wall__description">A visual control element indicating the current status of a user</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/radio.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/radio.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Radio</span>
      </div>
      <div class="dialtone-wall__description">A visual control element indicating the current status of a user.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/radio_group.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/radio-group.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Radio group</span>
      </div>
      <div class="dialtone-wall__description">A radio is an input control that allows users to select only one option from a number of choices.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/root_layout.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/root-layout.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Root layout</span>
      </div>
      <div class="dialtone-wall__description">A root layout provides a standardized group of containers to display content at the root level.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/select.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/select.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Select</span>
      </div>
      <div class="dialtone-wall__description">A select menu is an input control that allows users to choose one option from a list.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/skeleton.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/skeleton.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Skeleton</span>
      </div>
      <div class="dialtone-wall__description">Skeleton loader is a non-interactive placeholder that displays a preview of the UI to visually communicate that content is in the process of loading.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/table.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/table.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Table</span>
      </div>
      <div class="dialtone-wall__description">A table is a pattern for organizing data sets</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/tabs.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/tabs.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Tabs</span>
      </div>
      <div class="dialtone-wall__description">Tabs allow users to navigation between grouped content in different views while within the same page context.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/toast.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/toast.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Toast</span>
      </div>
      <div class="dialtone-wall__description">A toast notice, sometimes called a snackbar, is a time-based message that appears based on users' actions.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/toggle.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/toggle.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Toggle</span>
      </div>
      <div class="dialtone-wall__description">A toggle, or "switch", is a button control element that allows the user to make a binary (on/off) selection.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/tooltip.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/tooltip.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Tooltip</span>
      </div>
      <div class="dialtone-wall__description">A tooltip is a floating label that briefly explains an action, function, or an element.</div>
    </div>
  </router-link>
  <router-link class="dialtone-wall__item" to="/components/validation_messages.html">
    <div class="dialtone-wall__image"><img class="dialtone-wall__thumb" alt="" :src="$withBase('/assets/images/components/validation-messages.png')"></div>
    <div class="dialtone-wall__details">
      <div class="dialtone-wall__title">
        <span class="dialtone-wall__title-text">Validation messages</span>
      </div>
      <div class="dialtone-wall__description">Validation messages are used to convey information to the user about the current state of the input element. </div>
    </div>
  </router-link>
</div>
