<script>
  import DoubleCtaVue from '../../double-cta/src/double-cta.vue';
export default {
  setup: () => ({
    DoubleCtaVue,
    stop:()=>{
      const heroVideo = document.getElementById('hero-video');
      heroVideo.pause();
      heroVideo.currentTime = 0;
      heroVideo.classList.add('hidden');
      heroVideo.blur();
    },
    play:()=>{
      const heroVideo = document.getElementById('hero-video');
      heroVideo.play();
      heroVideo.classList.remove('hidden');
      heroVideo.focus();
    }
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
      <video id="hero-video" class="absolute hidden md:rounded-lg" preload="none" volume="0.3" controls @ended="stop"
        @blur="stop">
        <source
          src=" https://user-images.githubusercontent.com/5250572/131305534-6e4baa97-8cb1-4e45-b14c-15600f232167.mp4"
          type="video/mp4">
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
            <h1 class="title">
              <span class="text-primary whitespace-nowrap">
                Design Systems,
              </span>
              <span class="flex items-center md:hidden">Code-side<button class="ml-4 text-3xl" @click="play">🎬</button></span>
            </h1>
            <p class="subtitle">
              All-in-one Design System platform.
              <br />
              Build components and reference site.
              <br />
              Developers and Designers together.
            </p>
            <component :is="DoubleCtaVue" :primaryText="'Request early access'" :primaryHref="'/request-earlyaccess'"
              :secondaryText="'Book a demo'" :secondaryHref="'https://calendly.com/gg_/backlight'"></component>
          </div>
        </div>
      </div>
      <div class="img-video relative hidden md:block cursor-pointer" @click="play">
        <img class="absolute max-w-none h-full" src="/img/landing/hero.png"/>
        <svg class="absolute left-0 bottom-0 text-primary stroke-current h-12" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490">
          <circle cx="230" cy="245" r="200" stroke-width="20" fill="black" />
          <polygon points="181.062,336.575 343.938,242.5 181.062,148.425" fill="currentColor" />
        </svg>
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
    transition: display .1s ease-out;
    height: 100%;
    z-index: 11;

    &:not(.hidden)~* {
      transition: opacity .5s ease-out;
      opacity: 0;
    }
  }

  .img-video {
    margin: 4px;

    &:hover {
      transform: scale(1.02);
      /* transition: transform .1s; */
    }
  }

  .gradient.hero::before {
    height: 1200px;
  }
</style>