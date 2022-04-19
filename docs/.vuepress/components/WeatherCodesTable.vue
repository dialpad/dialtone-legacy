<template>
  <div class="d-mt64 d-stack16">
    <h2 id="weather-codes" class="d-headline24 d-fl1" tabindex="-1">
      <a class="header-anchor" href="#weather-codes">#</a>
      Weather Codes
    </h2>
    <table class="d-table">
      <thead>
      <tr>
        <th class="d-w10p" scope="col">Code</th>
        <th class="d-w10p d-ta-center" scope="col">Day</th>
        <th class="d-w10p d-ta-center" scope="col">Night</th>
        <th scope="col">Definition</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="code in codes">
        <th scope="row">{{ code.code }}</th>
        <td class="d-ta-center d-py4">
          <component :is="importIconComponent(code.day)"></component>
        </td>
        <td class="d-ta-center d-py4">
          <component :is="importIconComponent(code.night)"></component>
        </td>
        <td class="d-fs14">{{ code.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue';

export default {
  name: "WeatherCodesTable",
  data() {
    return {
      codes: null,
    };
  },
  methods: {
    importIconComponent(icon) {
      return defineAsyncComponent(() => import(`../../../lib/dist/vue/icons/${icon}.vue`));
    }
  },
  async beforeMount() {
    const importedModule = await import('../../_data/svg-weather.json');
    this.codes = importedModule.codes;
  }
}
</script>

<style scoped>

</style>
