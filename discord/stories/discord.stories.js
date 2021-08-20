import { Discord } from '~/discord';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const discord = () => ({
  components: { Discord },
  template: `<Discord/>`,
});

export const discordName = () => ({
  components: { Discord },
  template: `<Discord>discord</Discord>`,
});
