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
    <component :is="Group" v-for="promisesGroup of promisesGroups" :key="promisesGroup.group"
      :title="promisesGroup.title" :classes="promisesGroup.classes">
      <div
        :class="`flex ${promisesGroup.layout === 'vertical' ? 'flex-col' : 'flex-row justify-center gap-x-24 flex-wrap'}`">
        <component :is="Promise" v-for="(promise, promiseIdx) in promisesGroup.promises" v-bind="promise"
          :classes="promisesGroup.classes" :reverse="promisesGroup.layout === 'vertical' ? promiseIdx%2!==0 : false"
          :layout="promisesGroup.layout === 'vertical' ? 'horizontal' : 'veritcal'">
        </component>
      </div>
    </component>
  </section>
</template>