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
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>
<template>
  <div class="h-full flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-1 flex flex-col">
      <div class="bg-white px-6 pt-12 pb-10">
        <div class="text-center">
          <h2 class="mt-2 text-3xl font-semibold font-display text-gray-900">
            {{ title }}
          </h2>
          {{ legend }}
        </div>
      </div>
      <div
        class="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10"
      >
        <ul>
          <li
            class="mb-4 flex items-start text-left"
            v-for="feature of features"
          >
            <div class="flex-shrink-0">
              <svg
                class="h-6 w-6 text-teal-500"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <p
              class="ml-3 text-base font-medium text-gray-500"
              v-html="feature.description"
            ></p>
          </li>
        </ul>

        <div class="mt-8">
          <div v-if="price" class="my-2">
            <button class="m-2 px-2 py-1">-</button>
            <span class="m-2 px-2 py-1">{{ count }}</span>
            <button class="m-2 px-2 py-1 rounded-lg shadow">+</button>
          </div>
          <div
            class="flex items-center justify-center rounded-lg shadow-md bg-background hover:shadow-xl"
          >
            <a
              :href="action.url"
              class="block text-center rounded-lg px-3 py-3 text-base font-semibold font-display text-primary focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
            >
              {{ action.label }}
            </a>
            <template v-if="price">
              <span
                class="px-3 flex items-center text-2xl tracking-tight font-medium text-gray-900"
              >
                <span class="mr-2"> $ </span>
                <span> {{ price.value }} </span>
              </span>
              <span class="flex flex-col -mt-3">
                <span class="text-sm font-semibold text-gray-400 tracking-wide"
                  >USD</span
                >
                <span
                  class="font-sans text-xs text-gray-500 font-medium leading-none"
                >
                  (+ €25.80 VAT)
                </span>
              </span>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
