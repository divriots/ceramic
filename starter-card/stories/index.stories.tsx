import StarterCard from '../src/StarterCard.vue';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
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
      url: '/edit/z99ptYZyvMOGDivUlP9u',
      bgImg: 'https://backlight.dev/assets/lib-white/css3.svg',
      owner: 'divriots',
      ownerPhoto: 'https://backlight.dev/assets/logo/dr-b.svg',
      frameworks: new Map([
        ['fmk1', 'https://backlight.dev/assets/lib-white/sass.svg'],
        ['fmk2', 'https://backlight.dev/assets/lib-white/sass.svg'],
      ]),
    },
  }),
  ...args,
});

export const highlighted = (args) => ({
  setup: () => ({
    props: {
      backgroundColor: '#30c6b9',
      heroImg: 'https://backlight.dev/assets/lib-white/chakra-typo.svg',
      name: 'Chakra',
      desc: `Chakra UI is a simple, modular and accessible component library. 
    Based on system-ui tokens.`,
      url: '/edit/sNbJipmRTmslL3f8RZaO',
      bgImg: 'https://backlight.dev/assets/lib-white/react.svg',
      owner: 'divriots',
      ownerPhoto: 'https://backlight.dev/assets/logo/dr-b.svg',
      highlighted: true,
      frameworks: new Map([
        ['fmk1', 'https://backlight.dev/assets/lib-white/sass.svg'],
        ['fmk2', 'https://backlight.dev/assets/lib-white/sass.svg'],
      ]),
      wip: true,
    },
  }),
  ...args,
});
