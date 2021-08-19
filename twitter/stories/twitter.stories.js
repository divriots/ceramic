import { Twitter } from '~/twitter';
import '~/tailwind';

export const twiter = () => ({
  components: { Twitter },
  template: `<Twitter/>`,
});

export const twitterName = () => ({
  components: { Twitter },
  template: `<Twitter>twitter</Twitter>`,
});
