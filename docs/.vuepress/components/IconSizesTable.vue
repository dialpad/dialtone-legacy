<template>
  <table class="d-table">
    <thead>
    <tr>
      <th scope="col">Size</th>
      <th scope="col" class="d-w25p">Variable</th>
      <th scope="col" class="d-w25p">Class</th>
      <th scope="col" class="d-w35p">Examples</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="size in iconSizes">
      <th scope="row">{{ size.size }}</th>
      <td class="d-ff-mono d-fc-orange d-fs12">{{ size.variable }}</td>
      <td class="d-ff-mono d-fc-orange d-fs12">.{{ size.class }}</td>
      <td>
        <div class="d-d-flex d-ai-center d-mxn2">
          <svg class="d-svg d-svg--system" aria-hidden="true" :class="size.class" v-html="exampleSvg" viewBox="0 0 24 24"></svg>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "IconSizesTable",
  data: () => ({
    iconSizes: [],
    exampleSvg: null
  }),
  async created() {
    const module = await import('../../_data/icons-sizes.json')
    this.iconSizes = module.default;

    const svgModule = await import('/assets/svg/system/phone.svg?raw');
    this.exampleSvg = svgModule.default;
    this.exampleSvg = this.exampleSvg.replace(/<\/?svg.*>/g, '')
  }
}
</script>

<style scoped>

</style>
