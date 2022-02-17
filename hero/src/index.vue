<script>
import { ref, computed, onBeforeUnmount } from 'vue';

export default {
  props: {
    videoType: String,
    videoSrc: String,
    imgSrc: String,
    imgHeight: String,
    imgWidth: String,
  },

  setup({ videoType, videoSrc }) {
    const heroVideo = ref(null);
    const isYoutube = computed(() => videoType === 'youtube');
    const isApiVideo = computed(() => videoType === 'apivideo');
    const playing = ref(false);
    let embeddedPlayer;
    let youtubeScript;
    let apiScript;

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

    const loadApiVideo = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        return new Promise((resolve) => {
          apiScript = document.createElement('script');
          apiScript.src = 'https://unpkg.com/@api.video/player-sdk';
          const firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(apiScript, firstScriptTag);

          apiScript.onload = () => {
            const sdk = new PlayerSdk('#hero-embedded-placeholder', {
              id: videoSrc,
              hideControls: true,
              // ... other optional options, see https://docs.api.video/docs/video-player-sdk#method-2-typescript
            });
            sdk.addEventListener('ready', () => {
              sdk.setVolume(0.2);
              sdk.showControls(['volume', 'progressBar', 'fullscreen']);
            });
            resolve(sdk);
          };
        });
      }
    };

    onBeforeUnmount(() => {
      if (embeddedPlayer && youtubeScript) {
        embeddedPlayer.destroy();
        youtubeScript.parentNode.removeChild(youtubeScript);
      }
      if (embeddedPlayer && apiScript) {
        embeddedPlayer.destroy();
        apiScript.parentNode.removeChild(apiScript);
      }
    });

    return {
      heroVideo,
      isYoutube,
      isApiVideo,
      playing,
      stop: () => {
        playing.value = false;
        const video = heroVideo.value;

        if (isYoutube.value) {
          embeddedPlayer.stopVideo();
        } else if (isApiVideo.value) {
          embeddedPlayer.pause();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      },
      play: async () => {
        const video = heroVideo.value;
        playing.value = true;

        if (isYoutube.value) {
          embeddedPlayer = await loadYoutube();
          embeddedPlayer.playVideo();
        } else if (isApiVideo.value) {
          embeddedPlayer = await loadApiVideo();
          embeddedPlayer.play();
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
  <section class="text-white hero w-full overflow-hidden">
    <div class="wrapper">
      <div
        class="left-side z-10 lg:max-w-2xl lg:w-full my-8 sm:my-12 md:my-16 lg:my-20 xl:my-28"
      >
        <div class="flex justify-start px-4 lg:mr-12">
          <div class="text-left">
            <h1 class="main-title font-semibold leading-normal">
              <span class="text-primary whitespace-nowrap">
                Design Systems,
              </span>
              <span class="flex items-center">Code-side</span>
            </h1>
            <p class="main-subtitle mt-3 sm:mt-5 sm:mx-auto md:mt-5 lg:mx-0">
              Backlight is a collaborative platform empowering front-end teams
              to build and ship great Design Systems.
            </p>
            <div class="flex mt-8 space-x-8">
              <a class="btn-primary" href="/get-started">Get Started</a>
              <a
                href="https://calendly.com/backlight_/demo"
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

      <div class="right-side">
        <div
          class="cursor-pointer relative px-4 mb-12 md:my-12"
          @click="play"
          v-show="!playing"
        >
          <img
            class="rounded-lg lg:w-max lg:max-w-none lg:h-full z-img"
            :src="imgSrc"
            :width="imgWidth"
            :height="imgHeight"
          />
          <button
            class="absolute btn-primary rounded-full w-20 h-20 left-1/2 top-1/2 primary-btn-fix"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              class="m-auto"
              width="40"
              viewBox="0 0 16 16"
            >
              <g fill="#000000">
                <path
                  d="M3.78 2L3 2.41v12l.78.42l9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        <div class="set-height" v-show="playing">
          <div class="video-players rounded-lg relative mx-auto">
            <div
              v-if="isYoutube"
              class="hero-embedded-video"
              ref="heroVideo"
              tabindex="-1"
            >
              <div class="embedded-wrapper">
                <div id="hero-embedded-placeholder"></div>
              </div>
            </div>
            <div
              v-else-if="isApiVideo"
              class="hero-embedded-video spinner"
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
              preload="none"
              volume="0.3"
              controls
              @ended="stop"
              ref="heroVideo"
            >
              <source :src="videoSrc" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.hero {
  background-image: radial-gradient(
      at 65% 75%,
      hsla(0, 0%, 10%, 1) 0,
      transparent 100%
    ),
    radial-gradient(at 65% 42%, hsla(47, 100%, 50%, 0.6) 0, transparent 50%),
    radial-gradient(at 30% 35%, hsla(355, 90%, 60%, 0.4) 0, transparent 35%),
    radial-gradient(at 34% 57%, hsla(295, 100%, 50%, 0.4) 0, transparent 50%),
    radial-gradient(at 76% 53%, hsla(261, 100%, 50%, 0.6) 0, transparent 64%);
}

.spinner:before {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: spinner 1.2s linear infinite;
  position: absolute;
  left: 50%;
  margin-left: -32px;
  top: 50%;
  margin-top: -32px;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.wrapper {
  min-height: 400px;
  max-width: 90rem;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 6fr 4fr;
  }
}

.hero-embedded-video {
  border-radius: 0.5rem;
  outline: none;
  transition: display 0.1s ease-out;
  overflow: hidden;

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

.right-side {
  @media only screen and (min-width: 1024px) {
    display: grid;
    place-items: center;
  }
}

#hero-video {
  outline: none;
  transition: display 0.1s ease-out;
  z-index: 11;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 36rem;
  margin: 0 auto;

  &:not(.hidden) ~ * {
    transition: opacity 0.1s ease-out;
    opacity: 0;
  }
}
.set-height {
  @media only screen and (min-width: 1024px) {
    min-height: 784px;
    display: flex;
    align-items: center;
  }
}
.video-players {
  padding: 0.5rem;
  @media only screen and (min-width: 1024px) {
    width: 28rem;
  }
  @media only screen and (min-width: 1280px) {
    width: 42rem;
  }
  @media only screen and (min-width: 1600px) {
    width: 50rem;
  }
}

.primary-btn-fix {
  transform: translate(-50%, -50%);
  transition: transform 0.2s;
  padding: 0;
  padding-left: 5px;
  @media only screen and (min-width: 1024px) {
    left: 45%;
  }
  @media only screen and (min-width: 1280px) {
    left: 60%;
  }
}

.primary-btn-fix:hover {
  transform: translate(-50%, -50%) scale(1.2);
}
</style>
