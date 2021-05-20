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
  <div class="max-w-4xl mx-auto grid md:grid-cols-2 items-center py-12 justify-around gap-8">
    <div class="bg-black-default grid place-self-center place-items-center h-96 sm:h-128 w-full rounded-lg"
      :style="{ 'background-color': img.backgroundColor }">
      <img class="max-w-64 sm:max-w-80" :src="img.src" />
    </div>
    <div :class="`flex flex-col space-y-12 max-w-80 sm:max-w-96 ${
        reverse ? 'md:col-start-1 md:row-start-1' : ''
      }`">
      <span class="text-3xl font-semibold">{{ title }}</span>
      <div class="text-lg grid text-gray-divriots gap-4" v-html="description"></div>
      <div>
        <a :href="action.href" class="btn-primary">
          {{ action.label }}
        </a>
      </div>
    </div>
  </div>
</template>