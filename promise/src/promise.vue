<script>
  export default {
  props: {
    classes: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    action: { type: Object, required: true },
    img: { type: Object, required: false },
    video: { type: Object, required: false },
    reverse: { type: Boolean, default: false },
    layout: { type: String, default: 'horizontal'},
  },
};
</script>
<template>
  <div data-aos="fade-up"
    :class="`max-w-6xl flex flex-wrap ${layout === 'horizontal' ? 'flex-row mx-auto justify-center gap-12' : 'flex-col text-center'} place-items-center py-10`">
    <div class="h-80 w-80 sm:w-96 sm:h-96 xl:h-128 xl:w-128">
      <img v-if="img" :src="img.src" loading="lazy" class="object-contain overflow-hidden w-full h-full"/>
      <video v-if="video" class="h-80 w-80 sm:w-96 sm:h-96 xl:h-128 xl:w-128" autoplay muted loop>
        <source :src="video.src" type="video/mp4">
      </video>
    </div>
    <div :class="`flex flex-col ${layout === 'horizontal' ? 'justify-center h-full sm:w-80 xl:w-96' : 'self-start mx-auto sm:w-96 xl:w-128' } w-64 space-y-12 ${
        reverse ? 'md:col-start-1 md:row-start-1' : ''
      }`">
      <div class="text-3xl font-semibold">{{ title }}</div>
      <div
        :class="`text-lg flex flex-col ${layout === 'horizontal' ? '': 'flex-grow justify-center sm:w-80 xl:w-96 mx-auto'} text-gray-divriots gap-4`"
        v-html="description"></div>
      <div v-if="action">
        <a :href="action.href" :class="classes">
          {{ action.label }} >
        </a>
      </div>
    </div>
  </div>
</template>