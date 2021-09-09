<template>
  <a
    :href="url"
    v-on:click="(event) => $emit('click', event)"
    :class="{
      'starter-kit': true,
    }"
    :style="
      highlighted
        ? `background-color: ${backgroundColor};`
        : `background-color: black; border: 3px solid ${backgroundColor}`
    "
  >
    <slot></slot>
  </a>
</template>
<script>
export default {
  props: {
    url: { type: String },
    onClick: { type: Object },
    backgroundColor: { type: String },
    highlighted: { type: Boolean, default: false },
  },
};
</script>
<style lang="scss" scoped>
.starter-kit {
  color: white;
  text-decoration: inherit;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1em 1.2em;
  border-radius: 0.75em;
  overflow: hidden;
  text-align: left;

  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.2);
    z-index: 10;
    filter: drop-shadow(0.2rem 0.2rem 0.25rem rgba(0, 0, 30, 0.5));
  }
  @media (min-width: 640px) {
    width: 18em;
    height: 26em;
  }
  width: 16em;
  height: 24em;
}
</style>
