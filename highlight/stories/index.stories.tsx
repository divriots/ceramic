import Highlight from '../src/Highlight.vue';
import '~/tailwind';

export default {
  parameters: {
    backgrounds: { default: 'black' },
  },
};

export const highlight = () => ({
  components: { Highlight },
  template: `<Highlight/>`,
});
