<template>
  <ul class="flex-grow border-t-2 border-b-2 border-gray-divriots py-8">
    <li class="mb-4 flex items-start text-left" v-if="inherits">
      <div class="flex-shrink-0">
        <svg class="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p class="ml-3 text-base font-bold">All {{ inherits.title }} features</p>
    </li>
    <li class="mb-4 flex items-start text-left" v-for="feature of additionalFeatures" :key="feature.label">
      <div class="flex-shrink-0">
        <svg class="h-6 w-6 text-teal-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <p :class="`ml-3 text-base font-medium ${
          feature.highlight ? 'font-bold' : ''
        }`" v-html="
          (feature.restriction ? `${feature.restriction} ` : '') +
          (parseInt(feature.restriction, 10) === 1
            ? feature.labelSingular
            : feature.label)
        "></p>
    </li>
  </ul>
</template>

<script>
  export default {
  props: {
    inherits: { type: Object },
    additionalFeatures: { type: Array },
  },
};
</script>

<style>
  .shadow-inset-control {
    box-shadow: inset 0 0 2rem 2rem rgb(0 0 0 / 10%);
    padding: 2px;
  }

  .shadow-inset-control>button {
    border-radius: 0.25rem;
  }
</style>