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

Use an en dash (–) with no surrounding spaces.

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

<table class="d-table dialtone-doc-table d-body-base">
  <thead>
    <tr>
      <th class="d-w25p" scope="col">
        Format
      </th>
      <th scope="col">
        Structure
      </th>
      <th scope="col">
        Example
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Less than a minute</th>
      <td></td>
      <td>Just now</td>
    </tr>
    <tr>
      <th scope="row">Less than 60 minutes</th>
      <td><code class="d-fs-100">[NN] minutes ago</code></td>
      <td>10 minutes ago</td>
    </tr>
    <tr>
      <th scope="row">Less than 24 hours</th>
      <td><code class="d-fs-100">[NN] hours ago</code></td>
      <td>5 hours ago</td>
    </tr>
    <tr>
      <th scope="row">Yesterday</th>
      <td>Yesterday</td>
    </tr>
  </tbody>
</table>

## Absolute Timestamps

<table class="d-table dialtone-doc-table d-body-base">
  <thead>
    <tr>
      <th class="d-w25p" scope="col">
        Format
      </th>
      <th scope="col">
        Structure
      </th>
      <th scope="col">
        Example
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Less than a year </th>
      <td><code class="d-fs-100">[Day of week], [Mon (abbrev)] [Date]</code></td>
      <td>
        <ul class="d-ls-reset">
          <li>Wednesday, September 1</li>
          <li>Wed, Sep 1</li>
          <li>Wednesday, Sep 1 at 10:45 AM</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Greater than a year</th>
      <td><code class="d-fs-100">[Mon (abbrev)] [Date], [Year]</code></td>
      <td>
        <ul class="d-ls-reset">
          <li>September 1, 2020</li>
          <li>Sep 1, 2020</li>
          <li>Sep 1, 2020 at 11:11 PM</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Contexts that need more precision, use numerical values</th>
      <td><code class="d-fs-100">NNh NNm ago</code></td>
      <td>
        <ul class="d-ls-reset">
          <li>1h 7m ago</li>
          <li>25h 34m ago</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Duration

Durations are represented as **DD:HH:MM:SS** (i.e. 1:04:05:30).

<script setup>
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
