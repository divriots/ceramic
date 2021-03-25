<script>
  export default {
  props:{
    name: String,
    value: String,
    hex: String
  }
}
</script>
<template>
  <div class="space-y-1.5">
    <div class="h-10 w-full rounded ring-1 ring-inset ring-black ring-opacity-0" :style="`background-color: ${value}`">
    </div>
    <div class="px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
      <div class="w-6 font-medium text-gray-900">{{name}}</div>
      <div>{{hex}}</div>
    </div>
  </div>
</template>