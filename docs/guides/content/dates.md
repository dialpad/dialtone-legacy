---
title: Dates
desc: Depending on context, dates may need to be displayed to varying levels of specificity.
---

When deciding which format to use, consider how much information users need in the context of their journey.

When written out, dates are represented in this order **[Day of week], [Month] [Date], [Year]**.

- Don’t use ordinal numbers (1st, 2nd, 3rd, 4th, etc.)
- Use commas to separate the day of the week, month and numerical day, and year.
- Include all 4 digits for the year

## Formats by length

<dl class="dialtone-definition">
  <dt>Long date</dt>
  <dd>Thursday, September 2, 2022</dd>
  <dt>Medium date</dt>
  <dd>September 2, 2022</dd>
  <dt>Short date</dt>
  <dd>Thu, Sep 2, 2022</dd>
  <dd>Sep 2, 2022</dd>
  <dt>If you need to leave out the year</dt>
  <dd>September 2</dd>
  <dd>Sep 2</dd>
</dl>

## Abbreviating dates

If space isn’t an issue, spell out the full day of the week and month. When space is constrained, abbreviate days of the week and months.

<dl class="dialtone-definition">
  <dt>Abbreviated days of the week</dt>
  <dd>Monday - Mon</dd>
  <dd>Tuesday - Tue</dd>
  <dd>Wednesday - Wed</dd>
  <dd>Thursday - Thu</dd>
  <dd>Friday - Fri</dd>
  <dd>Saturday - Sat</dd>
  <dd>Sunday - Sun</dd>
</dl>

<dl class="dialtone-definition">
  <dt>Abbreviated months</dt>
  <dd>January - Jan</dd>
  <dd>February - Feb</dd>
  <dd>March - Mar</dd>
  <dd>April - Apr</dd>
  <dd>May</dd>
  <dd>June - Jun</dd>
  <dd>July - Jul</dd>
  <dd>August - Aug</dd>
  <dd>September - Sep</dd>
  <dd>October - Oct</dd>
  <dd>November - Nov</dd>
  <dd>December - Dec</dd>
</dl>

## Date and time

To represent a date and time, use **[Day of week], [Month] [Date], [Year] at HH:MM:SS AM/PM**:

<dl class="dialtone-definition">
  <dt>Examples</dt>
  <dd>Thursday, September 2, 2022 at 12:45 PM</dd>
  <dd>September 2 at 12:45 PM</dd>
  <dd>Sep 2 at 12:45 PM</dd>
</dl>

## Numerical Dates

Avoid writing dates numerically to avoid confusion. Different countries use different formats for this scenario, and we don’t yet localize dates and times.

For cases when dates are represented in a table or in extremely compact UIs, use **MM/DD/YY**.

<dl class="dialtone-definition">
  <dt>Examples</dt>
  <dd>09/02/22</dd>
</dl>

## Usage Examples

<dialtone-usage>
<template #do>

- November 2
- November 2, 2022
- 11/02/22

</template>
<template #dont>

- November 2nd
- November 2 2022
- 11022022

</template>
</dialtone-usage>

<script setup>
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
