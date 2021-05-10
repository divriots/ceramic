<script>
  export default {
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    action: { type: Object, required: true },
    image: { type: String, required: false },
    reverse: { type: Boolean, default: false },
  },
};
</script>
<template>
  <div class="max-w-6xl mx-auto grid sm:grid-cols-2 place-items-center py-12 justify-around">
    <div class="bg-black-default min-w-md h-120 rounded-lg">
      <img src="#" />
    </div>
    <div :class="`flex flex-col space-y-12 max-w-md ${ reverse ? 'sm:col-start-1 sm:row-start-1':''}`">
      <span class="text-xl">{{ name }}</span>
      <p class="text-gray-divriots">{{ description }}</p>
      <div>
        <a :href="action.href" class="px-4 py-2 rounded-lg bg-primary">
          {{ action.label }}
        </a>
      </div>
    </div>
  </div>
</template>