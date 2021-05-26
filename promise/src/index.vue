<script>
  import Promise from './promise.vue';
import Group from './group.vue';
import promisesGroups from '../../config/src/promises';

export default {
    data() {return { promisesGroups }},
    setup(){return { Group,Promise }}
  };
</script>
<template>
  <section class="bg-black-divriots text-white px-4 py-12 -my-2">
    <component :is="Group" v-for="(promisesGroup,idx) in promisesGroups" :key="promisesGroup.group"
      :title="promisesGroup.title">
      <component :is="Promise" v-for="promise of promisesGroup.promises" v-bind="promise" :reverse="idx%2!==0">
      </component>
    </component>
  </section>
</template>