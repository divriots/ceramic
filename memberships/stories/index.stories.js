import Memberships from '../src/Memberships.vue';
import Features from '../src/Features.vue';
import {
  Free,
  Pro,
  Enterprise,
  groups,
  features as feat,
} from '../../config/src/plans';
import '~/tailwind/src/styles.css';

export const memberships = () => ({
  components: { Memberships },
  template: `<Memberships/>`,
});

export const features = () => ({
  components: { Features },
  data() {
    return {
      Free,
      Pro,
      Enterprise,
      feat,
      groups,
    };
  },
  template: `<Features :select="1" :plans="[Free,Pro,Enterprise]" :features="feat" :groups="groups"/>`,
});
