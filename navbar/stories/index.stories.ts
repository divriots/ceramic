import NavBar from '../src/index.vue';
import '~/tailwind/src/styles.css';
import routes from './routes';

export const story1 = () => ({
  components: { NavBar },
  data() {
    return { routes };
  },
  template: `<NavBar :routes="routes"/>`,
});
