<template>
  <EmptyCard :url="url" @click="event => $emit('click', event)" :backgroundColor="backgroundColor" :size="size">
      <div :class="`logo logo-${size}`">
        <img :src="heroImg" />
      </div>
      <header class="title">Starter {{ name }}</header>
      <p class="description">
        <slot></slot>
      </p>
      <div :class="`action-description action-description-${size}`">
        {{ actionDescription }} 
        <svg xmlns="http://www.w3.org/2000/svg" style="width: 1.5em; height: 1.5em;" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
        </svg>
      </div>
      <img 
        class="framework-bg"
        :src="bgImg"
      />
  </EmptyCard>
</template>
<script>
import EmptyCard from './EmptyCard.vue';

export default {
  props: {
    name: { type: String },
    url: { type: String },
    href: { type: String },
    heroImg: { type: String },
    bgImg: { type: String },
    backgroundColor: { type: String },
    actionDescription: { type: String },
    size: { type: String, default: 'normal' },
  },
  components: { EmptyCard },
};
</script>
<style lang="scss" scoped>
.logo-normal {
  height: 5rem;
}
.logo-big {
  height: 10rem;
}
.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  img {
    max-width: 100%;
    height: 100%;
  }
}
.title {
  font-size: 1.5em;
  font-weight: bold;
}
.description {
  flex-grow: 1;
}
.framework-bg {
  position: absolute;
  width: 14rem;
  height: 14rem;
  right: 0;
  bottom: 0;
  opacity: 0.25;
  transform: translateX(4rem) translateY(3rem) rotate(-12deg);
}
.action-description {
  display: flex;
  align-items: center;
  font-weight: bold;
  z-index: 1;
}
.action-description-big {
  font-size: 1.5em;
}
</style>
