import Promise from '../src/index.vue';
import '~/tailwind/src/styles.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

export const story1 = () => ({
  components: { Promise },
  template: `<Promise/>`,
});
