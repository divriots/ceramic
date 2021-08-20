import { StarterCard } from '~/starter-card';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
};

export const normal = () => ({
  setup: () => ({
    props: {
      backgroundColor: '#30c6b9',
      heroImg: 'https://backlight.dev/assets/lib-white/chakra-typo.svg',
      name: 'Chakra',
      desc: `Chakra UI is a simple, modular and accessible component library. 
    Based on system-ui tokens.`,
      url: '/request-earlyaccess',
      bgImg: 'https://backlight.dev/assets/lib-white/react.svg',
    },
  }),
  components: { StarterCard },
  template: `<StarterCard v-bind="props" actionDescription="Get started">{{ props.desc }}</StarterCard>`,
});

export const big = (args) => ({
  setup: () => ({
    props: {
      backgroundColor: '#06B6D4',
      heroImg: 'https://backlight.dev/assets/lib-white/tailwindcss-typo.svg',
      name: 'Tailwindcss',
      desc: `Visualy setup tailwind's design tokens.
           Contains Tailwind headless-ui components for React and Vue.`,
      url: '/request-earlyaccess',
      bgImg: 'https://backlight.dev/assets/lib-white/css3.svg',
      size: 'big',
    },
  }),
  components: { StarterCard },
  template: `<StarterCard v-bind="props" actionDescription="Get started">{{ props.desc }}</StarterCard>`,
});
