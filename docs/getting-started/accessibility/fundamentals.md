---
title: Fundamentals
prev:
  text: Building Locally
  link: /getting-started/building-locally.html
---

## Overview

We are committed to experiences and products that are usable by everyone. Because “everyone” is a lot of people reflecting a variety of backgrounds, abilities, and circumstances, we believe in applying thoughtful and inclusive design and development practices.

Dialpad strives to maintain  **WCAG 2.1 AA** compliance in our digital products.

Everyone benefits when things are designed accessibly. Simply put: building products for accessibility is simply building products for better usability. Considering  **1 in 4** US adults -- that’s 61 million people! -- live with a permanent disability and many more will have temporary or situational throughout their lifetime, accessibility isn’t for just some people. It benefits everyone.

<figure>
<Markdown>
![Accessibility illustration: permanent, temporary and situational disabilities. For touch, a person could have one arm, an arm injury, or be a new parent holding an infant. For sight, a person could be blind, have cataracts, or be a distracted driver. For hearing, the person might be deaf, have an ear infection, or be a bartender in a loud bar. When speaking, a person might be non-verbal, have laryngitis, or speak with a heavy accent.](/assets/images/accessibility-graphic.png)
</Markdown>
<figcaption>
<Markdown>
[Microsoft Inclusive Design](https://www.microsoft.com/design/inclusive/)
</Markdown>
</figcaption>
</figure>

As we consider the entire spectrum of possibilities, the benefits to the people we are designing for goes up dramatically. Accessible design is usable design, for more people in more circumstances.

## Principles

Building inclusive product experiences can be boiled down to the  **<abbr title="Perceivable Operable Understandable Robust">P.O.U.R</abbr>.** principles:

1. Perceivable.
2. Operable.
3. Understandable.
4. Robust.

### Perceivable

The interface and its content is designed and implemented in such a way that it works across a variety of users agents and assistive technologies.

#### Examples

- The handling of media content like video, audio and imagery.
- The handling of text alternatives through things like captioning and sign language.
- The handling of color and contrast.
- The control of text size and audio controls.
- The handling content interactions i.e. hover and focus states.

### Operable

Users are able to interact with and navigate the interface and its content.

#### Examples

- Keyboard operability.
- Time allowance.
- Seizures and other involuntary physical reactions.
- Navigation through things like focus order, page titles, links, headings and labels.
- Input methods like touch targets sizing, alternative input methods.

### Understandable

The interface and its content use plain language that’s easy to comprehend. Even if users can perceive and navigate content, what if they can’t actually understand the information?

#### Examples

- Predictable and consistent navigation.
- Use of language such as abbreviations, jargon, reading levels.
- Predictable and consistent actionable components.
- Feedback and error handling.
- Help, such as contextual help and error prevention.

### Robust

The interface and its content is designed and implemented in such a way that it works across a variety of users agents and assistive technologies.

#### Examples

- Parsing and generally ‘clean’ code like proper heading hierarchy, no duplicate attributes, complete start and end tags for elements.
- Name, role and value.
- Status messages, sending messaging to the user without interrupting their workflow by giving focus to an element. e.g. “added to cart” while shopping online should act as a message and not a redirection of activity and focus for the user.

## Types of Assistive Technology

“Assistive technology” is a generic term that describes tools used by people with disabilities to accomplish tasks. Here are some examples:

- **Screen readers:** Software used by blind or visually impaired people to read the content of the computer screen. Examples include JAWS for Windows, NVDA, or Voiceover for Mac.
- **Screen magnification software:** Allows users to control the size of text and/or graphics on the screen. Unlike using a zoom feature, these applications allow the user to have the ability to see the enlarged text in relation to the rest of the screen. This is done by emulating a handheld magnifier over the screen.
- **Text readers:** Software used by people with various forms of learning disabilities that affect their ability to read text. This software will read text with a synthesized voice and may have a highlighter to emphasize the word being spoken. These applications do not read things such as menus or types of elements - they only read the text.
- **Speech input software:** Provides people with difficulty in typing an alternate way to type text and also control the computer. Users can give the system some limited commands to perform mouse actions. Users can tell the system to click a link or a button or use a menu item. Examples would be Dragon Naturally Speaking for Windows or Mac. Please note both Windows and Mac have some speech recognition utilities, but they cannot be used to browse the web.
- **Alternative input devices:** Some users may not be able to use a mouse or keyboard to work on a computer. These people can use various forms of devices, such as:
  - **Head pointers:** A stick or object mounted directly on the user’s head that can be used to push keys on the keyboard. This device is used by individuals who have no use of their hands.
  - **Motion tracking or eye tracking:** This can include devices that watch a target or even the eyes of the user to interpret where the user wants to place the mouse pointer and moves it for the user.
  - **Single switch entry devices:** These kinds of devices can be used with other alternative input devices or by themselves. These are typically used with on-screen keyboards. The on-screen keyboard has a cursor move across the keys, and when the key the user wants is in focus, the user will click the switch. This can also work on a webpage: the cursor can move through the webpage, and if the user wants to click on a link or button when that link or button is in focus, the user can activate the switch.

### Additional Resources

- [Apple - Voiceover/keyboard shortcuts for OS X](https://www.apple.com/voiceover/info/guide/_1131.html)
- [Deque - Accessibility Testing Tools](https://www.deque.com/axe/)
- [Deque University - Web Accessibility Training and Courses](https://dequeuniversity.com/)
- [MDN - Developer Guides](https://developer.mozilla.org/en-US/docs/Web/Guide)
- [Microsoft - Narrator keyboard commands for Windows](https://support.microsoft.com/en-us/windows/appendix-b-narrator-keyboard-commands-and-touch-gestures-8bdab3f4-b3e9-4554-7f28-8b15bd37410a)
- [Pa11y](https://pa11y.org/)
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
- [WebAim - Constructing a POUR Website](https://webaim.org/articles/pour/)

### Sources

- [CDC - Disability Impacts All of Us Infographic](https://www.cdc.gov/ncbddd/disabilityandhealth/infographic-disability-impacts-all.html)
- [Berkeley - Types of Assistive Technology](https://webaccess.berkeley.edu/resources/assistive-technology)
- [UXcellence - Designing for Accessibility: An Introduction](https://uxcellence.com/2018/accessible-design-intro)

<script setup>
  import Markdown from "@baseComponents/Markdown.vue";
</script>
