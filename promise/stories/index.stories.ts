import Promise from '../src/index.vue';
import '~/tailwind/src/styles.css';

export const story1 = () => ({
  components: { Promise },
  template: `<Promise/>`,
});
