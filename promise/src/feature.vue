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
  <div class="mx-auto flex place-items-center py-4 justify-around" :style="{'flex-flow' : reverse?'row-reverse':'row'}">
    <div class="flex flex-col space-y-6 px-8 max-w-96">
      <span class="text-xl px-4">{{ name }}</span>
      <p class="px-4 text-gray-400">{{ description }}</p>
      <a :href="action.href" class="px-4 py-4 border-1 rounded-lg border-gray-800">
        {{ action.label }}
      </a>
    </div>
    <div class="bg-gray-900 w-100 h-120 rounded-lg"><img src="" /></div>
  </div>
</template>