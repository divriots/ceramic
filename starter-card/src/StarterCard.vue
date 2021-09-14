<template>
  <component
    :is="Card"
    :url="url"
    @click="(event) => $emit('click', event)"
    :backgroundColor="backgroundColor"
    :highlighted="highlighted"
    :class="{ card: true, 'a-highlighted': highlighted }"
  >
    <div v-if="wip" class="wip-ribbon"><span>in progress...</span></div>
    <div :class="{ logo: true }">
      <img :src="heroImg" />
    </div>
    <div :class="{ details: highlighted }">
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
    <div class="owner" v-if="highlighted && owner">
      <span>made by</span>
      <span>
        <img :src="ownerPhoto" :style="`opacity: ${ownerPhoto ? '1' : '0'}`" />
        {{ owner }}
      </span>
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
.card {
  justify-content: space-between;
}

.logo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: min(100%, 150px);
    max-width: 100%;
    transition: all 0.4s ease;
    padding: 0 10px;
    padding-top: 1em;
  }
}

.a-highlighted {
  .logo {
    flex-shrink: 1;
    flex-grow: 1;
    min-height: 0;
    min-width: 0;
    overflow: hidden;
  }

  img {
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
  font-size: 0.9em;
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

p {
  margin: 0;
}

.details {
  @media (hover: none) {
    font-size: 0.9em;
  }
  flex-grow: 1;
  display: flex;
  overflow: hidden;
  max-height: 0px;
  opacity: 0;
  flex-shrink: 0;
  transition: all 0.4s ease;
  margin-bottom: 1em;
  margin-top: 1em;
}

.card {
  @mixin detailed-card {
    .framework-bg {
      opacity: 0.2;
    }

    .details {
      max-height: 15em;
      opacity: 1;
    }

    .logo {
      img {
        max-width: 85%;
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
  @media (hover: none) {
    font-size: 0.8em;
  }

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
    @media (hover: none) {
      height: 1.2em;
      width: 1.2em;
    }
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.2em;
    top: -0.15em;
    position: relative;
  }
}

.powered-by {
  margin-bottom: 0.4em;
}
</style>
