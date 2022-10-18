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

<table class="d-table dialtone-doc-table d-body-base">
  <thead>
    <tr>
      <th class="d-w25p" scope="col">
        Format
      </th>
      <th scope="col">
        Example
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Long date</th>
      <td>Thursday, September 2, 2022</td>
    </tr>
    <tr>
      <th scope="row">Medium date</th>
      <td>September 2, 2022</td>
    </tr>
    <tr>
      <th scope="row">Short date</th>
      <td>Thu, Sep 2, 2022<br>Sep 2, 2022</td>
    </tr>
    <tr>
      <th scope="row">If you need to leave out the year</th>
      <td>September 2<br>Sep 2</td>
    </tr>
  </tbody>
</table>

## Abbreviating dates

If space isn’t an issue, spell out the full day of the week and month. When space is constrained, abbreviate days of the week and months.

<table class="d-table dialtone-doc-table d-body-base">
  <thead>
    <tr>
      <th class="d-w25p" scope="col">
        Format
      </th>
      <th scope="col">
        Example
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Days of the week</th>
      <td>
        <ul class="d-ls-reset">
          <li>Monday - Mon</li>
          <li>Tuesday - Tue</li>
          <li>Wednesday - Wed</li>
          <li>Thursday - Thu</li>
          <li>Friday - Fri</li>
          <li>Saturday - Sat</li>
          <li>Sunday - Sun</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Months</th>
      <td>
        <ul class="d-ls-reset">
          <li>January - Jan</li>
          <li>February - Feb</li>
          <li>March - Mar</li>
          <li>April - Apr</li>
          <li>May</li>
          <li>June - Jun</li>
          <li>July - Jul</li>
          <li>August - Aug</li>
          <li>September - Sep</li>
          <li>October - Oct</li>
          <li>November - Nov</li>
          <li>December - Dec</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

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
