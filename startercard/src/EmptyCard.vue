<template>
  <a :href="url" v-on:click="event => $emit('click', event)" :class="`starter-kit starter-kit-${size}`" :style="`background-color: ${backgroundColor};`">
      <slot></slot>
  </a>
</template>
<script>
export default {
  props: {
    url: { type: String },
    onClick: { type: Object },
    backgroundColor: { type: String },
    size: { type: String, default: 'normal' },
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
  gap: 1rem;
  padding: 2rem;
  border-radius: 0.75rem;
  overflow: hidden;
  font-size: 1.1rem;
  text-align: left;

  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0.2rem 0.2rem 0.25rem rgba(0, 0, 30, 0.5));
  }
}
.starter-kit-normal {
  height: 460px;
  @media (min-width: 640px) {
    width: 20rem;
  }
  width: 16rem;
}
.starter-kit-big {
  height: 600px;
  width: 24rem;
}
</style>
