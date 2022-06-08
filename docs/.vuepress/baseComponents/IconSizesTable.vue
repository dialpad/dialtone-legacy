<template>
  <table class="d-table dialtone-doc-table">
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
          <component :class="size.class" :is="exampleIcon"></component>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {defineAsyncComponent} from "vue";

export default {
  name: "IconSizesTable",
  data: () => ({
    iconSizes: [],
  }),
  async created() {
    const module = await import('../../_data/icons-sizes.json')
    this.iconSizes = module.default;
    this.exampleIcon = defineAsyncComponent(() => import('../../../lib/dist/vue/icons/IconPhone.vue'));
  }
}
</script>

<style scoped>

</style>
