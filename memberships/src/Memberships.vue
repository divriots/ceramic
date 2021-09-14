<script>
  import {Free, Pro, Enterprise} from '../../config/src/plans';
  import Price from '../../price/src/index.vue';
  export default {
    data(){ return { plans: [Free, Pro, Enterprise]}},
    setup(){return { Price}}
  };
</script>
<template>
  <section class="gradient text-white memberships text-center relative">
    <header class="py-20">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl mb-2">Discover our pricing</h2>
      <p class="text-lg sm:text-xl lg:text-2xl text-gray-light">Affordable for teams at all sizes</p>
    </header>
    <div class="mx-auto max-w-5xl grid lg:grid-cols-3 align-center justify-center gap-8">
      <div v-for="(plan,idx) of plans" :key="plan.title">
        <component :is="Price" v-bind="plan" :banner="plan.banner"
          :class="`h-full ${idx%3===1?'bg-secondary text-white':'text-secondary bg-white transform lg:scale-95'}`">
        </component>
      </div>
    </div>
    <slot></slot>
  </section>
</template>

<style>
  .gradient.memberships::before {
    height: 500px;
  }
</style>