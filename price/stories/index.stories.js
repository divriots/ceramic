import Price from '../src/index.vue';
import '~/tailwind/src/styles.css';
import plans from '../../config/src/plans';

export default {
  parameters: {
    layout: 'centered',
    // backgrounds: { default: 'black' },
  },
  args: {
    components: { Price },
    template: `<Price v-bind="props" class="w-80 bg-primary text-white"/>`,
  },
};

export const def = (args) => ({
  setup() {
    return { props: plans[0] };
  },
  ...args,
});
export const pro = (args) => ({
  setup() {
    return { props: plans[1] };
  },
  ...args,
});
export const enterprise = (args) => ({
  setup() {
    return { props: plans[2] };
  },
  ...args,
});
