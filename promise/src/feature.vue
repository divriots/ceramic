<script>
export default {
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    action: { type: Object, required: true },
    img: { type: Object, required: false },
    reverse: { type: Boolean, default: false },
  },
};
</script>
<template>
  <div
    class="max-w-4xl mx-auto grid md:grid-cols-2 place-items-center py-12 justify-around"
  >
    <div
      class="p-4 bg-black-default grid place-items-center min-w-md h-96 w-80 sm:96 rounded-lg"
      :style="{ 'background-color': img.backgroundColor }"
    >
      <img class="w-64 sm:w-80" :src="img.src" />
    </div>
    <div
      :class="`p-4 flex flex-col space-y-12 max-w-md ${
        reverse ? 'md:col-start-1 md:row-start-1' : ''
      }`"
    >
      <span class="text-xl">{{ title }}</span>
      <p class="text-gray-divriots">{{ description }}</p>
      <div>
        <a
          :href="action.href"
          class="px-6 py-3 rounded-md bg-primary hover:underline"
        >
          {{ action.label }}
        </a>
      </div>
    </div>
  </div>
</template>
