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
          <svg class="d-svg d-svg--system d-svg--size32" viewBox="0 0 24 24" v-html="code.day"></svg>
        </td>
        <td class="d-ta-center d-py4">
          <svg class="d-svg d-svg--system d-svg--size32" viewBox="0 0 24 24" v-html="code.night"></svg>
        </td>
        <td class="d-fs14">{{ code.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {codes} from '../../_data/svg-weather.json';

export default {
  name: "WeatherCodesTable",
  data() {
    return {
      codes: null,
      dayIcon: null,
    };
  },
  methods: {
    async importSvgs() {
      this.codes = await Promise.all(codes.map(async (code) => {
        const dayIcon = await import(`../../../lib/build/svg/weather/${code.day}.svg?raw`);
        const nightIcon = await import(`../../../lib/build/svg/weather/${code.night}.svg?raw`);
        return {
          ...code,
          day: dayIcon.default.replace(/<\/?svg.*>/g, ''),
          night: nightIcon.default.replace(/<\/?svg.*>/g, '')
        };
      }))
    }
  },
  async beforeMount() {
    const importedModule = await import('../../_data/svg-weather.json');
    this.codes = importedModule.codes;
    this.importSvgs();
  }
}
</script>

<style scoped>

</style>
