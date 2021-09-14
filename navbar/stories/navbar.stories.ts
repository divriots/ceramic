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
          pathname: '/princing',
          label: 'Pricing',
        },
        {
          pathname: '/get-started',
          label: 'Get started',
        },
        {
          pathname: '/blog',
          label: 'Blog',
        },
      ],
      pathname: '/get-started',
    };
  },
  template: `<NavBar :routes="routes" :pathname="pathname" :appRoute="appRoute"/>`,
});
