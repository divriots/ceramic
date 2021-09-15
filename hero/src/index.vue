<script>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export default {
  props: {
    videoType: String,
    videoSrc: String,
    imgSrc: String,
  },

  setup({ videoType, videoSrc }) {
    const heroVideo = ref(null);
    const isYoutube = computed(() => videoType === 'youtube');
    let embeddedPlayer;
    let youtubeScript;

    onMounted(() => {
      if (isYoutube.value) {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
          youtubeScript = document.createElement('script');
          youtubeScript.src = 'https://www.youtube.com/player_api';
          const firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(youtubeScript, firstScriptTag);

          window.onYouTubeIframeAPIReady = () => {
            embeddedPlayer = new YT.Player('hero-embedded-placeholder', {
              videoId: videoSrc,
            });
          };
        }
      }
    });

    onBeforeUnmount(() => {
      embeddedPlayer.destroy();
      youtubeScript.parentNode.removeChild(youtubeScript);
    });

    return {
      heroVideo,
      isYoutube,
      stop: () => {
        const video = heroVideo.value;
        video.classList.add('hidden');
        video.previousElementSibling.classList.add('hidden');
        video.nextElementSibling.classList.remove('hidden');
        video.blur();

        if (isYoutube.value) {
          embeddedPlayer.stopVideo();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      play: () => {
        const video = heroVideo.value;
        video.classList.remove('hidden');
        video.previousElementSibling.classList.remove('hidden');
        video.nextElementSibling.classList.add('hidden');
        video.focus();

        if (isYoutube.value) {
          embeddedPlayer.playVideo();
        } else {
          video.play();
        }
      },
    };
  },
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
      <div id="hero-video-overlay" class="hidden" @click="stop"></div>
      <div v-if="isYoutube" id="hero-embedded-video" class="absolute hidden md:rounded-lg" ref="heroVideo"
        tabindex="-1">
        <div class="embedded-wrapper">
          <div id="hero-embedded-placeholder"></div>
        </div>
      </div>
      <video v-else id="hero-video" class="absolute hidden md:rounded-lg" preload="none" volume="0.3" controls
        @ended="stop" ref="heroVideo">
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
                class="action inline-flex items-center text-primary pr-3"
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

  #hero-video-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
  }

  #hero-embedded-video {
    width: 100%;
    max-width: 640px;
    z-index: 11;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);

    @media only screen and (min-width: 768px) {
      left: 50%;
      outline: none;
      transform: translateX(-50%);
      transition: display 0.1s ease-out;
      border-radius: 0.5rem;
      overflow: hidden;
      top: auto;
    }

    .embedded-wrapper {
      width: 100%;
      height: 0;
      padding-top: 56.25%;
      position: relative;

      ::v-deep iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }

    &:not(.hidden)~* {
      transition: opacity 0.1s ease-out;
      opacity: 0;
    }
  }

  #hero-video {
    left: 50%;
    outline: none;
    transform: translateX(-50%);
    transition: display 0.1s ease-out;
    z-index: 11;
    border-radius: 0.5rem;
    overflow: hidden;
    max-width: 640px;

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