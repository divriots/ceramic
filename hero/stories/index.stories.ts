import Hero from '../src/index.vue';
import '~/tailwind/src/styles.css';

export default {
  parameters: {
    layout: "fullscreen"
  }
}

export const story1 = () => ({
  components: { Hero },
  template: `<Hero/>`,
});
