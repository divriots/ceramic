import Hero from '../src/index.vue';
import '~/tailwind';

export default {
  parameters: {
    layout: 'fullscreen',
  },
};

export const story1 = () => ({
  components: { Hero },
  template: `<Hero/>`,
});
