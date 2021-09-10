import Hero from '../src/index.vue';
import '~/tailwind';

export default {
  parameters: {
    layout: 'fullscreen',
  },
};

export const story1 = () => ({
  components: { Hero },
  template: `<Hero videoSrc="https://user-images.githubusercontent.com/5250572/131305534-6e4baa97-8cb1-4e45-b14c-15600f232167.mp4" imgSrc="/img/landing/hero.png"/>`,
});
