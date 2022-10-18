---
title: Currency
desc:
---

- Don’t include the cents digits (“.00”) for a whole dollar amount.
- Always put the dollar sign before the amount for USD and CAD.
- Only include the currency if it’s needed for clarity. Currency always follows the amount.

<dialtone-usage>
<template #do>

- $25 USD
- $47.95 CAD

</template>
<template #dont>

- $25.00 USD
- CAD 47.95$

</template>
</dialtone-usage>

<script setup>
  import DialtoneUsage from '@baseComponents/DialtoneUsage.vue';
</script>
