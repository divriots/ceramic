<script>
  import Feature from './feature.vue';
import Group from './group.vue';
import featureGroups from '../../config/src/features';

export default {
    data() {return { featureGroups }},
    setup(){return { Group,Feature }}
  };
</script>
<template>
  <section class="bg-black-divriots text-white p-10">
    <component :is="Group" v-for="(featureGroup,idx) in featureGroups" :key="featureGroup.group"
      :title="featureGroup.title">
      <component :is="Feature" v-for="feature of featureGroup.features" v-bind="feature" :reverse="idx%2!==0">
      </component>
    </component>
  </section>
</template>