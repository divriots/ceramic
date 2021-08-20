import { Logo } from '~/logo';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
};

export const story1 = () => ({
  components: { Logo },
  data() {
    return { routes: [], pathname: '/blog' };
  },
  template: `<Logo/>`,
});
