<template>
  <div>{{ test }}</div>
</template>

<script setup>
const props = defineProps({
  test: String
});
</script>

<style lang="less" scoped>
  div {
    background-color: black;
  }
</style>
