import StarterCard from '../src/StarterCard.vue';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
  },
  args: {
    components: { StarterCard },
    template: `<StarterCard v-bind="props" actionDescription="Get started">{{ props.desc }}</StarterCard>`,
  },
};

export const normal = (args) => ({
  setup: () => ({
    props: {
      backgroundColor: '#944db8',
      heroImg: 'https://backlight.dev/assets/lib-white/react-typo.svg',
      name: 'React',
      desc: 'Design token in system-ui with examples in styled-components and theme-ui.',
      url: '/request-earlyaccess',
      bgImg: 'https://backlight.dev/assets/lib-white/react.svg',
    },
  }),
  ...args,
});

export const big = (args) => ({
  setup: () => ({
    props: {
      backgroundColor: '#30c6b9',
      heroImg: 'https://backlight.dev/assets/lib-white/chakra-typo.svg',
      name: 'Chakra',
      desc: `Chakra UI is a simple, modular and accessible component library. 
    Based on system-ui tokens.`,
      url: '/request-earlyaccess',
      bgImg: 'https://backlight.dev/assets/lib-white/react.svg',
      size: 'big',
    },
  }),
  ...args,
});
