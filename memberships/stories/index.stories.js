import Memberships from '../src/Memberships.vue';
import Features from '../src/Features.vue';

import '~/tailwind/src/styles.css';

export const memberships = () => ({
  components: { Memberships },
  template: `<Memberships/>`,
});

export const features = () => ({
  components: { Features },
  template: `<Features/>`,
});
