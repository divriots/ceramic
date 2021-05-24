<script>
  import {Free, Pro, Enterprise} from '../../config/src/plans';
import Price from '../../price/src/index.vue';
  export default {
    data(){ return { plans: [Free, Pro, Enterprise]}},
    setup(){return { Price}}
  };
</script>
<template>
  <section class="gradient text-center relative px-4">
    <h2 class="text-4xl sm:text-5xl lg:text-6xl sm:texttext-6xl py-16">Discover our pricing</h2>
    <div class="mx-auto max-w-5xl grid lg:grid-cols-3 align-center justify-center gap-8">
      <div v-for="(plan,idx) of plans" :key="plan.title" :class="`${idx%3===1?'':'py-8'}`">
        <component :is="Price" v-bind="plan" :banner="plan.banner"
          :class="`${idx%3===1?'bg-primary text-white':'text-primary bg-white'}`">
        </component>
      </div>
    </div>
    <slot></slot>
  </section>
</template>

<style scoped>
  .gradient::before {
    height: 500px;
  }
</style>