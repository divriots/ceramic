<template>
  <div :class="`price-info relative flex flex-col ${highlight? 'highlight' : 'lg:pt-12'}`">
    <div class="flex bg-secondary rounded-md shadow-inset-control" v-if="highlight">
      <button
        :class="`flex-grow btn focus:ring-offset-0 focus:ring-0 ${
          period === 'year' ? 'text-secondary bg-white' : ''
        }`"
        @click="period = 'year'"
      >
        Yearly (-20%)
      </button>
      <button
        :class="`flex-grow btn focus:ring-offset-0 focus:ring-0 ${
          period === 'month' ? 'text-secondary bg-white' : ''
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
          <span class="mr-2">{{ price.symbol }}</span>
      <span aria-label="Subscription Price">{{ value * count }}</span>
      <span class="ml-1 text-sm opacity-50 font-semibold tracking-wide">
            / month
          </span>
</template>
<span v-else class="text-lg mt-2">{{ price.value }}</span>
</span>
<div class="flex items-center" v-if="price && price.unit">
  <div class="flex text-sm items-center" v-if="price && price.unit">
    <button class="btn-secondary m-2 p-2" @click="count > 1 && count--">
            -
          </button>
    <span class="tabular-nums">{{ count }}</span>
    <button class="btn-secondary m-2 p-2" @click="count++">+</button>
  </div>
  <span class="text-sm px-2">{{ price.unit }}</span>
</div>
</header>
<p class="
        bg-black-divriots
        text-white
        font-semibold
        text-center
        rounded-md
        py-1
      " v-if="banner">
  {{ banner }}
</p>
<span class="mx-auto">{{ legend }}</span>
</div>
</template>

<script>
  import { ref } from 'vue';
export default {
  props: {
    title: { type: String },
    legend: { type: String },
    price: { type: Object },
    banner: { type: String },
  },
  computed: {
    highlight() {
      return this.price && this.price.value > 0;
    },
    value() {
      if (this.period === 'month') return Math.trunc(this.price.value / 0.8);
      return this.price.value;
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

<style>
  .price-info {
    min-height: 12.2rem;
  }

  .price-info.highlight {
    min-height: 12rem;
  }

  .shadow-inset-control {
    box-shadow: inset 0 0 2rem 2rem rgb(0 0 0 / 10%);
    padding: 2px;
  }

  .shadow-inset-control>button {
    border-radius: 0.25rem;
  }
</style>