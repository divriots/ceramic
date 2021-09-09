<template>
  <div class="relative rounded-lg shadow-lg p-6 flex flex-col">
    <component
      :is="PriceInfo"
      :title="title"
      :legend="legend"
      :price="price"
      :banner="banner"
    />
    <component
      :is="PriceFeatures"
      :inherits="inherits"
      :additionalFeatures="additionalFeatures"
    />
    <div class="mt-8 flex flex-col items-center gap-4">
      <a
        :href="action.url"
        class="btn bg-background text-base font-display text-secondary"
      >
        {{ action.label }}
      </a>
      <span class="opacity-75 text-sm">{{ action.legend }}</span>
    </div>
  </div>
</template>

<script>
import PriceInfo from '../../price-info/src/index.vue';
import PriceFeatures from '../../price-features/src/index.vue';
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
  setup: () => ({ PriceInfo, PriceFeatures }),
};
</script>

<style>
.shadow-inset-control {
  box-shadow: inset 0 0 2rem 2rem rgb(0 0 0 / 10%);
  padding: 2px;
}

.shadow-inset-control > button {
  border-radius: 0.25rem;
}
</style>
