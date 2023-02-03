<template>
  <h3
    v-if="slots"
    class="d-docsite--header-3"
  >
    Slots
  </h3>
  <table
    v-if="slots"
    class="d-table dialtone-doc-table d-wmn512"
  >
    <thead>
      <tr>
        <th
          scope="col"
        >
          Name
        </th>
        <th
          scope="col"
          class="vue-api-table"
        >
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="({ name, description }) in slots"
        :key="name"
      >
        <th
          scope="row"
          class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"
          v-text="name"
        />
        <td class="d-ff-mono d-fs-100 vue-api-table">
          <markdown-render :markdown="description" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import ComponentDocs from '../../../node_modules/@dialpad/dialtone-vue/dist/component-documentation.json';
import MarkdownRender from '@baseComponents/MarkdownRender.vue';

const props = defineProps({
  componentName: {
    type: String,
    required: true,
  },
});

const slots = ComponentDocs.find(f => f.displayName.toLowerCase() === props.componentName.toLowerCase())
  ?.slots?.map((item) => {
    return {
      name: item.name,
      description: item.description,
    };
  });
</script>
