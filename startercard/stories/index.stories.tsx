import StarterCard from '../src/StarterCard.vue';
import kits from '../../highlight/src/data.js';

export default {
  parameters: {
    layout: 'centered',
  },
  args: {
    components: { StarterCard },
    template: `<StarterCard v-bind="props" actionDescription="Get started">{{ props.desc }}</StarterCard>`,
  },
};

function props(name: string) {
  return kits.find((kit) => kit.name.toLowerCase().indexOf(name) >= 0);
}

export const normal = (args) => ({
  setup() {
    return { props: props('chakra') };
  },
  ...args,
});

export const big = (args) => ({
  setup() {
    return { props: { ...props('simba'), size: 'big' } };
  },
  ...args,
});
