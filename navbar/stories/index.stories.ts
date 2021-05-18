import NavBar from '../src/index.vue';
import '~/tailwind/src/styles.css';
import routes from './routes';

export const story1 = () => ({
  components: { NavBar },
  data() {
    return { routes, pathname: '/blog' };
  },
  template: `<NavBar :routes="routes" :pathname="pathname"/>`,
});
