<template>
  <dt-button
    importance="clear"
    kind="muted"
  >
    <template #icon>
      <dt-icon
        class="d-fc-success"
        name="check-circle"
        size="300"
      />
    </template>
    Available
  </dt-button>
  <dt-button
    importance="clear"
    kind="muted"
  >
    <template #icon>
      <dt-icon
        class="d-fc-warning"
        name="tools"
        size="300"
      />
    </template>
    Work in progress
  </dt-button>
  <dt-button
    importance="clear"
    kind="muted"
  >
    <template #icon>
      <dt-icon
        class="d-fc-error"
        name="box-select"
        size="300"
      />
    </template>
    Not implemented yet
  </dt-button>
  <table class="d-table">
    <thead>
      <tr>
        <th scope="col">
          Component
        </th>
        <th scope="col">
          CSS
        </th>
        <th scope="col">
          Vue
        </th>
        <th scope="col">
          Figma
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="component in componentsStatus"
        :key="component.name"
      >
        <th scope="row">
          <a
            class="d-link"
            :href="component.url"
          >
            {{ component.name }}
          </a>
        </th>
        <td>
          <dt-icon
            :class="statusColor[component.css]"
            :name="statusIcon[component.css]"
          />
        </td>
        <td>
          <dt-icon
            :class="statusColor[component.vue]"
            :name="statusIcon[component.vue]"
          />
        </td>
        <td>
          <dt-icon
            :class="statusColor[component.figma]"
            :name="statusIcon[component.figma]"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  componentsStatus: {
    type: Array,
    default: () => [],
  },
});
const statusIcon = {
  DONE: 'check-circle',
  WIP: 'tools',
  NIY: 'box-select',
};
const statusColor = {
  DONE: 'd-fc-success',
  WIP: 'd-fc-warning',
  NIY: 'd-fc-error',
};
</script>
