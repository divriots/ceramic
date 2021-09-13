<script>
  export default {
  props: ['plans', 'features', 'groups','colSelectClass', 'colSelectIdx',],
  methods: {
    findFeature(plan, feature) {
      const _feature = plan.additionalFeatures.find(
        (f) => f.label === feature.label
      );
      if (_feature)
        return (
          _feature.restriction ||
          `<svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`
        );
      if (plan.inherits) return this.findFeature(plan.inherits, feature);
      return '';
    },
  }
};
</script>
<template>
  <table class="w-full text-white">
    <colgroup>
      <col />
      <col v-for="i in plans.length" :class="`${ i === colSelectIdx?colSelectClass:''}`" />
    </colgroup>
    <thead>
      <tr>
        <th scope="col" class="text-3xl text-left">
          All our <span class="text-primary">features</span>
        </th>
        <th scope="col" v-for="(plan, pIdx) in plans" :key="pIdx" class="p-4 align-text-top">
          <span class="pricing-grid text-left">
            <span class="text-xl">{{ plan.title }}</span>
          <span class="font-normal">
            <template v-if="plan.price.symbol">{{ plan.price.symbol }}{{ plan.price.value }} / mo</template>
            <template v-else>{{ plan.price.value }}</template>
          </span>
          <component :is="plan.action.url?'a':'span'" class="font-normal btn-primary mt-2 text-md whitespace-nowrap"
            :href="plan.action.url">{{
            plan.action.label
            }}</component>
          </span>
        </th>
      </tr>
    </thead>
    <tbody v-for="([, group], idx) of Object.entries(groups)" :key="idx">
      <tr class="border-gray-light border-t-1">
        <th :class="`text-xl text-left pt-8 pb-6 ${
            idx % 3 === 0
              ? 'text-orange'
              : idx % 3 === 1
              ? 'text-blue'
              : 'text-green'
          }`" v-html="group"></th>
        <td v-for="(plan, pIdx) in plans" :key="pIdx"></td>
      </tr>
      <tr v-for="[k, feature] in Object.entries(features).filter(
          ([k, v]) => v.group === group
        )" :key="k">
        <th scope="row" class="text-left font-normal" v-html="feature.label"></th>
        <td align="center" class="p-4" v-for="(plan, pIdx) in plans" :key="pIdx" v-html="findFeature(plan, feature)">
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td></td>
        <td scope="col" v-for="(plan, pIdx) in plans" :key="pIdx" class="p-4 align-text-top">
          <component :is="plan.action.url?'a':'span'" class="btn-primary mt-2 text-md whitespace-nowrap"
            :href="plan.action.url">{{
            plan.action.label
            }}</component>
        </td>
      </tr>
    </tfoot>
  </table>
</template>
<style scoped>
  table {
    border-collapse: collapse;
  }

  .pricing-grid {
    display: inline-grid;
    grid-template-rows: auto minmax(0, auto) 1fr;
  }
</style>