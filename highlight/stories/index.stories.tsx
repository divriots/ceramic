import Highlight from '../src/Highlight.vue';
import '~/tailwind/src/styles.css';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
};

export const highlight = () => ({
  components: { Highlight },
  template: `<Highlight/>`,
});
