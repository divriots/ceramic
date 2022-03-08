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
      <span class="text-lg pb-6 text-gray-light">{{ legend }}</span>
      <span
        class="flex-col flex-grow items-end tracking-tight font-semibold text-white"
      >
        <template v-if="price && price.value > 0">
          <div>
            <span class="mr-2 text-white">{{ price.symbol }}</span>
            <span aria-label="Subscription Price">{{ value }}</span>
            <span class="ml-1 text-white text-base tracking-wide pb-2">
              /mo (yearly)
            </span>
          </div>
          <div class="font-light text-sm text-gray-light">
            <span>
              {{ price.symbol }} {{ Math.trunc(value / 0.8) }} /mo (monthly)
            </span>
          </div>
        </template>
        <span v-else class="text-4xl text-white">
          {{ price.value }}
        </span>
      </span>
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
      return this.price.value;
    },
  },
  setup() {},
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
