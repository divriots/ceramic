<script>
  export default {
  props: {
    title: { type: String, required: true },
  },
};
</script>
<template>
  <article>
    <h3 class="text-center text-4xl mt-20 mb-10">{{ title }}</h3>
    <slot></slot>
  </article>
</template>