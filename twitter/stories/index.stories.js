import Twitter from '../src/index.vue';
import '~/tailwind';

export const twiter = () => ({
  components: { Twitter },
  template: `<Twitter/>`,
});

export const twitterName = () => ({
  components: { Twitter },
  template: `<Twitter>twitter</Twitter>`,
});
