import PriceInfo from '../src/index.vue';
import '~/tailwind';
import { Free, Pro, Enterprise } from '../../config/src/plans';

export default {
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'black' },
  },
  args: {
    components: { PriceInfo },
    template: `<PriceInfo v-bind="props" class="w-80 bg-white" banner=""/>`,
  },
};

export const def = (args) => ({
  setup() {
    return { props: Free };
  },
  ...args,
});

export const pro = (args) => ({
  setup() {
    return { props: Pro };
  },
  ...args,
  template: `<PriceInfo v-bind="props" class="w-80 bg-secondary text-white" banner="Banner"/>`,
});

export const enterprise = (args) => ({
  setup() {
    return { props: Enterprise };
  },
  ...args,
});
