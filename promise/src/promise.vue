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
  <div data-aos="fade-up" class="max-w-6xl mx-auto grid md:grid-cols-2 place-items-center py-20 gap-12">
    <div class="h-64 w-64 sm:w-80 sm:h-80 xl:h-96 xl:w-96 bg-no-repeat bg-contain rounded-lg"
      :style="{ 'background-image': `url(${img.src})` }"></div>
    <div :class="`flex flex-col h-full justify-center space-y-12 w-64 sm:w-80 xl:w-96 ${
        reverse ? 'md:col-start-1 md:row-start-1' : ''
      }`">
      <span class="text-3xl font-semibold">{{ title }}</span>
      <div class="text-lg grid text-gray-divriots gap-4" v-html="description"></div>
      <div v-if="action">
        <a :href="action.href" class="btn-secondary">
          {{ action.label }}
        </a>
      </div>
    </div>
  </div>
</template>