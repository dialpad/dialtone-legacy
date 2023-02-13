<template>
  <h3
    class="d-docsite--header-3"
    v-text="categoryName"
  />
  <table
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
        <th
          v-if="withDefault"
          scope="col"
        >
          Default
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="({ name, description, type, defaultValue }) in sortedTableDataByName"
        :key="name"
      >
        <th
          scope="row"
          class="d-ff-mono d-fc-purple-400 d-fw-normal d-fs-100"
          v-text="name"
        />
        <td
          class="d-ff-mono d-fs-100 vue-api-table"
        >
          <div
            v-if="description"
            class="d-d-grid d-gg16 d-g-cols1"
          >
            <markdown-render :markdown="description" />
            <span v-if="type">
              <dt-badge>{{ type }}</dt-badge>
            </span>
          </div>
        </td>
        <td
          v-if="withDefault"
          class="d-fs-100"
        >
          <dt-badge v-if="defaultValue">
            {{ defaultValue }}
          </dt-badge>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import MarkdownRender from '@baseComponents/MarkdownRender.vue';
import { computed } from 'vue';

const props = defineProps({
  categoryName: {
    type: String,
    required: true,
  },
  tableData: {
    type: Object,
    required: true,
  },
});

// boolean that determines if the tableData object has a default slot value to add that column in the table
const withDefault = computed(() => {
  return props.tableData.some((item) => item.defaultValue);
});

const sortedTableDataByName = computed(() => {
  if (!props.tableData) return null;

  return sortDataByKey([...props.tableData], 'name');
});

const sortDataByKey = (data, key) => {
  return data.sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  });
};
</script>
