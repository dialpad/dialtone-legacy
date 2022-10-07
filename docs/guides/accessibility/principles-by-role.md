---
title: Accessibility Principles by Role
desc: A framework outlining how your role can address accessibility and Inclusive Design.
---

## Product Management

Product managers can set the tone early in a project's lifecycle, ensuring the team knows their responsibilities and accountability to building accessible products.

1. Be aware of **each role's** high-level accessibility principles.
1. Ensure each role on your team is aware of these principles and keep them in mind from the start: [Content](#content), [Design](#design), and [Engineering](#engineering).
1. Build **accessibility into project workflows** every step of the way, rather than as a retrofit exercise.
1. Learn **Accessibility basics** to understand what makes your team empowered to deliver accessible products and services.
1. Understand the **diversity of users** to better consider how anyone can get the most out of your product.
1. Consult an **accessibility subject matter expert** to review.

## Content

Writing accessibly ensures your content is easier for everyone to read.

1. **Plain Language.** Can you quickly understand the main points of the content?
1. **Scannability.** Can you scan the page without significantly pausing through long passages?
1. **Images.** Do your images have descriptive alt text?
1. **Links.** Do link sufficiently describe its destination?
1. **Information Architecture.** Are the application’s parts organized such that any can navigate easily?

## Design

Accessibility is usability for everyone, regardless of ability, situation, or circumstance. Treat accessibility as a core principle of Product Design.

1. Adopt a mentality of **Inclusive Design**.
1. Is there sufficient **contrast** between foreground and background content?
1. Is textual information **easy to read and parse**?
1. Are **navigation shortcuts** available for keyboard and screen readers to reach key regions?
1. Familiarize yourself with **assistive technologies**. These include screen readers, screen magnification, ergonomic keyboards, or even zoom capabilities in browsers.
1. Do your designs imply a **logical tab order** for those using a keyboard to navigate throughout.
1. Are all interactive elements reachable through the tab key, and reflect a **perceivable focus indicator**?
1. Do your designs reflect a **perceivable focus indicator** for interactive parts?
1. When a view changes significantly, is it clear to the user **where focus has moved to** (independent of a perceived focus order)?
1. Can any user **understand and fill out** forms? Are they as simple as possible and require only what’s needed for task completion?
1. Is imagery easily distinguished as **meaningful content or decorative**?
1. Is **content understandable** for content associated with images and icons?
1. Are **data visualizations** easy to grasp?
1. Are **touch targets** large enough and easy to reach?
1. Can a **screen reader access** all functionality and content?

## Engineering

Pretty much everything above plus…

1. Do **heading elements** (e.g. `<h1>` through `<h6>`) accurately reflect a logical hierarchy of content and features?
1. Are **semantic HTML elements** being used appropriately, and extended where appropriate with ARIA attributes and roles?
1. Does your **automated accessibility testing** tools provide accurate results?
