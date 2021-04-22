import Discord from './index.vue';
import 'https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css';

export const discord = () => ({
  components: { Discord },
  template: `<Discord/>`,
});

export const discordName = () => ({
  components: { Discord },
  template: `<Discord>discord</Discord>`,
});
