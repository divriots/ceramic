<script>
  import Color from './color.vue';
export default {
  components: {Color},
  props: {
    name: String,
    shades: Array
  }
}
</script>
<template>
  <div class="flex flex-col space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4">
    <div class="w-32 flex-shrink-0">
      <div class="h-10 flex flex-col justify-center">
        <div class="text-sm font-semibold text-gray-900">{{name}}</div>
        <div><code class="text-xs text-gray-500">colors.{{name}}</code></div>
      </div>
    </div>
    <div class="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2">
      <Color v-if="typeof shades === 'string'" :key="name" :name="name" :value="shades" :hex="shades" />
      <Color v-else v-for="[name,color] in Object.entries(shades)" :key="name" :name="name" :value="color"
        :hex="color" />
    </div>
  </div>
</template>