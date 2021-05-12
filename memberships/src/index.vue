<script>
  import plans from '../../config/src/plans';
import Price from '../../price/src/index.vue';
  export default {
    data(){ return { plans}},
    setup(){return { Price}}
  };
</script>
<template>
  <section class="gradient text-center relative">
    <h2 class="text-6xl py-16">Discover our pricing</h2>
    <div class="mx-auto max-w-5xl grid lg:grid-cols-3 align-center justify-center gap-8">
      <div v-for="(plan,idx) of plans" :key="plan.title" :class="`${idx%3===1?'':'py-8'}`">
        <component :is="Price" v-bind="plan" :class="`${idx%3===1?'bg-primary text-white':'bg-white text-primary'}`">
        </component>
      </div>
    </div>
    <a class="flex text-primary justify-center text-3xl p-8 mt-8 hover:underline" href="/pricing">See more features</a>
  </section>
</template>

<style>
  .gradient:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 60%;
    left: 0px;
    top: 0;
    z-index: -1;
    background: linear-gradient(180deg, #F3F4F6 20%, rgba(255, 255, 255, 0) 120%), linear-gradient(58.46deg, #6373e6 35.31%, #84e6fb 84.04%);
  }
</style>