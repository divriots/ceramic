import Twitter from './index.vue';
import 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css';

export const twiter = () => ({
  components: { Twitter },
  template: `<Twitter/>`,
});

export const twitterName = () => ({
  components: { Twitter },
  template: `<Twitter>twitter</Twitter>`,
});
