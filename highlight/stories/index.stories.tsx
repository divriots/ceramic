import Highlight from '../src/Highlight.vue';
import '~/tailwind/src/styles.css';

export const highlight = () => ({
  components: { Highlight },
  template: `<Highlight/>`,
});
