import Memberships from '../src/Memberships.vue';
import Features from '../src/Features.vue';
import {
  Free,
  Pro,
  Enterprise,
  groups,
  features as feat,
} from '../../config/src/plans';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
};

export const memberships = () => ({
  components: { Memberships },
  template: `<Memberships/>`,
});

Free.action = {};

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
  template: `<Features colSelectClass="bg-primary bg-opacity-25" :colSelectIdx="1" :plans="[Free,Pro,Enterprise]" :features="feat" :groups="groups"/>`,
});
