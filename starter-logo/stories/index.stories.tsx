import StarterLogo from '../src/StarterLogo.vue';
import '~/tailwind';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
};

export const normal = () => ({
  setup: () => ({
    props: {
      heroImg: 'https://backlight.dev/assets/lib-white/react-typo.svg',
      name: 'React',
    },
  }),
  components: { StarterLogo },
  template: /*html*/ `
    <div style="display: flex; flex-direction: column; color: white;">
      <StarterLogo v-bind="props"></StarterLogo>
    </div>`,
});

export const big = () => ({
  setup: () => ({
    props: {
      heroImg: 'https://backlight.dev/assets/lib-white/chakra-typo.svg',
      name: 'Chakra',
      size: 'big',
    },
  }),
  components: { StarterLogo },
  template: /*html*/ `
    <div style="display: flex; flex-direction: column; color: white;">
      <StarterLogo v-bind="props"></StarterLogo>
    </div>`,
});
