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

export const smallContent = (args) => ({
  setup: () => ({
    props: {
      backgroundColor: '#967a2d',
      heroImg: 'https://backlight.dev/assets/lib-white/simba.svg',
      desc: `<ul class="list-disc list-inside">
        <li>Open-source</li>
        <li>20+ Web Components already</li>
        <li>Based on Lion's accessible components</li>
        <li>Dark mode out-of-the-box</li>
        </ul>`,
      url: '/edit/5vtJtbY04aoD1dGKcsu1',
      bgImg: 'https://backlight.dev/assets/lib-white/lit.svg',
      owner: 'divriots',
      ownerPhoto: 'https://backlight.dev/assets/logo/dr-b.svg',
      highlighted: true,
      frameworks: new Map([
        ['Lion', 'https://backlight.dev/assets/lib-white/lion.svg'],
        ['Lit', 'https://backlight.dev/assets/lib-white/lit.svg'],
      ]),
    },
  }),
  ...args,
});

export const largeContent = (args) => ({
  setup: () => ({
    props: {
      backgroundColor: 'rgb(98, 0, 238)',
      heroImg: 'https://backlight.dev/assets/lib-white/smelte.svg',
      desc: `<ul><li>Mobile &amp; Web</li><li>Based on Paper components</li><li>Paper Design Token</li><li>25+ cross-platform components</li><li>Dark mode support</li></ul><ul><li>Mobile &amp; Web</li><li>Based on Paper components</li><li>Paper Design Token</li><li>25+ cross-platform components</li><li>Dark mode support</li></ul>`,
      url: '/edit/5vtJtbY04aoD1dGKcsu1',
      bgImg: 'https://backlight.dev/assets/lib-white/lit.svg',
      owner: 'divriots',
      ownerPhoto: 'https://backlight.dev/assets/logo/dr-b.svg',
      highlighted: true,
      frameworks: new Map([
        ['Paper', 'https://backlight.dev/assets/lib-white/paper.svg'],
        [
          'React-Native',
          'https://backlight.dev/assets/lib-white/react-native.svg',
        ],
        ['Something cool', ''],
      ]),
    },
  }),
  ...args,
});
