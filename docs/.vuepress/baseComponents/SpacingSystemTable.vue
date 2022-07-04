<template>
  <div class="d-h464 d-of-y-scroll d-mt16">
    <table class="d-table dialtone-doc-table">
      <thead>
        <tr>
          <th
            class="d-w40p"
            scope="col"
          >
            Value
          </th>
          <th
            class="d-w30p"
            scope="col"
          >
            Pixel Equivalent
          </th>
          <th scope="col">
            Actual output
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{ value: val, output } in values"
          :key="val"
        >
          <th
            class="d-ff-mono d-fc-purple d-fw-normal d-fs12"
            scope="row"
          >
            <span v-if="kind === 'css'">var(--su{{ val }})</span>
            <span v-else>@su{{ val }}</span>
          </th>
          <td class="d-ff-mono d-fc-orange d-fs12">
            {{ val }}px
          </td>
          <td class="d-ff-mono d-fc-orange d-fs12">
            {{ output }}
          </td>
        </tr>
      </tbody>
      <tbody v-if="kind === 'css'">
        <tr
          v-for="{ value: val, output } in negativeValues"
          :key="val"
        >
          <th
            class="d-ff-mono d-fc-purple d-fw-normal d-fs12"
            scope="row"
          >
            var(--sun{{ val }})
          </th>
          <td class="d-ff-mono d-fc-orange d-fs12">
            -{{ val }}px
          </td>
          <td class="d-ff-mono d-fc-orange d-fs12">
            -{{ output }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SpacingSystemTable',
  props: {
    kind: {
      type: String,
      required: true,
      validator: (_kind) => {
        return ['css', 'less'].includes(_kind);
      },
    },
  },

  data: () => ({
    values: [],
  }),

  computed: {
    negativeValues () {
      return this.values.filter(({ value: val, output }) => val !== '0');
    },
  },

  async created () {
    const module = await import('../../_data/spacing.json');
    this.values = module.values;
  },
};
</script>
