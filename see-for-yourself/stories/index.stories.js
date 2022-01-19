import See from '../src/index.vue';
import '~/tailwind';

export const story1 = () => ({
  components: { See },
  template: `<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&display=swap" rel="stylesheet"> <See imgSrc="/img/landing/hero.png"/>`,
});
