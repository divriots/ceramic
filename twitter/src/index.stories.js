import Twitter from './index.vue';
import '~/tailwind.css';

export const twiter = () => ({
  components: { Twitter },
  template: `<Twitter/>`,
});

export const twitterName = () => ({
  components: { Twitter },
  template: `<Twitter>twitter</Twitter>`,
});
