<template>
  <div v-if="presence" class="d-presence" data-qa="leftbar-contact-presence">
    <div
      class="d-presence__inner"
      :class="{
        'd-presence__inner--active': presence === 'active',
        'd-presence__inner--away': presence === 'away',
        'd-presence__inner--busy': presence === 'busy',
        'd-presence__inner--offline': presence === 'offline',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'ExamplePresence',
  props: {
    presence: {
      type: String,
      default: '',
    },
  },
};
</script>
