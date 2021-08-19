import { EmptyCard } from '~/empty-card';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
  },
};

export const normal = () => ({
  setup: () => ({
    props: {
      backgroundColor: '#30c6b9',
      url: '/request-earlyaccess',
      desc: `Chakra UI is a simple, modular and accessible component library. 
    Based on system-ui tokens.`,
    },
  }),
  components: { EmptyCard },
  template: `<EmptyCard v-bind="props">{{ props.desc }}</StarterCard>`,
});

export const big = () => ({
  setup: () => ({
    props: {
      backgroundColor: '#30c6b9',
      url: '/request-earlyaccess',
      desc: `Chakra UI is a simple, modular and accessible component library. 
    Based on system-ui tokens.`,
      size: 'big',
    },
  }),
  components: { EmptyCard },
  template: `<EmptyCard v-bind="props">{{ props.desc }}</StarterCard>`,
});
