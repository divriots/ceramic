<script>
export default {
  props: {
    title: { type: String, required: true },
    classes: { type: String, required: true },
  },
};
</script>
<template>
  <article class="overflow-hidden">
    <h2
      data-aos="fade-left"
      class="main-title text-center my-10 sm:my-20"
      v-html="title"
    ></h2>
    <slot></slot>
  </article>
</template>
