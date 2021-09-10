<template>
  <component
    :is="Card"
    :url="url"
    @click="(event) => $emit('click', event)"
    :backgroundColor="backgroundColor"
    class="card"
    :highlighted="highlighted"
  >
    <div v-if="wip" class="wip-ribbon"><span>in progress...</span></div>
    <div :class="{ logo: true, 'logo-highlighted': highlighted }">
      <img :src="heroImg" />
    </div>
    <div
      :class="{ details: highlighted }"
      style="align-self: stretch; display: flex; flex-grow: 100"
    >
      <p class="description">
        <slot></slot>
      </p>
    </div>
    <div class="powered-by">
      <span>{{ highlighted ? 'powered by' : 'featuring' }}</span>
      <span v-for="[name, logo] in frameworks" :key="name">
        <img :src="logo" />
        {{ name }}
      </span>
    </div>
    <div class="owner" v-if="highlighted">
      <span>made by</span>
      <span>
        <img :src="ownerPhoto" :style="`opacity: ${ownerPhoto ? '1' : '0'}`" />
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
    <img v-if="highlighted" class="framework-bg" :src="bgImg" />
    <div
      v-else
      class="framework-bg"
      :style="`
        -webkit-mask-image: url(${bgImg});
        -webkit-mask-position: center;
        -webkit-mask-repeat: no-repeat;
        mask-image: url(${bgImg});
        mask-position: center;
        mask-repeat: no-repeat;
        background-color: ${backgroundColor}`"
    />
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
    wip: { type: Boolean },
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
  img {
    transition: all 0.4s ease;
    max-width: 80%;
    max-height: 100%;
    width: auto;
    height: 6em;
    padding-top: 1em;
  }
}
.logo-highlighted {
  flex-grow: 1;
  img {
    max-width: 85%;
    height: 15em;
    padding-top: 0;
  }
}
.wip-ribbon {
  position: absolute;
  right: -5px;
  top: -5px;
  overflow: hidden;
  width: 7.5em;
  height: 7em;
  text-align: right;
}
.wip-ribbon span {
  color: #000;
  text-align: center;
  line-height: 28px;
  transform: rotate(40deg);
  width: 10em;
  display: block;
  background: #fff;
  box-shadow: 0 3px 10px -5px black;
  position: absolute;
  top: 1.8em;
  right: -1.9em;
  padding-left: 0.5em;
}
.description {
  height: 100%;
  display: flex;
  align-items: center;
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
  opacity: 0;
  transition: all 0.4s ease;
}
.card {
  @mixin detailed-card {
    .framework-bg {
      opacity: 0.2;
    }
    .details {
      max-height: 100%;
      opacity: 1;
    }
    .logo-highlighted {
      img {
        height: 5rem;
        padding-top: 1em;
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
    transition: opacity 0.4s ease;
    height: 1.5em;
    width: 1.5em;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.2em;
    top: -0.15em;
    position: relative;
  }
}

.powered-by {
  margin-top: auto;
  margin-bottom: 0.4em;
}

.action-description {
  display: flex;
  align-items: flex-end;
  font-weight: bold;
}

.action-description-big {
  font-size: 1.5em;
}
</style>
