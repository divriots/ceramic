import Hero from './index.vue';
import 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css';

export const story1 = () => ({
  components: { Hero },
  template: `<Hero/>`,
});
