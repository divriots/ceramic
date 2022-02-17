import Hero from '../src/index.vue';
import '~/tailwind';

export default {
  parameters: {
    backgrounds: { default: 'black' },
    layout: 'fullscreen',
  },
};

export const localVideo = () => ({
  components: { Hero },
  template: `<Hero videoSrc="https://user-images.githubusercontent.com/5250572/131305534-6e4baa97-8cb1-4e45-b14c-15600f232167.mp4" imgSrc="/img/landing/hero.png" imgWidth="1280" imgHeight="784"/>`,
});

export const youtubeVideo = () => ({
  components: { Hero },
  template: `<Hero videoType="youtube" videoSrc="veDoIqU2So0" imgSrc="/img/landing/hero.png" imgWidth="1280" imgHeight="784"/>`,
});

export const apiVideo = () => ({
  components: { Hero },
  template: `<Hero videoType="apivideo" videoSrc="vi5SjuJEAtvnXFOSMzCp5gxC" imgSrc="/img/landing/hero.png" imgWidth="1280" imgHeight="784"/>`,
});
