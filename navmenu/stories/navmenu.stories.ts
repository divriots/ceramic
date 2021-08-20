import { NavMenu } from '~/navmenu';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const nav_menu = () => ({
  components: { NavMenu },
  data: () => ({
    routes: [
      {
        pathname: '/pricing',
        label: 'Pricing',
      },
      {
        pathname: '/early-access',
        label: 'Early Access',
      },
    ],
    pathname: '/early-access',
  }),
  template: `<NavMenu :routes="routes" :pathname="pathname" />`,
});
