<template>
  <component
    :is="Card"
    :url="url"
    @click="(event) => $emit('click', event)"
    :backgroundColor="backgroundColor"
    class="card"
    :highlighted="highlighted"
  >
    <div :class="{ logo: true, 'logo-highlighted': highlighted }">
      <img :src="heroImg" />
    </div>
    <div class="details" style="align-self: stretch; display: flex">
      <p class="description">
        <slot></slot>
      </p>
    </div>
    <div class="powered-by">
      <span>powered by</span>
      <span v-for="[name, logo] in frameworks" :key="name">
        <img :src="logo" />
        {{ name }}
      </span>
    </div>
    <div class="owner" v-if="ownerPhoto">
      <span>made by</span>
      <span>
        <img :src="ownerPhoto" />
        {{ owner }}
      </span>
    </div>
    <div class="action-description details">
      {{ actionDescription }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style="
          width: 1.5em;
          height: 1.5em;
          vertical-align: middle;
          top: 0.1em;
          position: relative;
          display: inline-block;
        "
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <img class="framework-bg" :src="bgImg" />
  </component>
</template>
<script>
import Card from '../../card/src/Card.vue';

export default {
  props: {
    url: { type: String },
    href: { type: String },
    heroImg: { type: String },
    bgImg: { type: String },
    backgroundColor: { type: String },
    actionDescription: { type: String },
    highlighted: { type: Boolean, default: false },
    frameworks: { type: Map },
    owner: { type: String },
    ownerPhoto: { type: String },
  },
  data: () => ({ Card }),
};
</script>
<style lang="scss" scoped>
.logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  img {
    transition: all 0.4s ease;
    max-width: 80%;
    max-height: 100%;
    width: auto;
    height: 8em;
  }
}
.logo-highlighted img {
  max-width: 100%;
  height: 12em;
}
.description {
  height: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 4em;
}
.framework-bg {
  position: absolute;
  width: 10rem;
  height: 10rem;
  right: 0;
  bottom: 0;
  opacity: 0.25;
  transform: translateX(2rem) translateY(2rem) rotate(-12deg);
  transition: all 0.4s ease;
}
.action-description {
  font-size: 1.1em;
  font-weight: bold;
  z-index: 1;
  position: absolute;
  right: 0.5em;
  bottom: 1em;
  max-width: 50%;
}
p {
  margin: 0;
}
.details {
  overflow: hidden;
  max-height: 0px;
  flex-shrink: 5;
  flex-grow: 0;
  transition: all 0.4s ease;
  animation-name: fadeInBottom;
}
@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
  }
}
.card {
  @mixin detailed-card {
    .framework-bg {
      opacity: 0.1;
    }
    .details {
      max-height: 100%;
      flex-shrink: 0;
      flex-grow: 10;
    }
    .logo,
    .logo-highlighted {
      img {
        height: 5rem;
        max-width: 60%;
      }
    }
  }
  @media (hover: hover) {
    &:hover {
      @include detailed-card;
    }
  }
  @media (hover: none) {
    @include detailed-card;
  }
}

.powered-by,
.owner {
  font-size: 0.9em;
  :first-child {
    font-size: 0.8em;
  }
  span {
    display: block;
  }
  img {
    height: 1em;
    width: 1em;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.2em;
    top: -0.15em;
    position: relative;
  }
}

.powered-by {
  margin-top: auto;
}

.action-description {
  display: flex;
  align-items: flex-end;
  font-weight: bold;
  z-index: 1;
}

.action-description-big {
  font-size: 1.5em;
}
</style>
