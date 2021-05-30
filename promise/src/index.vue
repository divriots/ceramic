<script>
import Promise from './promise.vue';
import Group from './group.vue';
import promisesGroups from './content';

export default {
    data() {return { promisesGroups }},
    setup(){return { Group,Promise }}
  };
</script>
<template>
  <section class="bg-black-divriots text-white px-4 py-12 -my-2">
    <component :is="Group" v-for="(promisesGroup,idx) in promisesGroups" :key="promisesGroup.group"
      :title="promisesGroup.title" :classes="promisesGroup.classes">
      <component :is="Promise" v-for="promise of promisesGroup.promises" v-bind="promise" :classes="promisesGroup.classes" :reverse="idx%2!==0">
      </component>
    </component>
  </section>
</template>