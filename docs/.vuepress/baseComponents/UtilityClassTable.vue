<template>
  <table class="d-table">
    <thead>
      <tr>
        <th class="d-w25p" scope="col">Class</th>
        <th scope="col">Output</th>
      </tr>
    </thead>
    <slot name="content" />
  </table>
</template>

<script>
export default {
  name: "UtilityClassTable",
  props: {
    dataFile: {
      type: String,
    }
  },
  data() {
    return {
      classes: null
    }
  },
  beforeMount() {
    if(!this.dataFile) return;

    import(`../_data/${this.dataFile}.json`).then((module) => {
      this.classes = module[this.dataFile]
    })
  }
}
</script>

<style scoped>

</style>
