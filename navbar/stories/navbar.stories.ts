import { NavBar } from '~/navbar';
import '~/tailwind';

export default {
  parameters: {
    backgrounds: { default: 'black' },
  },
};

export const navbar = () => ({
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
        {
          pathname: '#',
          label: 'Blog',
        },
      ],
      pathname: '/blog',
    };
  },
  template: `<NavBar :routes="routes" :pathname="pathname" :appRoute="appRoute"/>`,
});
