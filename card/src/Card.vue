<template>
  <!-- in case you don't want a clickable anchor card, simply don't pass a url and it will be a div instead -->
  <component class="card" :is="url ? 'a' : 'div'" :href="url" v-on:click="(event) => $emit('click', event)" :class="{
      'starter-kit': true,
      'reduced-hover': reducedHover,
    }" :style="
      highlighted
        ? `background-color: ${backgroundColor};`
        : `background-color: black; border: 3px solid ${backgroundColor};`
    ">
    <slot></slot>
    <div class="action-description details flex items-center">
      {{ actionDescription }}
      <svg xmlns="http://www.w3.org/2000/svg" style="
          width: 1.5em;
          height: 1.5em;
          vertical-align: middle;
          top: 0.1em;
          position: relative;
          display: inline-block;
        " aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd" />
      </svg>
    </div>
  </component>
</template>
<script>
  export default {
  props: {
    url: { type: String },
    onClick: { type: Object },
    actionDescription: { type: String },
    reducedHover: { type: Boolean, default: false },
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
      filter: drop-shadow(0.2rem 0.2rem 0.25rem rgba(0, 0, 30, 0.5));
    }

    @media (min-width: 640px) {
      width: 18em;
      height: 26em;
    }

    width: 16em;
    height: 24em;
  }

  .starter-kit.reduced-hover:hover {
    transform: scale(1.02);
  }

  .action-description {
    font-size: 1.0em;
    font-weight: bold;
    position: absolute;
    right: 0.5em;
    bottom: 1em;
    max-width: 50%;
  }

  .details {
    overflow: hidden;
    max-height: 0px;
    opacity: 0;
    transition: all 0.4s ease;
  }

  .card {
    @mixin detailed-card {
      .details {
        max-height: 100%;
        opacity: 1;
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
</style>