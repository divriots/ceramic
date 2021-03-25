<script>
  import Shades from './shades.vue';
export default {
  props:{
    colors: {type:Object}
  },
  components: {Shades}
}
</script>
<template>
  <div class="grid grid-cols-1 gap-8">
    <Shades v-for="[color,shades] of Object.entries(colors)" :key="color" :name="color" :shades="colors[color]" />
  </div>
</template>