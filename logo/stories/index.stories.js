import NavBar from '../../navbar/src/index.vue';
import '~/tailwind/src/styles.css';

export const story1 = () => ({
  components: { NavBar },
  data() {
    return { routes: [], pathname: '/blog' };
  },
  template: `<NavBar :routes="routes" :pathname="pathname"/>`,
});
