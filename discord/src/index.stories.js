import Discord from './index.vue';
import '~/tailwind.css';

export const discord = () => ({
  components: { Discord },
  template: `<Discord/>`,
});

export const discordName = () => ({
  components: { Discord },
  template: `<Discord>discord</Discord>`,
});
