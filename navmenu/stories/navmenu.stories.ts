import { NavMenu } from '~/navmenu';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const nav_menu = () => ({
  components: { NavMenu },
  data() {
    return {
      routes: [
        {
          pathname: '/pricing',
          label: 'Pricing',
        },
        {
          pathname: '/get-started',
          label: 'Get Started',
        },
      ],
      pathname: '/get-started',
    };
  },
  template: `<NavMenu :routes="routes" :pathname="pathname" />`,
});
