import Logo from '../src/index.vue';
import '~/tailwind/src/styles.css';

export const story1 = () => ({
  components: { Logo },
  data() {
    return { routes: [], pathname: '/blog' };
  },
  template: `<Logo/>`,
});
