<template>
  <table class="d-table dialtone-doc-table">
    <thead>
      <tr>
        <th
          class="d-w40p"
          scope="col"
        >
          Class
        </th>
        <th
          class="d-w30p"
          scope="col"
        >
          Applies to
        </th>
        <th scope="col">
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="i in classes"
        :key="i.class"
      >
        <th
          class="d-ff-mono d-fc-purple d-fw-normal d-fs12"
          scope="row"
        >
          .{{ i.class }}
        </th>
        <td class="d-ff-mono d-fc-orange d-fs12">
          <span class="code-example--inline" v-html="i.applies"/>
        </td>
        <td class="d-fs12">
          {{ i.description }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ComponentClassTable',
  props: {
    componentName: {
      type: String,
      required: true,
    },
  },

  data () {
    return {
      classes: null,
    };
  },

  beforeMount () {
    import(`../../_data/${this.componentName}.json`).then((module) => {
      this.classes = module.classes;
    });
  },
};
</script>

<style scoped>

</style>
