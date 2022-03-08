<template>
  <div
    class="relative rounded-lg shadow-lg p-6 flex flex-col"
    :class="title === 'Pro' ? 'bk-gradient' : 'bg-gray-darker'"
  >
    <component
      :is="PriceInfo"
      :title="title"
      :legend="legend"
      :price="price"
      :banner="banner"
    />
    <div class="my-8 flex flex-col gap-4">
      <a
        :href="action.url"
        class="btn flex-grow text-center font-display"
        :class="title === 'Pro' ? 'btn-primary' : 'btn-outline'"
      >
        {{ action.label }}
      </a>
      <span class="opacity-75 text-sm">{{ action.legend }}</span>
    </div>
    <component
      :is="PriceFeatures"
      :inherits="inherits"
      :additionalFeatures="additionalFeatures"
      style="z-index: 1"
    />
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

.bk-gradient:before {
  border-radius: 0.5rem;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
  background-color: #171717;
  background-image: radial-gradient(at 65% 75%, #171717 0, transparent 100%),
    radial-gradient(at 65% 42%, hsla(47, 100%, 50%, 0.7) 0, transparent 50%),
    radial-gradient(at 30% 35%, hsla(355, 90%, 60%, 0.7) 0, transparent 35%),
    radial-gradient(at 34% 57%, hsla(295, 100%, 50%, 0.7) 0, transparent 50%),
    radial-gradient(at 76% 53%, hsla(261, 100%, 50%, 0.7) 0, transparent 64%);
}
</style>
