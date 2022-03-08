<template>
  <div
    :class="`price-info relative flex flex-col ${
      highlight ? 'highlight' : 'lg:pb-5'
    }`"
  >
    <header class="text-4xl flex flex-col py-4">
      <span
        class="font-light font-display text-primary text-2xl col-span-2 py-6"
      >
        {{ title }}
      </span>
      <span class="font-light text-lg pb-6 text-gray-light">{{ legend }}</span>
      <span
        class="flex flex-grow items-end tracking-tight font-semibold text-white"
      >
        <template v-if="price && price.value > 0">
          <span class="mr-2 text-white">{{ price.symbol }}</span>
          <span aria-label="Subscription Price">{{ value * count }}</span>
          <span class="ml-1 text-white text-sm opacity-50 tracking-wide pb-2">
            per month
          </span>
        </template>
        <span v-else class="text-4xl text-white">
          {{ price.value }}
        </span>
      </span>
      <div class="flex items-center" v-if="price && price.unit">
        <div class="flex text-sm items-center" v-if="price && price.unit">
          <button class="btn-primary m-2 p-2" @click="count > 1 && count--">
            -
          </button>
          <span class="tabular-nums">{{ count }}</span>
          <button class="btn-primary m-2 p-2" @click="count++">+</button>
        </div>
        <span class="text-sm px-2">{{ price.unit }}</span>
      </div>
      <div class="flex">
        <component
          v-if="highlight"
          :is="Switch"
          title=""
          name=""
          toggled="true"
          @click="period === 'year' ? (period = 'month') : (period = 'year')"
        />
        <span
          v-if="highlight && period === 'year'"
          class="font-light text-sm text-gray-light"
        >
          Yearly (save 20%)
        </span>
        <span
          v-if="highlight && period === 'month'"
          class="font-light text-sm text-gray-light"
        >
          Monthly
        </span>
      </div>
    </header>
    <p
      class="bg-black-divriots text-white font-semibold text-center rounded-md py-1"
      v-if="banner"
    >
      {{ banner }}
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';
import Switch from '../../switch/src/switch.vue';
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
      Switch,
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

.shadow-inset-control > button {
  border-radius: 0.25rem;
}
</style>
