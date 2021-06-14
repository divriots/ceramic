<template>
  <a
    ref="card"
    :href="url"
    v-on:click="(event) => $emit('click', event)"
    :class="`starter-kit starter-kit-${size}`"
  >
    <figure class="tilter__figure">
      <div
        class="tilter__image"
        :style="`background-color: ${backgroundColor};`"
      >
        <slot name="background-layer"></slot>
      </div>
      <div class="tilter__deco tilter__deco--shine"><div></div></div>
      <div class="tilter__caption">
        <slot name="caption-layer"></slot>
      </div>
    </figure>
  </a>
</template>
<script>
import './tilting';

export default {
  props: {
    url: { type: String },
    onClick: { type: Object },
    backgroundColor: { type: String },
    size: { type: String, default: 'normal' },
  },
  mounted: function () {
    new TiltFx(this.$refs.card, {});
  },
};
</script>
<style lang="scss" scoped>
.starter-kit {
  color: white;
  text-decoration: inherit;
  position: relative;

  font-size: 1.1rem;
  text-align: left;
  perspective: 1000px;

  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0.2rem 0.2rem 0.25rem rgba(0, 0, 30, 0.5));
  }
}
.starter-kit-normal {
  @media (min-width: 640px) {
    width: 20rem;
  }
  width: 16rem;
  height: 460px;
}
.starter-kit-big {
  width: 24rem;
  height: 520px;
}

.tilter {
  position: relative;
  display: block;
  flex: none;
  width: 300px;
  height: 415px;
  margin: 1.5em 2.5em;
  color: #fff;
}

.tilter:hover,
.tilter:focus {
  color: #fff;
  outline: none;
}

.tilter__figure,
.tilter__image {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
}

.tilter__image {
  border-radius: 0.75rem;
  overflow: hidden;
}

.tilter__figure > * {
  transform: translateZ(0px);
  /* Force correct stacking order */
}

.tilter__figure {
  position: relative;
}

.tilter__figure::before {
  content: '';
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
}

.tilter__deco {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.tilter__deco--shine {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0.75rem;
}

.tilter__deco--shine div {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-image: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0.25) 50%,
    transparent 100%
  );
}

.tilter__figure,
.tilter__deco--overlay,
.tilter__deco--shine div,
.tilter__caption {
  transition: transform 0.2s ease-out;
}

.tilter__caption {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  box-sizing: border-box;

  &:hover {
    border-width: thin;
    border-style: solid;
    border-radius: 0.75rem;
  }
}
</style>
