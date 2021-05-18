<script>
  import {Free, Pro, Enterprise, groups, features} from '../../config/src/plans';
  import Price from '../../price/src/index.vue';

  export default {
    data(){ return {plans: [Free,Pro,Enterprise], features , groups}},
    methods:{
      findFeature(plan, feature){
        const _feature = plan.additionalFeatures.find(f=>f.label === feature.label) 
        if(_feature)
          return _feature.restriction || `<svg class="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
        if(plan.inherits)
          return this.findFeature(plan.inherits, feature);
        return '';
      }
    },
    setup(){return { Price}},
  };
</script>
<template>
  <table class="w-full">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col" v-for="(plan,pIdx) in plans" key="pIdx">
          {{ plan.title }}
          <a class="btn block text-primary text-md whitespace-nowrap" :href="plan.action.url">{{plan.action.label}}</a>
        </th>
      </tr>
    </thead>
    <tbody v-for="group in groups">
      <tr class="border-gray-light border-t-1" scope="row">
        <td scope="row" colspan="4" class="text-xl text-left text-primary pt-8 pb-6" v-html="group">
        </td>
      </tr>
      <tr v-for="[k,feature] in Object.entries(features).filter(([k,v])=>v.group===group)" key="k">
        <th scope="row" class="text-left font-normal" v-html="feature.label"></th>
        <td align="center" class="p-4" v-for="(plan,pIdx) in plans" key="pIdx" v-html="findFeature(plan,feature)">
        </td>
      </tr>
    </tbody>
  </table>
</template>