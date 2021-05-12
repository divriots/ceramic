<script>
  import { ref } from 'vue';
export default {
  props: {
    title: { type: String },
    legend: { type: String },
    features: { type: Array },
    price: { type: Object },
    action: { type: Object },
  },
  computed: {
    value(){
      if(this.period==='month') return this.price.value;
      return Math.trunc(this.price.value * 12 * .8);
    }
  },
  setup() {
    const count = ref(1);
    const period = ref('month');
    return {
      count, period
    };
  },
};
</script>
<template>
  <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden p-6">
    <div class="flex bg-primary rounded-md shadow-inset-control" v-if="price && price.value>0">
      <button :class="`flex-grow px-6 py-2 ${period === 'year' ? 'text-primary bg-white':''}`" @click="period = 'year'">Yearly (-20%)</button>
      <button :class="`flex-grow px-6 py-2 ${period === 'month' ? 'text-primary bg-white':''}`" @click="period = 'month'">Monthly</button>
    </div>
    <header class="py-4 text-3xl flex">
      <span class="flex-grow font-semibold font-display">{{ title }}</span>
      <div :class="`justify-end grid ${price && price.unit ? 'grid-cols-2' :'grid-cols-1'} items-center`">
        <span class="flex flex-grow justify-end tracking-tight font-medium">
            <template  v-if="price && price.value >=0">
            <span class="mr-2"> {{ price.symbol }}</span>
        <span aria-label="(+ €25.80 VAT)"> {{ value * count }} </span>
</template>
<span v-else class="text-sm">{{ price.value }}</span>
</span>
<template v-if="price && price.unit">
  <span class="flex flex-col text-sm text-gray-divriots font-semibold tracking-wide">/{{ period }}</span>
  <div class="flex justify-end text-sm items-center" v-if="price && price.unit">
    <button class="m-2 p-2 rounded-lg shadow" @click="count > 1 && count--">-</button>
    <span>{{ count }}</span>
    <button class="m-2 p-2 rounded-lg shadow" @click="count++">+</button>
  </div>
  <span class="text-sm">{{ price.unit }}</span>
</template>
</div>
</header>
{{ legend }}
<ul class="flex-grow border-t-2 border-b-2 border-gray-divriots py-8">
  <li class="mb-4 flex items-start text-left" v-for="feature of features">
    <div class="flex-shrink-0">
      <svg class="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <p class="ml-3 text-base font-medium" v-html="feature.description"></p>
  </li>
</ul>

<div class="mt-8 grid gap-4 justify-center">
  <a :href="action.url"
    class=" rounded-lg shadow-md bg-background hover:shadow-xl block text-center px-3 py-3 text-base font-semibold font-display text-primary focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
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
    border-radius: .25rem;
  }
</style>