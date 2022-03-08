<script>
import { Free, Pro, Enterprise } from '../../config/src/plans';
import Price from '../../price/src/index.vue';
export default {
  data() {
    return { plans: [Free, Pro, Enterprise] };
  },
  setup() {
    return { Price };
  },
};
</script>
<template>
  <section class="text-white memberships relative">
    <header class="py-20 px-6 text-center">
      <h2 class="text-4xl sm:text-5xl lg:text-6xl mb-2">
        Flexible
        <span class="text-primary">pricing</span>
      </h2>
      <p class="text-lg sm:text-xl lg:text-2xl text-gray-light">
        Affordable for teams of all sizes
      </p>
    </header>
    <div
      class="mx-auto max-w-5xl grid lg:grid-cols-3 align-center justify-center gap-8"
    >
      <div v-for="(plan, idx) of plans" :key="plan.title">
        <component
          :is="Price"
          v-bind="plan"
          :banner="plan.banner"
          :class="`h-full ${
            idx % 3 === 1 ? 'text-white' : 'text-white bg-gray-darker'
          }`"
        ></component>
      </div>
    </div>
    <slot></slot>
  </section>
</template>

<style></style>
