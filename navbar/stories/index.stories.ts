import NavBar from '../src/index.vue';
import '~/tailwind/src/styles.css';

export default {
  parameters: {
    backgrounds: { default: 'black' },
  },
};

export const story1 = () => ({
  components: { NavBar },
  data() {
    return {
      routes: [
        {
          pathname: '#',
          label: 'Pricing',
        },
        {
          pathname: '#',
          label: 'Early Access',
        },
      ],
      pathname: '/blog',
    };
  },
  template: `<NavBar :routes="routes" :pathname="pathname" :appRoute="appRoute"/>`,
});
