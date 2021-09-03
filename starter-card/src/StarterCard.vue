<template>
  <component
    :is="EmptyCard"
    :url="url"
    @click="(event) => $emit('click', event)"
    :backgroundColor="backgroundColor"
    :size="size"
  >
    <component :is="StarterLogo" :name="name" :heroImg="heroImg" :size="size" />
    <p class="description">
      <slot></slot>
    </p>
    <component
      :is="ActionDescription"
      :description="actionDescription"
      :size="size"
    />
    <img class="framework-bg" :src="bgImg" />
  </component>
</template>
<script>
import EmptyCard from '../../empty-card/src/EmptyCard.vue';
import ActionDescription from '../../action-description/src/ActionDescription.vue';
import StarterLogo from '../../starter-logo/src/StarterLogo.vue';

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
  data: () => ({ EmptyCard, ActionDescription, StarterLogo }),
};
</script>
<style lang="scss" scoped>
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
</style>
