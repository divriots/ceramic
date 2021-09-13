<script>
  export default {
  props: {
    videoType: String,
    videoSrc: String,
    imgSrc: String,
  },

  setup: () => ({
    stop: () => {
      const heroVideo = document.getElementById('hero-video');
      heroVideo.pause();
      heroVideo.currentTime = 0;
      heroVideo.classList.add('hidden');
      heroVideo.nextElementSibling.classList.remove('hidden');
      heroVideo.blur();
    },
    play: () => {
      const heroVideo = document.getElementById('hero-video');
      heroVideo.play();
      heroVideo.classList.remove('hidden');
      heroVideo.nextElementSibling.classList.add('hidden');
      heroVideo.focus();
    },
  }),
};
</script>
<template>
  <section class="
      gradient
      text-white
      hero
      w-full
      overflow-hidden
      my-8
      sm:my-16
      md:my-24
      lg:my-28
      xl:my-32
    ">
    <div class="relative wrapper max-w-6xl mx-auto">
      <iframe v-if="videoType === 'youtube'" id="hero-video" width="560" height="315" :src="videoSrc"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
        class="absolute hidden md:rounded-lg"></iframe>
      <video v-else id="hero-video" class="absolute hidden md:rounded-lg" preload="none" volume="0.3" controls
        @ended="stop" @blur="stop">
        <source :src="videoSrc" type="video/mp4" />
      </video>
      <div class="
          z-10
          lg:max-w-2xl lg:w-full
          self-center
          py-8
          sm:py-12
          md:py-16
          lg:py-20
          xl:py-28
        ">
        <div class="flex justify-center px-4 md:px-16">
          <div class="text-left">
            <h1 class="main-title font-semibold leading-normal">
              <span class="text-primary whitespace-nowrap">
                Design Systems,
              </span>
              <span class="flex items-center">Code-side</span>
            </h1>
            <p class="main-subtitle mt-3 sm:mt-5 sm:mx-auto md:mt-5 lg:mx-0">
              All-in-one Design System platform.
              <br />
              Manage components, stories and documentation.
              <br />
              The source of truth for front-end teams.
            </p>
            <div class="flex mt-8 space-x-8">
              <a class="btn-primary" href="/get-started">Get Started</a>
              <button
                class="action inline-flex items-center text-primary"
                @click="play"
              >
                <svg
                  class="text-primary stroke-current h-8 inline"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 490 490"
                >
                  <polygon
                    points="181.062,336.575 343.938,242.5 181.062,148.425"
                    fill="currentColor"
                  />
                </svg>
                Play video
              </button>
            </div>
            <component :is="DoubleCtaVue" :primaryText="'Request early access'" :primaryHref="'/request-earlyaccess'"
              :secondaryText="'Book a demo'" :secondaryHref="'https://calendly.com/gg_/backlight'"></component>
          </div>
        </div>
      </div>
      <div class="img-video relative hidden md:block cursor-pointer" @click="play">
        <img class="md:rounded-lg absolute max-w-none h-full" :src="imgSrc" />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .gradient .wrapper {
    min-height: 400px;

    display: grid;
    grid-template-columns: 1fr;

    @media only screen and (min-width: 768px) {
      grid-template-columns: 6fr 4fr;
    }
  }

  #hero-video {
    left: 50%;
    outline: none;
    transform: translateX(-50%);
    transition: display 0.1s ease-out;
    height: 100%;
    z-index: 11;

    &:not(.hidden)~* {
      transition: opacity 0.1s ease-out;
      opacity: 0;
    }
  }

  .img-video {
    margin: 4px;

    &:hover {
      transform: scale(1.02);
      transition: transform 0.2s;
    }
  }

  .gradient.hero::before {
    height: 1200px;
  }
</style>