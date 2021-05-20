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
        <th scope="col" class="text-3xl text-left">All our <span class="text-primary">features</span></th>
        <th scope="col" v-for="(plan,pIdx) in plans" key="pIdx">
          <span class="inline-flex flex-col text-left">
          {{ plan.title }}
          <a class="action py-2 text-primary text-md whitespace-nowrap"
            :href="plan.action.url">{{plan.action.label}}</a>
          </span>
        </th>
      </tr>
    </thead>
    <tbody v-for="([,group], idx) of Object.entries(groups)">
      <tr class="border-gray-light border-t-1" scope="row">
        <td scope="row" colspan="4"
          :class="`text-xl text-left pt-8 pb-6 ${idx%3===0?'text-orange':idx%3===1?'text-blue':'text-green'}`"
          v-html="group">
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