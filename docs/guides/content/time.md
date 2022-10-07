---
title: Time
desc: Depending on context, dates may need to be displayed to varying levels of specificity.
next:
  text: Accessibility - Fundamentals
  link: /guides/accessibility/fundamentals.html
---

Times are represented as **HH:MM:SS AM/PM**.

- We use a 12-hour clock.
- Always use a space before AM and PM.
- Include seconds only when appropriate and useful to customers

<dialtone-usage>
<template #do>

- 12:45 AM
- 12:45:30 PM

</template>
<template #dont>

- 12:45AM
- 12:45:30PM
- 12:45 am
- 12:45:30 pm

</template>
</dialtone-usage>

## Time ranges

Use an en dash (–) with no spaces. Mac: <kbd title="option dash">⌥ + -</kbd>; Windows: <kbd title="control dash">⌃ + -</kbd>.

- Always include AM or PM for the second time.
- Only include AM or PM for the first time if it’s different from the second one:

<dialtone-usage>
<template #do>

- 5:00–6:00 PM
- 11:30 AM–4:00 PM

</template>
<template #dont>

- 5:00 pm–6:00 PM

</template>
</dialtone-usage>

## Time zones

- Don’t include an S (for Standard) or D (for Daylight)
- Do include a space between AM/PM and the time zone

<dialtone-usage>
<template #do>

- 3:00 PM PT

</template>
<template #dont>

- 3:00 PM PST

</template>
</dialtone-usage>

## Relative Timestamps

Relative timestamps may change based on context. When using relative timestamps, aim to include the definite time as additional information, like in a tool tip.

- Spell out **minutes**, **seconds**, and **hours** whenever possible
- If necessary, abbreviate:
  - hours - hr
  - minutes - min
  - seconds - s

<dl class="dialtone-definition">
  <dt>Less than a minute</dt>
  <dd>Just now</dd>
  <dt>Less than 60 minutes <code>NN minutes ago</code></dt>
  <dd>10 minutes ago</dd>
  <dt>Less than 24 hours <code>NN hours ago</code></dt>
  <dd>5 hours ago</dd>
  <dt>Yesterday</dt>
  <dd>Yesterday</dd>
</dl>

## Absolute Timestamps

<dl class="dialtone-definition">
  <dt>Less than a year <code>[Day of week], [Mon (abbrev)] [Date]</code></dt>
  <dd>Wednesday, September 1</dd>
  <dd>Wed, Sep 1</dd>
  <dd>Wednesday, Sep 1 at 10:45 AM</dd>
  <dt>Greater than a year <code>[Mon (abbrev)] [Date], [Year]</code></dt>
  <dd>September 1, 2020</dd>
  <dd>Sep 1, 2020</dd>
  <dd>Sep 1, 2020 at 11:11 PM</dd>
  <dt>Contexts that need more precision, use numerical values: <code>NNh NNm ago</code></dt>
  <dd>1h 7m ago</dd>
  <dd>25h 34m ago</dd>
</dl>

## Duration

Durations are represented as **DD:HH:MM:SS** (i.e. 1:04:05:30).

<script setup>
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
