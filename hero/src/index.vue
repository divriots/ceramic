<script>
import { ref, computed, onBeforeUnmount } from 'vue';

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

    const loadYoutube = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        return new Promise((resolve) => {
          youtubeScript = document.createElement('script');
          youtubeScript.src = 'https://www.youtube.com/player_api';
          const firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(youtubeScript, firstScriptTag);

          window.onYouTubeIframeAPIReady = () => {
            const player = new YT.Player('hero-embedded-placeholder', {
              videoId: videoSrc,
              events: {
                onReady: () => resolve(player),
              },
            });
          };
        });
      }
    };

    onBeforeUnmount(() => {
      if (embeddedPlayer && youtubeScript) {
        embeddedPlayer.destroy();
        youtubeScript.parentNode.removeChild(youtubeScript);
      }
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
      play: async () => {
        const video = heroVideo.value;
        video.classList.remove('hidden');
        video.previousElementSibling.classList.remove('hidden');
        video.nextElementSibling.classList.add('hidden');
        video.focus();

        if (isYoutube.value) {
          embeddedPlayer = await loadYoutube();
          embeddedPlayer.playVideo();
        } else {
          // Show loading animation.
          var playPromise = video.play();

          if (playPromise !== undefined) {
            playPromise
              .then((_) => {
                // Automatic playback started!
                // Show playing UI.
              })
              .catch((error) => {
                // Auto-play was prevented
                // Show paused UI.
              });
          }
        }
      },
    };
  },
};
</script>
<template>
  <section
    class="gradient text-white hero w-full overflow-hidden my-8 sm:my-16 md:my-24 lg:my-28 xl:my-32"
  >
    <div class="relative wrapper max-w-6xl mx-auto">
      <div id="hero-video-overlay" class="hidden" @click="stop"></div>
      <div
        v-if="isYoutube"
        id="hero-embedded-video"
        class="absolute hidden md:rounded-lg"
        ref="heroVideo"
        tabindex="-1"
      >
        <div class="embedded-wrapper">
          <div id="hero-embedded-placeholder"></div>
        </div>
      </div>
      <video
        v-else
        id="hero-video"
        class="absolute hidden md:rounded-lg"
        preload="none"
        volume="0.3"
        controls
        @ended="stop"
        ref="heroVideo"
      >
        <source :src="videoSrc" type="video/mp4" />
      </video>
      <div
        class="z-10 lg:max-w-2xl lg:w-full self-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28"
      >
        <div class="flex justify-center px-4 md:pl-4 md:pr-16">
          <div class="text-left">
            <h1 class="main-title font-semibold leading-normal">
              <span class="text-primary whitespace-nowrap">
                Design Systems,
              </span>
              <span class="flex items-center">Code-side</span>
            </h1>
            <p class="main-subtitle mt-3 sm:mt-5 sm:mx-auto md:mt-5 lg:mx-0">
              <a href="/" class="text-primary">Backlight</a>
              is a collaborative platform empowering front-end teams to build
              and ship great Design Systems.
            </p>
            <p class="main-subtitle mt-3 sm:mt-5 sm:mx-auto md:mt-5 lg:mx-0">
              From code to documentation and npm package, Backlight is the
              all-in-one devtool for Design Systems that empowers developers and
              improves collaboration with designers, UX writers and product
              owners.
            </p>
            <p class="main-subtitle mt-3 sm:mt-5 sm:mx-auto md:mt-5 lg:mx-0">
              Now, every team can afford a
              <a href="/mastery/what-is-a-design-system" class="text-primary">
                Design System.
              </a>
            </p>
            <div class="flex mt-8 space-x-8">
              <a class="btn-primary" href="/get-started">Get Started</a>
              <a
                href="https://calendly.com/backlight_"
                target="_blank"
                rel="noopener noreferrer nofollow"
                class="btn-outline demo"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="cursor-pointer px-4" @click="play">
        <div class="img-gradient rounded-lg flex items-center justify-center">
          <button
            class="btn-primary rounded-full p-4 w-16 absolute md:bottom-16 md:right-4"
            @click="play"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              class="ml-1"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
            >
              <g fill="#FFFFFF">
                <path
                  d="M3.78 2L3 2.41v12l.78.42l9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z"
                ></path>
              </g>
            </svg>
          </button>
          <img
            class="rounded-lg md:w-max relative md:max-w-none md:h-full z-img"
            :src="imgSrc"
            loading="lazy"
          />
        </div>
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

    :deep(iframe) {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }

  &:not(.hidden) ~ * {
    transition: opacity 0.1s ease-out;
    opacity: 0;
  }
}

#hero-video {
  left: 50%;
  outline: none;
  transform: translate(-50%, -50%);
  transition: display 0.1s ease-out;
  z-index: 11;
  border-radius: 0.5rem;
  overflow: hidden;
  max-width: 640px;
  width: 100%;
  top: 50%;

  &:not(.hidden) ~ * {
    transition: opacity 0.1s ease-out;
    opacity: 0;
  }

  @media only screen and (min-width: 768px) {
    transform: translateX(-50%);
    top: auto;
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

.z-img {
  z-index: -1;
  display: block;
}

.img-gradient {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 80%
  );
}
@media (min-width: 768px) {
  .img-gradient {
    background: linear-gradient(
      290deg,
      rgba(0, 0, 0, 0.8) 40%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}
</style>
