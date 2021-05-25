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
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 py-16 sm:py-32 items-center gap-y-32 gap-x-16 xl:gap-x-32">
    <div class="place-self-center h-64 w-64 sm:w-80 sm:h-80 xl:h-128 xl:w-128 rounded-lg bg-no-repeat bg-contain"
      :style="{ 'background-image': `url(${img.src})` }">
    </div>
    <div :class="`flex flex-col h-full justify-center space-y-12 max-w-80 bg-black-divriots ${
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