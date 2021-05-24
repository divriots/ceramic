<script>
  import { ref } from 'vue';
export default {
  props: {
    title: { type: String },
    legend: { type: String },
    inherits: { type: Object },
    additionalFeatures: { type: Array },
    price: { type: Object },
    action: { type: Object },
    banner: { type: String },
  },
  computed: {
    value() {
      if (this.period === 'month') return Math.trunc(this.price.value / .8);
      return this.price.value 
    },
  },
  setup() {
    const count = ref(1);
    const period = ref('year');
    return {
      count,
      period,
    };
  },
};
</script>
<template>
  <div class="relative rounded-lg shadow-lg p-6 flex flex-col">
    <div class="flex bg-primary rounded-md shadow-inset-control" v-if="price && price.value > 0">
      <button
        :class="`flex-grow px-6 py-2 ${
          period === 'year' ? 'text-primary bg-white' : ''
        }`"
        @click="period = 'year'"
      >
        Yearly (-20%)
      </button>
      <button
        :class="`flex-grow px-6 py-2 ${
          period === 'month' ? 'text-primary bg-white' : ''
        }`"
        @click="period = 'month'"
      >
        Monthly
      </button>
    </div>
    <header class="py-4 text-3xl flex flex-col mx-auto items-center">
      <span class="font-semibold font-display col-span-2">{{ title }}</span>
      <span class="flex flex-grow items-center tracking-tight font-medium">
          <template v-if="price && price.value >= 0">
            <span class="mr-2"> {{ price.symbol }}</span>
      <span aria-label="(+ €25.80 VAT)">{{ value * count }}</span>
      <span class="ml-1 text-sm opacity-50 font-semibold tracking-wide">/ month</span>
</template>
<span v-else class="text-lg mt-2">{{ price.value }}</span>
</span>
<div class="flex items-center" v-if="price && price.unit">
  <div class="flex text-sm items-center" v-if="price && price.unit">
    <button
              class="m-2 p-2 rounded-lg shadow"
              @click="count > 1 && count--"
            >
              -
            </button>
    <span class="tabular-nums">{{ count }}</span>
    <button class="m-2 p-2 rounded-lg border-2 border-dashed border-opacity-75 border-white" @click="count++">
              +
            </button>
  </div>
  <span class="text-sm px-2">{{ price.unit }}</span>
</div>
</header>
<p class="bg-black-divriots text-white font-semibold text-center rounded-md py-1" v-if="banner">{{banner}}</p>
<span class="mx-auto">{{ legend }}</span>
<ul class="flex-grow border-t-2 border-b-2 border-gray-divriots py-8 mt-4">
  <li class="mb-4 flex items-start text-left" v-if="inherits">
    <div class="flex-shrink-0">
      <svg class="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <p class="ml-3 text-base font-bold">
      All {{ inherits.title }} features
    </p>
  </li>
  <li class="mb-4 flex items-start text-left" v-for="feature of additionalFeatures">
    <div class="flex-shrink-0">
      <svg class="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <p :class="`ml-3 text-base font-medium ${feature.highlight?'font-bold':''}`" v-html="
            (feature.restriction ? feature.restriction + ' ' : '') +
            feature.label
          "></p>
  </li>
</ul>

<div class="mt-8 grid gap-4 justify-center">
  <a :href="action.url" class="btn bg-background block text-base font-display text-primary">
    {{ action.label }}
  </a>
</div>
</div>
</template>
<style>
  .shadow-inset-control {
    box-shadow: inset 0 0 2rem 2rem rgb(0 0 0 / 10%);
    padding: 2px;
  }

  .shadow-inset-control>button {
    border-radius: 0.25rem;
  }
</style>